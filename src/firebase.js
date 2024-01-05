// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBxpYMgo9AiaVRxA2B_b9deX6RRuE1xvi8",
    authDomain: "react-log-in-project.firebaseapp.com",
    databaseURL: "https://react-log-in-project-default-rtdb.firebaseio.com",
    projectId: "react-log-in-project",
    storageBucket: "react-log-in-project.appspot.com",
    messagingSenderId: "909467909319",
    appId: "1:909467909319:web:1051b5eca015d3d65dd2e2",
    measurementId: "G-SZ0PRFYZ7C"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

const createUserDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = collection(firestore, 'users');
    const { uid, email } = userAuth;

    try {
        const docRef = await addDoc(userRef, {
            uid,
            email,
            createdAt: new Date(),
            ...additionalData,
        });

        console.log('Document written with ID: ', docRef.id);
    } catch (error) {
        console.error('Error adding document: ', error);
    }
};

export { auth, firestore, createUserDocument, signInWithEmailAndPassword };
