'use client'
import "./globals.css";
import { GridBackgroundDemo } from "@/components/ui/grid-background";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import {motion} from 'framer-motion'

const fadeInup = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    }
  }
}

export default function Home() {
  return (
    <>
      {/* <GridBackgroundDemo /> */}
      <Navbar />
      <motion.div
        className="min-h-screen w-full flex flex-col overflow-y-auto items-center justify-start p-2">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-2xl mx-auto px-2 sm:px-4 md:px-8">
          <motion.div variants={fadeInup}>
            <About />
          </motion.div>
          <motion.div variants={fadeInup}>
          <Projects />
          </motion.div>
          <motion.div variants={fadeInup}>
          <Skills />
          </motion.div>
          <Footer />
        </motion.div>
      </motion.div>
    </>
  )
}
