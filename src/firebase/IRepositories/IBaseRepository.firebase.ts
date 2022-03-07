import {
  DocumentData,
  DocumentReference,
  QueryConstraint,
  QueryDocumentSnapshot,
  UpdateData,
} from 'firebase/firestore';

import ICollectionWrap from 'firebase/interfaces/ICollectionWrap.firebase';

interface IBaseRepository<T = DocumentData> {
  collectionWrap: ICollectionWrap<T>;

  create: (record: T) => Promise<DocumentData>;

  find: (
    ...queryConstrains: QueryConstraint[]
  ) => Promise<QueryDocumentSnapshot<DocumentData>[]>;

  findOne: (
    ...queryConstrains: QueryConstraint[]
  ) => Promise<QueryDocumentSnapshot<DocumentData>>;

  update: (recordRef: DocumentReference<T>, record: UpdateData<T>) => Promise<void>;

  delete: (recordRef: DocumentReference<T>) => Promise<void>;
}

export default IBaseRepository;
