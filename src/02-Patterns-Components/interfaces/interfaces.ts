import { ReactElement } from "react";
import { ProductCardProps } from "../components/ProductCard";
import { ProductImageProps } from "../components/ProductImage";
import { ProductTitleProps } from "../components/ProductTitle";
import { ProductButtonsProps } from "../components/ProductButtons";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  count: number;
  increaseBy: (value: number) => void;
  product: Product;
  maxCount?:number
}

export interface ProductCardHOCProps {
  ({
    children,
    product,
    className,
    style,
    onChange,
    value,
    initialValue,
  }: ProductCardProps): JSX.Element;
  Title: ({ title, className, style }: ProductTitleProps) => JSX.Element;
  Image: ({ img, className, style }: ProductImageProps) => JSX.Element;
  Buttons: ({ className }: ProductButtonsProps) => JSX.Element;
}

export interface ShopPingCart {
  [key: string]: ProductInCart;
}

export interface ProductInCart extends Product {
  count: number;
}
