import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css'

export interface ProductButtonsProps{
    className?:string,
    style  ?: React.CSSProperties
}

export const ProductButtons = ({className,style}:ProductButtonsProps) => {

    
    const { increaseBy, count, maxCount } = useContext( ProductContext );

    const isMaxReached = useCallback(() => {
        if(count===maxCount){
            return true 
        }
        return false
    }, [count,maxCount]);

    return (
        <div className={ `${styles.buttonsContainer} ${className}` } style={style}>
            <button
                className={ styles.buttonMinus }
                onClick={ () => increaseBy( -1 ) }> - </button>

            <div className={ styles.countLabel }> { count } </div>

            <button
                className={ `${styles.buttonAdd} ${ isMaxReached() && styles.disabled }` }
                onClick={ () => increaseBy( +1 ) }> + </button>
        </div>
    );
}