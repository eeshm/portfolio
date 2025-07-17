import { CardSpotlight } from "@/components/ui/card-spotlight";
import Link from "next/link";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/moving-border";


const projects =[
    {
        id:1,
        Title:"Music Lib",
        Description:"This Music Library is a visually appealing project built with Next.js and Aceternity UI, focusing on creating an elegant and smooth user experience. The project leverages Next.js for fast performance and Aceternity UI for a polished design",
        Tech: ["Typescript","Next.js", "Aceternity"],
        Link:"https://github.com/eeshm/music-lib-nextjs"
    },
    {
        id:2,
        Title:"BlogItup",
        Description:"Blog-It-Up is a dynamic web app with Appwrite as backend designed for seamless blog creation and sharing, empowering users to express their thoughts with ease. Experience a user-friendly platform that brings your ideas to life.",
        Tech: ["React","Appwrite","Redux"],
        Link:"https://github.com/eeshm/blog-it-up"
    },
    {
        id:3,
        Title:"VidStream",
        Description:"Backend Project using Express and MongoDB for video sharing and hosting platform.",
        Tech: ["Node.js","Express","Mongodb"],
        Link:"https://github.com/eeshm/VidStream"
    }
]
export default function Projects(){
    return(
<section className="py-10">
    <div className="flex flex-col gap-4 text-base text-[#8b8b8b]">
        <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-white">Projects</h2>
        <p className="text-black dark:text-[#8b8b8b]">collection of my work</p>
        <div className="max-w-7xl ">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:space-y-0 lg:space-x-8">
        {projects.map((project,index)=>(
        <Link href={`${project.Link}`} className="group" target="_blank" rel="noopener noreferrer" key={project.id}>
        <div className="mb-6 " key={project.id}>
        <div className={`transition-transform duration-300 ease-in-out transform hover:-translate-y-2  '-mt-10' }`}>
        <CardSpotlight className="relative h-64 w-full ">
        <p className="text-base text-black dark:text-white font-bold absolute top-5 z-20">
        {project.Title}
        </p>
        <div className="text-black dark:text-neutral-400 mt-4 relative z-20 h-24 line-clamp-2">
        {project.Description}
        </div>
        <div className="mt-4">
          <p className="text-sm text-black dark:text-neutral-400">Tech Stack:</p>
          <ul className="flex flex-wrap gap-1 mt-2">
            {project.Tech.map((tech) => (
                <div className="inline-flex items-center  rounded-xs border px-1.5 py-0.5 text-xs font-semibold
                 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 
                 bg-white dark:bg-black dark:border-white text-gray border-gray-500 dark:text-white shadow ">
              <li key={index}>
                {tech}
              </li>
              </ div>
            ))}
          </ul>
          </div>
    </CardSpotlight>
        </div>
        </div>
            </Link>
        ))}
        </div>
        </div>
    </div>
</section>
    )
}

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};
