import React, { ReactElement } from 'react';
import { ProductGalleryCardType } from 'components/ProductGalleryCard';

import productGalleryStyle from './ProductGallery.module.scss';

const {
  'product-gallery': productGalleryClassName,
  'product-gallery-empty': productGalleryEmptyClassName,
} = productGalleryStyle;

type ProductGalleryProps = {
  children?:
    | ReactElement<ProductGalleryCardType>
    | ReactElement<ProductGalleryCardType>[];
};

const ProductGallery = ({ children }: ProductGalleryProps) => {
  const areChildrenValid = (children instanceof Array && children.length > 0) || children;
  return (
    <div className={productGalleryClassName}>
      {areChildrenValid ? (
        children
      ) : (
        <div className={productGalleryEmptyClassName}>There are no products</div>
      )}
    </div>
  );
};

export default ProductGallery;
