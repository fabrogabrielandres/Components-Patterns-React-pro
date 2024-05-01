import { useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css'
import "../styles/custom.styles.css"
import noImage from '../assets/no-image.jpg';



export interface ProductImageProps{
    className?: string,
    img?:string,
    style?:React.CSSProperties
}


export const ProductImage = ({ img = '' , className }:ProductImageProps) => {

    const { product } = useContext( ProductContext );
    let imgToShow: string;

    if ( img ) {
        imgToShow = img;
    } else if ( product.img ) {
        imgToShow = product.img
    } else {
        imgToShow = noImage;
    }


    return (
        <img className={ `${styles.productImg} ${className}` } src={ imgToShow } alt="Product" />
    );
}