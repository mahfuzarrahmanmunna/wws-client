import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useEffect, useState } from 'react';
import auth from '../component/firebase.init';
import { AuthContext } from '../Context/AuthContext';


const Provider = ({ children }) => {

    let [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);



    const provider = new GoogleAuthProvider();
    let googleSign = () => {

        return signInWithPopup(auth, provider)
    }




    let createRegistered = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)
    }

    let loginSetup = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }

    let signOuts = () => {

        return signOut(auth)
    }
    let updateUserProfile = (user, profileUpdates) => {
        return updateProfile(user, profileUpdates);
    };

    useEffect(() => {
        let unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            //   console.log(currentUser)
            setUser(currentUser)
            setLoading(false)



            return () => {
                unsubscribe()
            }

        });
    }, [])





    let val = {
        createRegistered,
        loginSetup,
        signOuts,
        googleSign,
        updateUserProfile,
        user,
        loading,


    }


    return (
        <div>
            <AuthContext.Provider value={val} replace={true}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Provider;