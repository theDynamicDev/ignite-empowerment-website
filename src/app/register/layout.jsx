import React from "react";
import NavBar from "../components/NavBar";
function layout({ children }) {
  return (
    <div className="  w-screen h-screen -z-10 bg-forms-background bg-opacity-10 bg-cover bg-no-repeat bg-fixed bg-center ">
      <div className="flex flex-col justify-center items-center ">
        <div className=" flex ">{children}</div>
      </div>
    </div>
  );
}

export default layout;
