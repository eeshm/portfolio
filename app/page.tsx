import "./globals.css";
import { GridBackgroundDemo } from "@/components/ui/grid-background";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import SlideDown from "@/components/Slidedown";


export default function Home() {
  return (
    <>
      {/* <GridBackgroundDemo /> */}
      <Navbar />
      <div className=" min-h-screen w-full flex flex-col overflow-y-auto items-center justify-start p-2 ">
        <div className="max-w-2xl mx-auto  px-2 sm:px-4 md:px-8 ">
          <About />
          <Projects />
          <Skills />
          <Footer />
        </div>
      </div>
    </>
  )
}
