import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { Product } from '../interfaces/interfaces';

export const ShoppingPage = () => {
  let productone: Product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
  };

    return (
      <div>
          <h1>Shopping Store</h1>
          <hr />

          <div style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap'
          }}>

              <ProductCard product={ productone }>
                  <ProductCard.Image />
                  <ProductCard.Title title={ 'Hola Mundo' } />
                  <ProductCard.Buttons  />
              </ProductCard>

              <ProductCard product={ productone }>
                  <ProductImage />
                  <ProductTitle />
                  <ProductButtons />
              </ProductCard>
          </div>
      </div>
  
  );
};
