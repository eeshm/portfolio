import Image from "next/image";
import "./globals.css";
import About from "@/components/About";
import Projects from "@/components/Projects";


export default function Home(){
  return(
 <div className="h-screen w-full flex flex-col overflow-y-auto items-center justify-start p-4 relative ">
  <div className="max-w-2xl sm:w-3/4 mx-auto px-6">
<About />
<Projects/>
  </div>
  </div>
  )
}
