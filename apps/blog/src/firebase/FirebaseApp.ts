import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env['NX_API_KEY'],
  appId: process.env['NX_APP_ID'],
  authDomain: process.env['NX_AUTH_DOMAIN'],
  messagingSenderId: process.env['NX_MESSAGING_SENDER_ID'],
  projectId: process.env['NX_PROJECT_ID'],
  storageBucket: process.env['NX_STORAGE_BUCKET'],
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore();
