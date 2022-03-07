import {
  collection,
  FieldValue,
  DocumentData,
  WithFieldValue,
  serverTimestamp,
  CollectionReference,
  QueryDocumentSnapshot,
  FirestoreDataConverter,
} from 'firebase/firestore';

import { db } from 'firebase/firebase.config';

import IRecord from 'firebase/interfaces/IRecord.firebase';
import ICollectionWrap from 'firebase/interfaces/ICollectionWrap.firebase';

type ProductConstructorParams = {
  name: string;
  description?: string;
  price?: number;
  stock?: number;
  createdOn?: FieldValue;
  createdBy?: string;
  updatedOn?: FieldValue;
  updatedBy?: string;
};

export class Product implements DocumentData, IRecord {
  public name: string;
  public description: string;
  public price: number;
  public stock: number;

  public createdBy: string;
  public createdOn: FieldValue;
  public updatedBy?: string;
  public updatedOn?: FieldValue;

  constructor({
    name,
    description = '',
    price = 0.0,
    stock = 0.0,
    createdOn,
    createdBy = '',
    updatedOn,
    updatedBy,
  }: ProductConstructorParams) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.stock = stock;

    this.createdOn = createdOn ?? serverTimestamp();
    this.createdBy = createdBy;

    this.updatedOn = updatedOn;
    this.updatedBy = updatedBy;
  }
}

const productConverter: FirestoreDataConverter<Product> = {
  toFirestore: (modelObject: WithFieldValue<Product>) => ({ ...modelObject }),
  fromFirestore: (snapshot: QueryDocumentSnapshot<Product>) => snapshot.data(),
};

export const ProductsCollectionName = 'products';
export const ProductsCollection = collection(db, ProductsCollectionName).withConverter(
  productConverter
);

export class ProductsCollectionWrap implements ICollectionWrap<Product> {
  public collectionName: string = ProductsCollectionName;
  public collection: CollectionReference<Product> = ProductsCollection;
}
