import "./globals.css";
import { GridBackgroundDemo } from "@/components/ui/grid-background";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import SlideDown from "@/components/Slidedown";


export default function Home(){
  return(
    <>
    <GridBackgroundDemo />
    <Navbar />
    <Navbar />
    <SlideDown delay={0.2}>
 <div className="h-screen w-full flex flex-col overflow-y-auto items-center justify-start p-2  relative ">
  <div className="max-w-2xl sm:w-3/4 mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
    <About />
    <Projects/>
    <Skills />
    <Footer />
    {/* To add education, footer components  */}
  </div>
  </div>
  </SlideDown>
  </>
  )
}
