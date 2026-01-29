import Image from "next/image"
import { BlurFade } from "./ui/blur-fade"
import Link from "next/link"
import { MdiGithub } from "./ui/github"
import { MdiLinkedin } from "./ui/linkedin"
import { QlementineIconsResume16 } from "./ui/resume"
import MessageIcon from "./ui/MessageIcon"

export default function About() {
    return (
        <>
            <section className="py-2">
                <BlurFade delay={0.1}>
                    <div className="items-start px-4  mb-8 ">
                        <div className='pt-10 md:pt-25'>
                            <div className="flex font-sans justify-between">
                                <div className="flex flex-col  gap-2 items-start">
                                    <span className="inline-block text-3xl font-bold sm:text-5xl/none ">
                                        hi, eesh here
                                    </span>
                                    <span className="opacity-40 text-xs sm:text-sm ">
                                        21 | Full stack developer
                                    </span>
                                    <div className="flex gap-4 items-center mt-2">
                                        <Link href={"https://github.com/eeshm"} className="opacity-100 hover:opacity-70 duration-300 transition">
                                            <MdiGithub className="dark:fill-white fill-black" />
                                        </Link>
                                        <Link href={"https://linkedin.com/in/eesh-midha"} className="opacity-100 hover:opacity-70 duration-300 transition">
                                            <MdiLinkedin className="dark:fill-white fill-black" />
                                        </Link>
                                        <Link href={"https://drive.google.com/file/d/1nTF5836d24mcXQUQTrAxPNS5epWxIHRt/view"} className="opacity-100 hover:opacity-70 duration-300 transition">
                                            <QlementineIconsResume16 className="dark:fill-white fill-black" />
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
                        <div className="text-muted-foreground text-sm font-sans leading-relaxed space-y-3">
                            <p>
                                I'm a <span className="dark:text-white text-black">Full-stack developer</span> with a sense of design skills that sets me apart from most developers. I work on both frontend and backend development. I believe in building something that makes a difference.
                            </p>
                            <p>
                                open for work
                                {/* create me green dot pulsating here with animation  */}
                                <div className="inline-block size-2 bg-green-500 rounded-full ml-2 animate-pulse" />
                            </p>
                        </div>

                        <div className="mt-4">
                            <span className="text-muted-foreground text-sm ">
                                You can always reach me at <Link href={"mailto:eeshmidha80@gmail.com"} className="underline decoration-wavy underline-offset-4 decoration-black/70 dark:decoration-white/70 hover:text-black dark:hover:text-white transition-all duration-300">eeshmidha80@gmail.com </Link>

                            </span>
                            <span className="inline-flex text-xs "> or </span>
                            <Link href="https://twitter.com/messages/compose?recipient_id=1088330711776411650" target="_blank" rel="noopener noreferrer">
                                <span className="inline-flex items-center justify-center ml-1 gap-2 whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 bg-cardColor dark:text-white text-black hover:bg-card py-2 dark:shadow-[0px_32px_64px_-16px_#0000004c,0px_16px_32px_-8px_#0000004c,0px_8px_16px_-4px_#0000003d,0px_4px_8px_-2px_#0000003d,0px_-8px_16px_-1px_#00000029,0px_2px_4px_-1px_#0000003d,0px_0px_0px_1px_#000000,inset_0px_0px_0px_1px_#ffffff14,inset_0px_1px_0px_#ffffff33]  border-1 h-6 px-2.5 text-xs hover:text-brand">
                                    <MessageIcon /> Twitter DM
                                </span>
                            </Link>
                        </div>
                    </BlurFade>
                </div >
            </section>
            <BlurFade delay={0.3}>
                <div className="border-b border-dashed dark:border-white/[0.06] border-black/[0.06] mt-6"></div>
            </BlurFade>
        </>
    )
}
