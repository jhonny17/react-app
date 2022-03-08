import React from 'react';
import { Product } from 'firebase/collections/ProductsCollection';

import productsViewStyle from './ProductsView.module.scss';
import ProductGallery from 'components/ProductGallery';
import ProductGalleryCard from 'components/ProductGalleryCard';

const { 'products-view': ProductsViewClassName } = productsViewStyle;

const product1 = new Product({
  name: 'Product 1',
  price: 150,
});
const product2 = new Product({ name: 'Product 2' });
const product3 = new Product({ name: 'Product 3' });

const ProductsView = () => {
  return (
    <div className={ProductsViewClassName}>
      <ProductGallery>
        <ProductGalleryCard product={product1} />
        <ProductGalleryCard product={product2} />
        <ProductGalleryCard product={product3} />
      </ProductGallery>
    </div>
  );
};

export default ProductsView;
