import { useState } from "react";
import { ProductCard } from "../components";
import { Product, ProductInCart, ShopPingCart } from "../interfaces/interfaces";
import "../styles/custom.styles.css";
import { products } from "../data/products";
import { useShoppingCart } from "../Hooks/useShoppingCart";




export const ShoppingPage = () => {

   const { onProductCountChange, shopPingCart } = useShoppingCart()


  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onChange={({ count, product }) =>
              onProductCountChange({ count, product })
            }
            value={shopPingCart[product.id]?.count || 0}
          >
            <ProductCard.Image className="custom-image" />
            <ProductCard.Buttons />
          </ProductCard>
        ))}

        <div className="bg-dark shoping-card">
          {Object.entries(shopPingCart).map(([id, productIncart]) => (
            <ProductCard
              key={id}
              product={productIncart}
              style={{ width: "100px" }}
              value={productIncart.count}
              onChange={({ count, product }) =>
                onProductCountChange({ count, product })
              }
            >
              <ProductCard.Image className="custom-image" />
              <ProductCard.Buttons />
            </ProductCard>
          ))}
        </div>
      </div>
      <div>{JSON.stringify(shopPingCart)}</div>
    </div>
  );
};
