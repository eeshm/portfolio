import Image from "next/image";
import "./globals.css";
import About from "@/components/About";


export default function Home(){
  return(
 <div className="min-h-screen w-full flex flex-col items-center justify-start p-4 relative ">
  <div className="fixed inset-0">
  <div className="max-w-2xl sm:w-3/4 mx-auto px-6">
<About />
  </div>
  </div>
  </div>
  )
}
