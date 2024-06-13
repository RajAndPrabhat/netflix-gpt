import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGE } from "../utils/constants";
import { toggleGptView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import lang from "../utils/languageConstants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gptSearchView = useSelector((store) => store.gpt.showGptSerach);
  const languagekey=useSelector(store=>store.config.lang);
  const handlelogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  const handleGptSearchCllick = () => {
    dispatch(toggleGptView());
  };
  const handleLanguageChange=(e)=>{
   dispatch(changeLanguage(e.target.value));
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  return (
    <div className="absolute px-8 py-2 w-screen bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO_URL} alt="logo" />

      {user && (
        <div className="flex p-3">
          {gptSearchView && <select className="bg-gray-900 text-white" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGE.map((lang)=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
            )}
          </select>
}
          <button
            className="bg-purple-800 py-2 px-4 m-2 text-white rounded-md"
            onClick={handleGptSearchCllick}
          >
            {(gptSearchView)?lang[languagekey].home :"Gpt Search"}
          </button>
          <img className="w-10 h-10" src={user.photoURL} alt="user-profile" />
          <button className="text-white font-bold m-2" onClick={handlelogout}>
            (Log Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
