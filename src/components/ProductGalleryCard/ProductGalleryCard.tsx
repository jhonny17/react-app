import React from 'react';
import { Product } from 'firebase/collections/ProductsCollection';

import productGalleryCardStyle from './ProductGalleryCard.module.scss';

const {
  'product-gallery-card': productGalleryCardClassName,
  'product-information': productInformationClassName,
  'product-gallery-card-title': productGalleryCardTitleClassName,
  'product-price': productPriceClassName,
} = productGalleryCardStyle;

type ProductGalleryCardProps = {
  product: Product;
};

const ProductGalleryCard: (props: ProductGalleryCardProps) => JSX.Element | null = ({
  product,
}: ProductGalleryCardProps) => {
  const { name, price } = product;

  return (
    <article className={productGalleryCardClassName}>
      <img
        alt={`${name} image.`}
        src="https://www.androidauthority.com/wp-content/uploads/2021/04/OnePlus-9-Pro-vs-Samsung-Galaxy-S21-Ultra-6-of-13-scaled-840x472.jpg.webp"
      />
      <section aria-label={'product information'} className={productInformationClassName}>
        <header>
          <h2 className={productGalleryCardTitleClassName}>{name}</h2>
        </header>
        <div className={productPriceClassName}>${price}</div>
      </section>
    </article>
  );
};

export type ProductGalleryCardType = typeof ProductGalleryCard;

export default ProductGalleryCard;
