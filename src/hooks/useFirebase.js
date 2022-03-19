import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/User/Firebase/firebase.init";
import {GoogleAuthProvider,updateProfile,signInWithPopup, onAuthStateChanged ,getAuth,signOut,  createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

initializeFirebase();

const useFirebase = () =>{
        const [user,setuser] = useState({});
        const [error,setError] = useState ('');
        const [isLoading,setisLoading] = useState(true);
        const [admin,setAdmin]  = useState(false);
        const auth = getAuth();
        const googleProvider = new GoogleAuthProvider();
      
      
        // register new user
        const newUser =(email,password,name,history)=>{
            createUserWithEmailAndPassword(auth,email,password)
            .then((userCredential) => {
                setError('');
                const newuser = {email,displayName:name};
                setuser(newuser);
                saveUser(email,name,'POST');
                updateProfile(auth.currentUser, {
                  displayName: name
                }).then(() => {
                  // Profile updated!
                  // ...
                }).catch((error) => {
                  // An error occurred
                  // ...
                });
                history.replace('/');
              })
              .catch((error) => {
                
               setError(error.message);
                // ..
              })
              .finally(()=>setisLoading(false)) ;
        }

        // log in user
                const loginUser = (email,password,location,history)=>{
                    signInWithEmailAndPassword(auth,email,password)
                    .then((userCredential) => {
                      const destination = location.state?.from || '/';
                      history.replace(destination);
                        setError('');
                      })
                      .catch((error) => {
                     
                        setError(error.message);
                      });


                      // history.replace('/');
                    
                }

                    // google log in
                    const signInUsingGoogle = () => {
                      setisLoading(true);
                      return signInWithPopup(auth, googleProvider)
                      .then((result)=>{
                        const user = result.user;
                        saveUser(user.email,user.displayName,'PUT');
                      })
                      .catch((error)=>{
              
                      })
              
                  }



            // ovserve user state
            useEffect(()=>{
              const unSubscribe =  onAuthStateChanged(auth, (user) => {
                    if (user) {
                            setuser(user);
                    } else {
                    
                      setuser({});
                    }
            setisLoading(false);

                  });       
                  return()=> unSubscribe; 
            },[auth])


            // saveuser 
            const saveUser = (email,displayName,method) =>{
                  const user = {email,displayName};
                  fetch('http://localhost:7000/users',{
                   method: method,
                   headers:{
                     'content-type' : 'application/json'
                   },
                     body:JSON.stringify(user)
                  })

                  .then()
            }


            // admin
              useEffect(()=>{
                    fetch(`http://localhost:7000/users/${user.email}`)
                    .then(res=> res.json())
                    .then(data=> setAdmin(data.admin))
              },[user.email])

        // logout
        const logout = () =>{
            signOut(auth).then(() => {
                // Sign-out successful.
              }).catch((error) => {
                // An error happened.
              });
              
        }



        return{
            user,
            admin,
            error,
            newUser,
            isLoading,
            signInUsingGoogle,
            loginUser,
            logout,
            }
}


export default useFirebase;