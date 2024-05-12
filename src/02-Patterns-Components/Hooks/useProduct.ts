import { useEffect, useRef, useState } from 'react'
import { InitialValue, OnChangeArgs } from '../components/ProductCard'
import { Product } from '../interfaces/interfaces';



export interface UseProductProps{
    onChange?:({count,product}:OnChangeArgs)=>void;
    product:Product,
    value?:number,
    initialValue?:InitialValue
}

export const useProduct = ({onChange, product, value = 0, initialValue}:UseProductProps) => {
    
    const isMounted = useRef(false)
    const [ count, setCounter ] = useState<number>(initialValue?.count || value  )
    
    useEffect(() => {
        isMounted.current = true
    }, [])
    
    useEffect(() => {
        if(isMounted.current) return;
        setCounter(value)
    }, [value])
    
    
    const reset = ()=>{
        setCounter(initialValue?.count ? initialValue?.count : value )
    }
    
    
    const increaseBy = ( value: number ) => {
        let newVal = Math.max( count + value, 0 )
        if(initialValue?.maxCount){
            newVal = Math.min(newVal,initialValue.maxCount)
        }
        setCounter( newVal )
        onChange && onChange({count:newVal,product});
    }
    
    
    
    return {
        count,
        maxCount:initialValue?.maxCount,
        isMaxCountReached:(!!initialValue?.maxCount && (initialValue?.maxCount===count)),
        increaseBy,
        reset,
    }

}