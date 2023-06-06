import LandingPage from "./components/LandingPage"
import OurWork from "./components/OurWork"
import Image from "next/image"
import WhoWeAre from "./components/WhoWeAre"
export default function Home() {
  return (


      <div className= ' flex flex-col'>
        <div className="snap-center">
    <LandingPage/>
    </div>
    <div className="flex justify-center items-center">
      
    {/* <Image
      src="/public/images/flame-black-bg.png"
      alt="flame bg"
      fill
      className= " opacity-50 object-cover object-center absolute bottom-0 transform rotate-180 top-0"
      /> */}
    <OurWork />
    </div>
    <div className="flex  snap-mandatory snap-center md:mt-12 ">
      
    <WhoWeAre/>
   </div>
    {/* Statistics? */}
 {/* Recent Events */}
 {/* Volunteer */}
  {/* Footer */}
    </div>
  
   
   
   
    

  )
}