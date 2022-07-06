import React from "react";
import HeaderLogin from "../components/Header.login";
import Task from "../images/task.svg"
import Facebook from "../images/facebook.svg"
import Google from "../images/google.svg"
const Login = () => {
  console.log(import.meta.env.VITE_APPID)
  return (
    <div className="h-screen mx-5 my-5">
      <HeaderLogin />
    <div className=" flex flex-1 flex-col-reverse gap-10 md:flex-row md:gap-5 ">
      <div className="w-1/2">
        <img className="h-auto w-full" src={Task}/>
      </div>
      <div className="w-1/2 md:pt-60">
        <h3 className="flex flex-1 text-center text-3xl text-white">G-TODO</h3>
        <p className="flex flex-1 text-center text-xl text-white">
            The Best Personal Todo App For Developper
        </p>
        <button className=" m-3 flex text-white min-w-[250px] p-3 gap-3 items-center rounded-md bg-primary">
          <img className="w-8 h-8" src={Facebook}/>
          <span>Sign In With Facebook</span>
        </button>
        <button className="m-3 flex text-black min-w-[250px] p-3 gap-3 items-center rounded-md bg-white">
          <img className="w-8 h-8" src={Google}/>
          <span>Sign In With Google</span>

        </button>
      </div>
    </div>
    </div>
  );
};

export default Login;
