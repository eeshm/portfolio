'use client'
import "./globals.css";
import { GridBackgroundDemo } from "@/components/ui/grid-background";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import { BlurFade } from "@/components/ui/blur-fade";

export default function Home() {
  return (
    <>
      {/* <GridBackgroundDemo /> */}
      <div
        className="min-h-screen relative max-w-4xl  mx-auto font-sans">
          <div className="absolute left-0 top-0 w-[60px] h-full overflow-hidden sm:block hidden">
            <div className="absolute dark:opacity-[0.04] opacity-[0.06] inset-0 w-[60px] h-full border dark:border-[#eee] border-[#000]/70" 
            style={{
              backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 2px, currentcolor 2px, currentcolor 3px, transparent 3px, transparent 6px)"
            }}></div>
          </div>
          <div className="absolute right-0 top-0 w-[60px] h-full overflow-hidden sm:block hidden">
            <div className="absolute dark:opacity-[0.04] opacity-[0.06] inset-0 w-[60px] h-full border dark:border-[#eee] border-[#000]/70"
              style={{
                backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 2px, currentcolor 2px, currentcolor 3px, transparent 3px, transparent 6px)"
              }}></div>
          </div>
        <div
          className="mx-auto sm:w-[calc(100%-120px)] w-full max-w-4xl pt-8 ">
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
