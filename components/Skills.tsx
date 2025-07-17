

export default function Skills(){
    const Skills = ["Next.js", "Typescript","React", "Postres", "Express", "Java","MySQL","Web3.js","ai tools"];
    return(
        <section className="py-10">
        <div className="flex flex-col gap-y-3">
            <h2 className="text-2xl font-semibold tracking-tight"> 
                Skills
            </h2>
            <div className="flex flex-wrap gap-1">
                {Skills.map((skill, index) => (
                    <span key={index} className="bg-black  dark:bg-white text-white dark:text-black p-1 shadow-md inline-flex items-center justify-between rounded-sm border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent  hover:bg-primary/80 dark:hover:bg-primary/80">
                        <p className="text-center  font-medium">{skill}</p>
                    </span>
                ))}
                </div>
        </div>
        </section>

    )
}