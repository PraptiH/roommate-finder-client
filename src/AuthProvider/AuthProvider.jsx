import React from 'react';
import { createUserWithEmailAndPassword,  signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {auth} from '../firebase/firebase.init'
import { AuthContext } from './AuthContext';


const AuthProvider =({children})=>{
    
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email,password)
    }

    const createUser2 =(provider)=>{
        return signInWithPopup(auth, provider)
    }

    const signInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authData = {
        createUser,
        createUser2,
        signInUser,
    };

    return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
}



export default AuthProvider;