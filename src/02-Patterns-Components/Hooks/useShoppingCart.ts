import { useState } from "react";
import { Product, ProductInCart, ShopPingCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {

    const [shopPingCart, setshopPingCart] = useState<ShopPingCart>({});

    const onProductCountChange = ({
      count,
      product,
    }: {
      count: number;
      product: Product;
    }) => {
  
      setshopPingCart((oldShoppingCart) => {
        const productIncart: ProductInCart = oldShoppingCart[product.id] || {
          ...product,
          count: 0,
        };
        if (Math.max(productIncart.count + count, 0) > 0) {
          productIncart.count = productIncart.count + count;
          return { ...oldShoppingCart, [product.id]: productIncart };
        }
  
        const { [product.id]: Todelete, ...rest } = oldShoppingCart;
        return rest;
      });
    };

    return ({
        onProductCountChange,
        shopPingCart
    })
}

