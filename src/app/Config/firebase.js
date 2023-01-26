import { initializeApp } from 'firebase/app';


import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: 'AIzaSyC2Y2UIQ_og9SiJGAW5Q9X1lEZX_XWyeh0',
  authDomain: 'grafo-crm.firebaseapp.com',
  projectId: 'grafo-crm',
  storageBucket: 'grafo-crm.appspot.com',
  messagingSenderId: '349159821271',
  appId: '1:349159821271:web:2e0d093d00ed20fc824592',
  measurementId: 'G-PCH0V00PST',
}


//inicializa firebase
const app = initializeApp(firebaseConfig);

//inicializa firestore
export const db = getFirestore(app)
