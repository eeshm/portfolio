import Image from "next/image"
import { BlurFade } from "./ui/blur-fade"
import Link from "next/link"
import { MdiGithub } from "./ui/github"
import { MdiLinkedin } from "./ui/linkedin"
import { MaterialSymbolsMail } from "./ui/mail"
import { QlementineIconsResume16 } from "./ui/resume"
import { ModeToggle } from "./ui/toggle-button"
import { ClipboardCopy, ClipboardIcon, Link2 } from "lucide-react"

export default function About() {
    return (
        <>
            <section className="py-2">
                <BlurFade delay={0.1}>
                    <div className="items-start px-4  mb-8 ">
                        <div className='pt-25 md:pt-25'>
                            <div className="flex font-sans justify-between">
                                <div className="flex flex-col  gap-2 items-start">
                                    <span className="inline-block text-3xl font-medium tracking-tight sm:text-5xl xl:text-6xl/none">
                                        Hi, I'm Eesh
                                    </span>
                                    <span className="opacity-40 text-xs sm:text-sm ">
                                        21 | Full stack developer
                                    </span>
                                    <div className="flex gap-4 items-center mt-2">
                                        <Link href={"https://github.com/eeshm"} className="opacity-100 hover:opacity-70 duration-300 transition">
                                            <MdiGithub  className="dark:fill-white fill-black"/>
                                        </Link>
                                        <Link href={"https://linkedin.com/in/eesh-midha"}  className="opacity-100 hover:opacity-70 duration-300 transition">
                                            <MdiLinkedin className="dark:fill-white fill-black"/>
                                        </Link>
                                        <Link href={"https://drive.google.com/file/d/1nTF5836d24mcXQUQTrAxPNS5epWxIHRt/view"}  className="opacity-100 hover:opacity-70 duration-300 transition">
                                            <QlementineIconsResume16 className="dark:fill-white fill-black"/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden">
                                    <Image src={"/Picture.jpg"} alt="eesh..." width={500} height={500} className="rounded object-fill" />
                                </div>
                            </div>
                        </div>
                    </div>
                </BlurFade>
                <BlurFade delay={0.3}>
                    <div className="border-b border-dashed dark:border-white/[0.06] border-black/[0.06] mt-6"></div>
                </BlurFade>

                <div className="max-w-3xl mx-auto text-base px-4 sm:px-12 space-y-2 md:space-y-2  text-[#6c6c6c] mb-3 mt-4 sm:mt-6">
                    <BlurFade delay={0.2}>
                        <h1 className="mb-3 opacity-70 mt-4 sm:mt-6 ">
                            About
                        </h1>
                        <div className="text-sm  dark:text-white/70 text-black/70 leading-relaxed space-y-3">
                            <p>TL;DR: I build interactive web applications</p>
                            <p>I'm a full-stack developer currently exploring blockchain technology</p>
                            <p>Focused on building solutions that people actually use</p>
                            <p>Always learning, always improving</p>
                        </div>
                        <br/>
                        <span className="dark:text-white/70 text-black/70  text-sm">
                            You can always reach me at <Link href={"mailto:eeshmidha80@gmail.com"} className="underline decoration-wavy underline-offset-4 decoration-black/70 dark:decoration-white/70 hover:text-black dark:hover:text-white transition-all duration-300">eeshmidha80@gmail.com</Link>
                        </span>
                    </BlurFade>
                </div >
            </section>
            <BlurFade delay={0.3}>
                <div className="border-b border-dashed dark:border-white/[0.06] border-black/[0.06] mt-6"></div>
            </BlurFade>
        </>
    )
}
