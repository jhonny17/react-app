import { FieldValue } from 'firebase/firestore';

interface IRecord {
  createdBy: string;
  createdOn: FieldValue;
  updatedBy?: string;
  updatedOn?: FieldValue;
}

export default IRecord;
