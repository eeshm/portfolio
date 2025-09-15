import { CardSpotlight } from "@/components/ui/card-spotlight";
import Link from "next/link";
import { GithubIcon, Globe } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    Title: "DevPick",
    Description: "Platform that cuts through the noise and helps developers and teams make smarter tech decisions. From exploring categories to weighing pros and cons to comparing tools side-by-side, DevPick guides you to the right choice. Grew to 3000+ users through organic reach.",
    Tech: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Typescript" },
      { id: 3, name: "Supabase" }
    ],
    liveLink: "https://dev-pick.vercel.app",
    github: "https://github.com/eeshm/devpick",
    image:"/devpick.png"
  },
  {
    id: 2,
    Title: "ReachInbox",
    Description: "A Node.js CLI application that integrates multiple IMAP email accounts, uses AI to categorize incoming emails, indexes them in Elasticsearch, and sends Slack notifications and webhook events for relevant leads.",
    Tech: [
      { id: 1, name: "Node.js" },
      { id: 2, name: "OpenAI" },
      { id: 3, name: "IMAP" }
    ],
    liveLink: "",
    github: "https://github.com/eeshm/reachbox-eesh"
  },
  {
    id: 3,
    Title: "Music Lib (Frontend UI)",
    Description: "A clean, interactive Music Library UI with various features. It’s built with modern design, smooth animations, and fully responsive for a polished user experience on any device. Showcasing frontend and Typescript skills.",
    Tech: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Taiwind CSS" }
    ],
    liveLink: "https://music-lib-eeshmidha.vercel.app/",
    github: ""
  },
  {
    id: 4,
    Title: "VidStream (Backend Project)",
    Description: "Backend Project using Express and MongoDB for video sharing and hosting platform.",
    Tech: [
      { id: 1, name: "Node.js" },
      { id: 2, name: "Express" },
      { id: 3, name: "Mongodb" }
    ],
    liveLink: "",
    github: "https://github.com/eeshm/VidStream"
  }
];
export default function Projects() {
  return (
    <section className="pt-10">
      <div className="flex flex-col  text-base text-[#8b8b8b] space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-black dark:text-white">Projects</h2>
        <p className="dark:text-[#8b8b8b] text-black">collection of my work</p>
        <div className="max-w-7xl ">
          <div className="grid grid-cols-1 w-full">
            {projects.map((project, index) => (
                <div className="mb-4 " key={project.id}>
                  <div className={`transition-transform duration-300 ease-in-out transform hover:-translate-y-2`}>
                    <CardSpotlight className="relative h-full w-full ">
                      <div className="flex  justify-between ">
                      <p className="text-base text-black dark:text-white font-bold  z-20">
                        {project.Title}
                      </p>
                      
                      <div className="flex gap-2 ">
                      {project.github &&
                      <Link href={project.github} className="referrer nopener">
                        <GithubIcon/>
                      </Link>
                      }
                      {project.liveLink &&
                        <Link href={project.liveLink}>
                          < Globe/>
                        </Link>
                      }
                      </div>

                      </div>
                      <div className="text-[#383737] dark:text-neutral-400 mt-4 relative z-20 h-24 line-clamp-2">
                        {project.Description}
                      </div>
                      <div className="mt-4">
                        <p className="text-sm text-black dark:text-neutral-400 border-b-2  border-gray-600 inline-flex">Tech Stack</p>
                        <ul className="flex flex-wrap gap-1 mt-2">
                          {project.Tech.map((tech) => (
                            <div key={tech.id} className="inline-flex items-center  rounded-sm border px-1.5 py-0.5 text-xs font-bold 
                 bg-black dark:bg-white  text-white border-gray-500 dark:text-black  ">
                              <li>
                                {tech.name}
                              </li>
                            </ div>
                          ))}
                        </ul>
                      </div>

                    </CardSpotlight>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
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
