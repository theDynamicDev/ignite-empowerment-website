import React from 'react'
import NavBar from '../components/NavBar'
function layout({children}) {
  return (
<html lang="en" className="  w-screen h-screen -z-10 bg-forms-background bg-opacity-10 bg-cover bg-no-repeat bg-fixed bg-center ">
<body className="   flex flex-col justify-center items-center " >
<header className={`z-20`}>

<NavBar />
  </header>
  <div className=" flex ">
    {children}
    </div>
    </body>
</html>
  )
}

export default layout