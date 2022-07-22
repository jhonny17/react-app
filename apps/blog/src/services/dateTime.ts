import { Timestamp } from 'firebase/firestore';

const MILLISECONDS_IN_A_SECOND = 1000;

export const timeStampToDate = (timeStamp?: Timestamp) => {
  if (!timeStamp) return null;
  const milliseconds = timeStamp.seconds * MILLISECONDS_IN_A_SECOND;
  return new Date(milliseconds);
};
