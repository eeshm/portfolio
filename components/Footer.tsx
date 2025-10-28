import Link from 'next/link';
import { MdiGithub } from "./ui/github";
import { MdiLinkedin } from "./ui/linkedin";
import { MaterialSymbolsMail } from "./ui/mail";
import { QlementineIconsResume16 } from "./ui/resume";
import XIcon from './ui/XIcon';

export default function Footer(){
    return(
        <>
        <footer className="w-full px-4 py-12 mb-5 text-black dark:text-white">
            <div className="max-w-2xl mx-auto flex flex-col  space-y-8">
                {/* Divider */}
                {/* <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-black dark:via-white to-transparent"></div> */}

                {/* Let's connect section */}
                <div className="flex flex-col space-y-6">
                    <h3 className=" mb-4 opacity-20 mt-4 sm:mt-6 font-serif">Let's connect</h3>
                    
                    {/* Social Links */}
                    <div className="flex gap-6 flex-wrap">
                        <Link 
                            href="https://github.com/eeshm" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="opacity-70 hover:opacity-100 transition-opacity duration-300 flex items-center gap-2"
                        >
                            <MdiGithub className=" dark:fill-white fill-black" />
                            <span className="hidden md:inline text-xs">GitHub</span>
                        </Link>
                        <Link 
                            href="https://x.com/eeshmidha1" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="opacity-70 hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-lg"
                        >
                            <XIcon  className='w-4 h-4'/>
                            <span className="hidden md:inline text-xs">Twitter</span>
                        </Link>
                        <Link 
                            href="https://linkedin.com/in/eesh-midha" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="opacity-70 hover:opacity-100 transition-opacity duration-300 flex items-center gap-2"
                        >
                            <MdiLinkedin className="dark:fill-white fill-black" />
                            <span className="hidden md:inline text-xs">LinkedIn</span>
                        </Link>
                        <Link 
                            href="mailto:eeshmidha08@gmail.com" 
                            className="opacity-70 hover:opacity-100 transition-opacity duration-300 flex items-center gap-2"
                        >
                            <MaterialSymbolsMail className="w-4 h-4 dark:fill-white fill-black" />
                            <span className="hidden md:inline text-xs">Email</span>
                        </Link>
                        <Link 
                            href="https://drive.google.com/file/d/1LYji7Ueg8uuDERr6dNRF7EulkmGYwUfi/view" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="opacity-70 hover:opacity-100 transition-opacity duration-300 flex items-center gap-2"
                        >
                            <QlementineIconsResume16 className=" dark:fill-white fill-black" />
                            <span className="hidden md:inline text-xs">Resume</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}