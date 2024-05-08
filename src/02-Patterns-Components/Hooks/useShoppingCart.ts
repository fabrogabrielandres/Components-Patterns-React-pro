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
      if (count === 0 ) {
        const { [product.id]: Todelete, ...rest } = oldShoppingCart;
        return rest
      }

      return {...oldShoppingCart, [product.id]:{...product, count} };
    });
  };

  return {
    onProductCountChange,
    shopPingCart,
  };
};
