'use client'
import "./globals.css";
import { GridBackgroundDemo } from "@/components/ui/grid-background";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import { BlurFade } from "@/components/ui/blur-fade";

export default function Home() {
  return (
    <>
      {/* <GridBackgroundDemo /> */}

      <Navbar />
      <div
        className="min-h-screen w-full flex flex-col overflow-y-auto items-center justify-start px-6">
        <div
          className="max-w-[40rem] mx-auto  md:px-8 ">
          <div>
            <About />
          </div>
          <div>
          <Projects />
          </div>
          <div>
          <Skills />
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}
