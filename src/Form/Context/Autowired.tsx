import React, { useContext } from 'react';
import lodash from 'lodash-es';
import { observer } from 'mobx-react';
import { FormStore } from '../store';
import { ErrorMessage } from '../typings';
import FormContext from './FormContext';
import { ShowError } from '../Components';
import { genFormId } from '../utils';

export type Params = {
  id: string;
  errors?: ErrorMessage[];
  disabled?: boolean;
  validing: boolean | boolean[];
  [key: string]: any;
};

export type AutowiredFuncChild = (params: Params) => React.ReactNode;

export interface AutowiredProps<
  T extends { [key: string]: any } = any,
  P extends Extract<keyof T, string> | Extract<keyof T, string>[] =
    | Extract<keyof T, string>
    | Extract<keyof T, string>[]
> {
  store?: FormStore<T>;
  /**
   * 注入的字段 Key,可以是字符串 或 字符串数组
   */
  id: P;
  children?: React.ReactNode | AutowiredFuncChild;
  /**
   * 数据注入props的名称 默认 value
   */
  valueName?: string;
  /**
   * 数据收集的时机  默认 onChange
   */
  trigger?: string;
  showError?: boolean;
}

const Autowired: React.FC<AutowiredProps> = props => {
  const {
    id,
    children,
    valueName = 'value',
    trigger = 'onChange',
    showError,
  } = props;
  const context = useContext(FormContext);
  const store = props.store || context.store;
  let p: Params;
  if (Array.isArray(id)) {
    p = {
      validing: id.map(key => store?.componentStores[key]?.validing || false),
      id: genFormId(id),
      [valueName]: id.map(key => store?.componentStores[key]?.formatValue),
      [trigger]: (value: any) =>
        id.forEach((key, index) => {
          store?.componentStores[key]?.onChange(value?.[index]);
        }),
      disabled: store?.disabled,
      errors: id.reduce((e: ErrorMessage[] | undefined, key) => {
        const errors = store?.componentStores[key]?.errors;
        if (errors && !store?.componentStores[key]?.validing) {
          if (Array.isArray(e)) {
            e.push(...errors);
          } else {
            return errors;
          }
        }
        return e;
      }, undefined),
    };
  } else {
    p = {
      validing: store?.componentStores[id]?.validing || false,
      id: genFormId(id),
      [valueName]: store?.componentStores[id]?.formatValue,
      [trigger]: store?.componentStores[id]?.onChange,
      errors: store?.componentStores[id]?.validing
        ? undefined
        : store?.componentStores[id]?.errors,
      disabled: store?.disabled,
    };
  }
  let childnode;
  if (lodash.isFunction(children)) {
    childnode = <React.Fragment>{children(p)}</React.Fragment>;
  } else {
    childnode = React.Children.map(children, child => {
      return React.cloneElement(child as React.ReactElement, {
        ...p,
        disabled: (child as React.ReactElement)?.props?.disabled ?? p.disabled,
        [trigger]: (...args: any) => {
          p[trigger]?.(...args);
          return (child as React.ReactElement)?.props?.[trigger]?.(...args);
        },
      });
    });
  }
  if (showError) {
    return <ShowError error={p.errors}>{childnode}</ShowError>;
  }
  return <React.Fragment>{childnode}</React.Fragment>;
};

Autowired.defaultProps = {
  trigger: 'onChange',
  valueName: 'value',
  showError: true,
};

export { Autowired };

export default observer(Autowired);
