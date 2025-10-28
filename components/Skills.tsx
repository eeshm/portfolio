import { BlurFade } from "./ui/blur-fade";


export default function Skills(){
    const Skills = ["Next.js", "Typescript","React", "Postgres", "Supabase","Express","SQL","Docker", 'Redux' , 'Nestjs'];
    return(
        <>
        <section className="sm:px-12 px-4 py-2">
        <div className="flex flex-col gap-y-3">
            <BlurFade delay={0.1}>
            <h2 className="text-base mb-3 opacity-70 mt-4 sm:mt-6"> 
                Skills
            </h2>
            <div className="flex flex-wrap gap-1">
                {Skills.map((skill, index) => (
                    <span key={index} className="bg-black  dark:bg-white text-white dark:text-black p-1 shadow-md inline-flex items-center justify-between rounded-sm border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent  hover:bg-primary/80 dark:hover:bg-primary/80">
                        <p className="flex justify-center items-center font-medium text-[10px]">{skill}</p>
                    </span>
                ))}
                </div>
                </BlurFade>
        </div>
        </section>
        <BlurFade delay={0.3}>
            <div className="border-b border-dashed dark:border-white/[0.06] border-black/[0.06] mt-6"></div>
        </BlurFade>
        </>
    )
}