import { Timestamp, serverTimestamp } from 'firebase/firestore';
import { timeStampToDate } from '@mono-repo/blog/services/dateTime';

type FirebaseCollectionParams = Record<string, unknown>;

abstract class FirebaseCollection {
  public id: string;

  public createdBy: string;

  public createdOn: Timestamp;

  public updatedBy?: string;

  public updatedOn?: Timestamp;

  constructor({
    id = '',
    createdOn,
    createdBy = '',
    updatedOn,
    updatedBy,
  }: FirebaseCollectionParams) {
    this.id = id as string;

    this.createdOn = (createdOn ?? serverTimestamp()) as Timestamp;
    this.createdBy = createdBy as string;

    this.updatedOn = updatedOn as Timestamp;
    this.updatedBy = updatedBy as string;
  }

  public createdOnAsDate() {
    return timeStampToDate(this.createdOn);
  }

  public updatedOnAsDate() {
    return timeStampToDate(this.updatedOn);
  }
}

export default FirebaseCollection;
