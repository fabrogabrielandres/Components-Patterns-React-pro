import { ReactElement, createContext } from 'react';

import {   useProduct } from '../Hooks/useProduct';
import { Product, ProductContextProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style  ?: React.CSSProperties;
    onChange?:({count,product}:OnChangeArgs)=>void; 
    value ? : number 
}

export interface OnChangeArgs{
    count:number,
    product:Product
}

export const ProductCard = ({ children, product, className , style, value ,onChange  }: ProductCardProps ) => {

    const { count, increaseBy } = useProduct({onChange,product,value});

    return (
        <Provider value={{
            count,
            increaseBy,
            product
        }}>
            <div className={ `${styles.productCard } ${className}`} style={style} >
                { children }
            </div>
        </Provider>
    )
}


