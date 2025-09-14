import React from 'react';
import { createUserWithEmailAndPassword,  signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase/firebase.init'
import { AuthContext } from './AuthContext';


const AuthProvider =({children})=>{
    
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email,password)
    }

    const signInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authData = {
        createUser,
        signInUser,
    };

    return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
}



export default AuthProvider;