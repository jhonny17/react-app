import { CollectionReference } from 'firebase/firestore';

import FirebaseCollection from '@mono-repo/blog/firebase/FirebaseCollection';

type GenericFirebaseCollectionParams = Record<string, unknown>;

const GenericFirebaseCollection = <T>() => {
  abstract class GenericFirebaseCollection extends FirebaseCollection {
    protected static collection?: CollectionReference<T>;

    public static getCollection: () => CollectionReference<T> = () => {
      throw new Error('Class has not implemented its getCollection method');
    };

    constructor({
      id,
      createdOn,
      createdBy,
      updatedOn,
      updatedBy,
    }: GenericFirebaseCollectionParams) {
      super({
        createdBy,
        createdOn,
        id,
        updatedBy,
        updatedOn,
      });
    }
  }

  return GenericFirebaseCollection;
};

export default GenericFirebaseCollection;
