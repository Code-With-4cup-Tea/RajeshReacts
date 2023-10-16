import React, { useContext } from 'react'
import { createContext } from 'react' //1:

import { getAuth,createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from 'firebase/auth' //8: this is import for authentication 

const fireBaseContext = createContext(null); //2: create context

import { initializeApp } from "firebase/app"; //5: initializeApp of firebase

import { getDatabase,set,ref }  from 'firebase/database' //12: for data base access or storage

//6: we have to create an object for passing an option of firbase

const firebaseConfig = {   //7.1 :these are firebase option which passed in initializeApp function
    apiKey: "AIzaSyDp12DX7Hk__0QL7eCvncQMDJ8qndXuyCo",
    authDomain: "vite-contact-348bd.firebaseapp.com",
    projectId: "vite-contact-348bd",
    storageBucket: "vite-contact-348bd.appspot.com",
    messagingSenderId: "693260448409",
    appId: "1:693260448409:web:bd0efe77d90643d208be08"
  };

const firebaseApp = initializeApp(firebaseConfig)  //7: pass in initializeApp firebase option which is firebaseconfig

console.log(firebaseApp)

const firebaseAuth = getAuth(firebaseApp); //9: getAuth main firebaseApp pass kar do

const database = getDatabase(firebaseApp); //13: database instance create kiya

console.log(firebaseAuth);

const googleProvider =new GoogleAuthProvider(firebaseApp);//g1: for google instance

//custom hooks

export const useFirebase = ()=>{
    return useContext(fireBaseContext);

}

export const FirebaseProvider = ({children})=>{    //3: create firebaseprovider function
    
    const singUpuserWithemailandPassword = (email,password) =>{  //10: this function create for password and email

       return createUserWithEmailAndPassword(firebaseAuth,email,password); //11: pass firebase auth no:9
    }

    const putData = (key,data)=>set(ref(database,key),data)//14:for database main data put karnay ke liye

    const signupWithPopup = ()=>{
        signInWithPopup(firebaseAuth,googleProvider)
    }
    
    return <fireBaseContext.Provider value={{singUpuserWithemailandPassword,putData,signupWithPopup}}>       {/* //4:wraping with provider       */}
                {children}
          </fireBaseContext.Provider>
}

const Firebase = () => {
  return (
    <div>Firebase</div>
  )
}

export default Firebase
