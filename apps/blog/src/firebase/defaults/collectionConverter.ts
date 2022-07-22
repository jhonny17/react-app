import {
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from 'firebase/firestore';

import FirebaseCollection from '@mono-repo/blog/firebase/FirebaseCollection';

const collectionConverter = <T extends FirebaseCollection>() =>
  ({
    fromFirestore: (
      snapshot: QueryDocumentSnapshot<T>,
      options?: SnapshotOptions
    ) => {
      const entity = snapshot.data(options);
      entity.id = snapshot.id;
      return entity;
    },
    toFirestore: (modelObject: Record<string, unknown>) => {
      const documentData = {} as Record<string, unknown>;

      Object.entries(modelObject).forEach(([property, value]) => {
        if (!value || property !== 'id') return;
        documentData[property] = value;
      });

      return documentData;
    },
  } as FirestoreDataConverter<T>);

export default collectionConverter;
