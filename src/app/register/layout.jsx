import React from "react";
function layout({ children }) {
  return (
    <div className="-mt-32 w-screen bg-opacity-10 bg-forms-background bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export default layout;
