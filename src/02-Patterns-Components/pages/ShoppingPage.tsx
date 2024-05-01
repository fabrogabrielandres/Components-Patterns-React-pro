import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { Product } from '../interfaces/interfaces';
import "../styles/custom.styles.css"

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

              <ProductCard product={ productone }  className='bg-dark' >
                  <ProductCard.Image  className="custom-image"  />
                  <ProductCard.Title  title={ 'Hola Mundo' } />
                  <ProductCard.Buttons  />
              </ProductCard>

              <ProductCard product={ productone } className='bg-red'>
                  <ProductImage />
                  <ProductTitle className='text-white'/>
                  <ProductButtons />
              </ProductCard>

              <ProductCard product={ productone } style={{background:"#70d1f8"}}>
                  <ProductImage  style={{ height:"1500px"}}/>
                  <ProductTitle style={{background:"green"}}/>
                  <ProductButtons style={{fontWeight:"bold"}}/>
              </ProductCard>
          </div>
      </div>
  
  );
};
