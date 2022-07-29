import React from "react";
import loginImage from "../../Asset/images/download.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Login/SocialLogin";
import { BsArrowLeft } from "react-icons/bs";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import Loading from "../../pages/Share/Loading";

const Login = () => {
  const [userAuth] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, loginError] =
    useSignInWithEmailAndPassword(auth);

  const handleLogin = (data) => {
    const { email, password } = data;
    signInWithEmailAndPassword(email, password);
  };

  if (userAuth) {
    navigate(from, { replace: true });
  }
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="bg-[#c4e0f0] px-3">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-end md:gap-20">
        <div className="text-black bg-[#b9dff2] p-5 md:p-10 w-full max-w-md rounded-lg my-20 shadow-2xl">
          <div className="flex items-center gap-3 mb-10">
            <h1 className="text-2xl">Login</h1>
            <div
              className="flex-1 h-[2px] bg-pink-100"
              style={{ maxWidth: "80px" }}
            ></div>
          </div>
          <form
            onSubmit={handleSubmit(handleLogin)}
            action=""
            className="text-right flex flex-col gap-2"
          >
            {loginError && (
              <p className="text-red-400 text-left ml-5">
                Please check email & password
              </p>
            )}
            <input
              {...register("email", { required: "Email is required!" })}
              className="py-3 px-5 rounded-full focus:outline-none bg-[#07273a] focus:bg-[#0a2e43] text-white w-full"
              type="email"
              name="email"
              placeholder="Email..."
            />
            {errors.email?.message && (
              <p className="text-red-400 text-left ml-5">
                {errors.email?.message}
              </p>
            )}
            <input
              {...register("password", {
                required: "Password is required!",
              })}
              className="py-3 px-5 rounded-full focus:outline-none bg-[#07273a] focus:bg-[#0a2e43] text-white w-full"
              type="password"
              name="password"
              placeholder="Password..."
            />
            {errors.password?.message && (
              <p className="text-red-400 text-left ml-5">
                {errors.password?.message}
              </p>
            )}
            <div className=" flex justify-between items-center mt-5">
              <Link to="/signup">
                <li className="flex items-center gap-3 text-slate-400 hover:text-red-300 hover:underline">
                  <BsArrowLeft></BsArrowLeft> Sign up here
                </li>
              </Link>
              <input
                className="cursor-pointer bg-yellow-500 hover:bg-[#83bbe3] hover:shadow-md text-black px-6 py-2 rounded-full"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <div className="mt-3">
            <ul className="flex gap-5 justify-end items-center mt-10">
              <Link to="/reset-password">
                <li className="text-slate-400 hover:text-red-300 hover:underline">
                  Forget Password?
                </li>
              </Link>
            </ul>
          </div>
          <SocialLogin></SocialLogin>
        </div>
        <div className="">
          <img src={loginImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
