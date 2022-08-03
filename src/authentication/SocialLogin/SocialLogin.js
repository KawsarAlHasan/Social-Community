import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FaGooglePlusG } from "react-icons/fa";
import auth from "../../firebase.init";


const SocialLogin = () => {

  const [signInWithGoogle] = useSignInWithGoogle(auth);
  

    
  
  
  return (
    <div className="text-center text-3xl">
      <div className="flex justify-center  items-center gap-3 my-6 text-black-600 text-2xl">
        <div className="w-10 h-[1px] bg-[#ffffff]"></div>
        or
        <div className="w-10 h-[1px] bg-[#ffffff]"></div>
      </div>
      Continue with-
      <div className="social-links mt-3 flex flex-wrap justify-center items-center gap-2 ">
      
        <button
          onClick={() => signInWithGoogle()}
          className="flex items-center gap-2 bg-[#fb6d59] hover:bg-red-600 py-2 px-10 rounded"
        >
          <FaGooglePlusG className="text-2xl"></FaGooglePlusG> Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
