import { ProductCard } from "../components";
import "../styles/custom.styles.css";
import { products } from "../data/products";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
        product={product}
        initialValue={{
          count: 4,
          maxCount: 20,
        }}
      >
        {({
          count,
          isMaxCountReached,
          product,
          maxCount,
          increaseBy,
          reset,
        }) => (
          <>
            <ProductCard.Image className="custom-image" />
            <ProductCard.Buttons />
            <button onClick={reset}>reset</button>
            <button onClick={()=>increaseBy(2)}>+2</button>
            <div>
              {
                JSON.stringify(product,null, 5)
              }
            </div>
            <div>
              {
                JSON.stringify(isMaxCountReached)
              }
            </div>
            <div>
              {
                JSON.stringify(maxCount)
              }
            </div>
            <div>
              {
                JSON.stringify(count)
              }
            </div>
          </>
        )}
      </ProductCard>
    </div>
  );
};
