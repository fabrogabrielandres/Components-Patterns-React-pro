import { ReactElement, createContext } from "react";

import { useProduct } from "../Hooks/useProduct";
import { Product, ProductContextProps } from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface ProductCardProps {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (arg:HandleArgs) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: ({ count, product }: OnChangeArgs) => void;
  value?: number;
  initialValue?: InitialValue;
}

export interface OnChangeArgs {
  count: number;
  product: Product;
}

export interface HandleArgs{
  count:number,
  product:Product,
  maxCount?:number,
  isMaxCountReached:boolean,
  increaseBy:(value: number) => void
  reset:()=>void
}

export interface InitialValue {
  count?: number;
  maxCount?: number;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  value,
  initialValue,
  onChange,
}: ProductCardProps) => {
  const { count, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({
    onChange,
    product,
    value,
    initialValue,
  });

  return (
    <Provider
      value={{
        count,
        increaseBy,
        product,
        maxCount
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count,
          product,
          maxCount,
          isMaxCountReached,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
