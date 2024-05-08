import { useEffect, useRef, useState } from 'react'
import { OnChangeArgs } from '../components/ProductCard'
import { Product } from '../interfaces/interfaces';



export interface UseProductProps{
    onChange?:({count,product}:OnChangeArgs)=>void;
    product:Product,
    value?:number
}

export const useProduct = ({onChange, product, value = 0}:UseProductProps) => {

    
    const [ count, setCounter ] = useState(value)

    const isControled = useRef(!!onChange );
    console.log("isControled",isControled);
    
    
    const increaseBy = ( value: number ) => {
        if(isControled.current && onChange){
            console.log("value",value);
            
            return onChange!({count:value,product})
        }   
         
        
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