import { ReactElement } from 'react';
import { ProductCardProps } from '../components/ProductCard';
import { ProductImageProps } from '../components/ProductImage';
import { ProductTitleProps } from '../components/ProductTitle';
import { ProductButtonsProps } from '../components/ProductButtons';




export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: ( value: number ) => void;
    product: Product;
}


export interface ProductCardHOCProps {
    ({ children, product, className, style }: ProductCardProps ):JSX.Element,
    Title: ({ title,className,style}: ProductTitleProps) => JSX.Element,
    Image: ({ img,className,style}:ProductImageProps) => JSX.Element,
    Buttons: ({className}:ProductButtonsProps) => JSX.Element
}


