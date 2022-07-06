import React from "react";
import Todo from "../images/todomvc.svg"
const HeaderLogin = () => {
  return (
    <div className="bg-dark flex p-2 mb-5 ">
      <div className="flex ">
        <img src={Todo} className="h-8 w-8"/>
        <a href="/" className="text-white font-bold text-xl ">G-TODOs</a>
      </div>
    </div>
  );
};

export default HeaderLogin;
