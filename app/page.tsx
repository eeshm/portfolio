import Image from "next/image";
import "./globals.css";
import { GridBackgroundDemo } from "@/components/ui/grid-background";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";


export default function Home(){
  return(
    <>
        <GridBackgroundDemo />
        <Navbar />
 <div className="h-screen w-full flex flex-col overflow-y-auto items-center justify-start p-4 relative ">
  <div className="max-w-2xl sm:w-3/4 mx-auto px-6">
    <About />
    <Projects/>
    <Skills />
    <Footer />
    {/* To add education, footer components  */}
  </div>
  </div>
  </>
  )
}
