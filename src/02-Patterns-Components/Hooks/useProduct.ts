import { useEffect, useState } from 'react'
import { OnChangeArgs } from '../components/ProductCard'
import { Product } from '../interfaces/interfaces';



export interface UseProductProps{
    onChange?:({count,product}:OnChangeArgs)=>void;
    product:Product,
    value?:number
}

export const useProduct = ({onChange, product, value = 0}:UseProductProps) => {

    
    const [ count, setCounter ] = useState(value)

    
    
    const increaseBy = ( value: number ) => {
         
        
        const newVal = Math.max( count + value, 0 )
        setCounter( newVal )
        
        onChange && onChange({count:newVal,product});
        
    }
    useEffect(() => {
        setCounter(value)
    }, [value])

    return {
        count,
        increaseBy
    }

}