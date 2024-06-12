import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { AVATAR_URL, BACKGROUND_IMAGE_URL } from "../utils/constants";

const Login = () => {
  const [isSinInForm, setIsSinInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
 
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handleButtonClick = () => {
    // Validate the Form
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message == null) {
      if (!isSinInForm) {
        //Sign Up
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            // Upate Usaer Profile
            updateProfile(user, {
              displayName: fullName.current.value,
              photoURL:AVATAR_URL
            })
              .then(() => {
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  })
                );                
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage);
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
          });
      } else {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;           
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
          });
      }
    }
  };

  const toggleSignInForm = () => {
    setIsSinInForm(!isSinInForm);
  };
  return (
    <>
      <Header />
      <div className="absolute">
        <img 
        className=""
          src={BACKGROUND_IMAGE_URL}
          alt="Background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 p-12 bg-black absolute my-36 mx-auto right-6 left-6 text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl my-3">
          {isSinInForm ? "Sign In" : "Sign Up"}
        </h1>
        <p className="text-red-500 py-2 text-lg text-re">{errorMessage}</p>
        {!isSinInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 w-full bg-gray-800"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Id"
          className="p-2 m-2 w-full bg-gray-800"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full bg-gray-800"
        />
        <button
          className="p-2 m-2 bg-red-800 w-full rounded-md"
          onClick={handleButtonClick}
          type="button"
        >
          {isSinInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="px-4 cursor-pointer" onClick={toggleSignInForm}>
          {!isSinInForm
            ? "Already Registered? Sign In"
            : "New to Netflix? Sign Up now"}
        </p>
      </form>
    </>
  );
};

export default Login;
