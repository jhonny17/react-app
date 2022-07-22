/* eslint-disable no-use-before-define */
/* eslint-disable new-cap */
import { DocumentData, collection } from 'firebase/firestore';
import GenericFirebaseCollection from '@mono-repo/blog/firebase/GenericFirebaseCollection';
import collectionConverter from '@mono-repo/blog/firebase/defaults/collectionConverter';
import { db } from '@mono-repo/blog/firebase/FirebaseApp';

type ProductParams = Record<string, unknown>;

const EMPTY_FLOAT = 0.0;

class Product
  extends GenericFirebaseCollection<Product>()
  implements DocumentData
{
  public name: string;

  public description: string;

  public price: number;

  public stock: number;

  constructor({
    name,
    description = '',
    price = EMPTY_FLOAT,
    stock = EMPTY_FLOAT,
    createdOn,
    createdBy,
    updatedOn,
    updatedBy,
  }: ProductParams) {
    super({
      createdBy,
      createdOn,
      updatedBy,
      updatedOn,
    });

    this.name = name as string;
    this.description = description as string;
    this.price = price as number;
    this.stock = stock as number;
  }

  public static override getCollection = () => {
    if (this.collection) return this.collection;
    this.collection = collection(db, 'products').withConverter(
      collectionConverter<Product>()
    );
    return this.collection;
  };
}

export default Product;
