import { CollectionReference, DocumentData } from 'firebase/firestore';

interface ICollectionWrap<T = DocumentData> {
  collectionName: string;
  collection: CollectionReference<T>;
}

export default ICollectionWrap;
