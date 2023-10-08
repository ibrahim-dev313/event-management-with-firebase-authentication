import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config';


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setLoading]= useState(true)


    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin =()=>{
        setLoading(true)

        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
        
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const logOut=()=>{
        setLoading(true)

        return signOut(auth)
        

    }



    const authInfo = {user, createUser, setUser, googleLogin, signIn, logOut,loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes ={
    children: PropTypes.node
}




/* 
1. Create Context and export
2. create provider
3. set value
4. useContext



create a folder providers
now create ...Provider.jsx component rsc
now inside const ...Context = createContext(null)
now in main.jsx wrap Router with ...Provider
now in ...Provider pass {children}
*/