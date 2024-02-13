import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthProvider = createContext();
const auth = getAuth(app);

const AuthContexts = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // this is user sign up function

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // update sign up user profile

  const updateUserInfo = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  // this is user sing in function

  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userLogOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe;
    };
  }, []);

  const userInfo = {
    user,
    loading,
    createUser,
    logInUser,
    userLogOut,
    updateUserInfo,
  };
  return (
    <AuthProvider.Provider value={userInfo}>{children}</AuthProvider.Provider>
  );
};

export default AuthContexts;
