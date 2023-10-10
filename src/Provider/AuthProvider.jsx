import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';



export const AuthContext= createContext(null);

const AuthProvider = ({children}) => {

    const auth= getAuth(app);
    const [user, setUser]= useState('');

    const googleProvider= new GoogleAuthProvider();
    const githubProvider= new GithubAuthProvider

    // sign up with eamil and password
    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Log / sign in with email and password
    const SignIn= (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Sign in / log in by google
    const googleSignIn=()=>{
        return signInWithPopup(auth, googleProvider);
    }
    /// sign in/ log in by GitHub
    const githubSignIn=()=>{
        return signInWithPopup(auth, githubProvider)
    }

    const logOut=()=>{
        return signOut(auth);
    }


    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, currenUser=>{
            console.log("On auth state changed" ,currenUser);
            setUser(currenUser);
        })

        return ()=>{
            unSubscribe();
        }

    },[])

    const authInfo={
        user,
        createUser,
        googleSignIn,
        githubSignIn,
        SignIn,
        logOut,

    };

    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;