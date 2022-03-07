import {
  addDoc,
  deleteDoc,
  DocumentData,
  DocumentReference,
  getDocs,
  limit,
  query,
  QueryConstraint,
  UpdateData,
  updateDoc,
} from 'firebase/firestore';
import ICollectionWrap from 'firebase/interfaces/ICollectionWrap.firebase';

import IBaseRepository from 'firebase/IRepositories/IBaseRepository.firebase';

class BaseRepository<T = DocumentData> implements IBaseRepository<T> {
  collectionWrap: ICollectionWrap<T>;

  constructor(collectionWrap: ICollectionWrap<T>) {
    this.collectionWrap = collectionWrap;
  }

  create = async (record: T) => {
    const newRecord = await addDoc(this.collectionWrap.collection, record);
    return newRecord;
  };

  find = async (...queryConstrains: QueryConstraint[]) => {
    const generatedQuery = query<T>(this.collectionWrap.collection, ...queryConstrains);
    const querySnapShot = await getDocs<T>(generatedQuery);
    const snapShots = querySnapShot.docs;
    return snapShots;
  };

  findOne = async (...queryConstrains: QueryConstraint[]) => {
    const [snapShot] = await this.find(limit(1), ...queryConstrains);
    return snapShot;
  };

  update = async (recordRef: DocumentReference<T>, record: UpdateData<T>) => {
    await updateDoc<T>(recordRef, record);
  };

  delete = async (recordRef: DocumentReference<T>) => {
    await deleteDoc(recordRef);
  };
}

export default BaseRepository;
