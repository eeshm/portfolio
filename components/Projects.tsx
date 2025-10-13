import Link from "next/link";
import { Globe } from "lucide-react";
import Image from "next/image";
import { BlurFade } from "./ui/blur-fade";
import Github from "../public/GithubLogo.png"; // Make sure this path is correct

const projects = [
  {
    id: 1,
    Title: "DevPick",
    Description: "DevPick helps developers and teams cut through the noise to make smarter tech decisions. Explore, compare, and choose the right tools—no hype, just clarity. Grew to 3000+ users through organic reach.",
    Tech: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Typescript" },
      { id: 3, name: "Supabase" }
    ],
    liveLink: "https://dev-pick.vercel.app",
    github: "https://github.com/eeshm/devpick",
    image: "/devpick.png", // Ensure this image exists in your public folder
  },
  {
    id: 2,
    Title: "BangerX",
    Description: "X search, but on steroids. An unfiltered engine that finds the signal in the noise, letting you instantly pull viral hits by any topic or creator.",
    Tech: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Typescript" },
      { id: 3, name: "Shadcn UI" }
    ],
    liveLink: "https://banger-x.vercel.app",
    github: "https://github.com/eeshm/bangerx",
    image: "/bangerx.png", // Ensure this image exists in your public folder
  },
  {
    id: 3,
    Title: "ReachInbox",
    Description: "A Node.js CLI application that integrates multiple IMAP email accounts, uses AI to categorize incoming emails, indexes them in Elasticsearch, and sends Slack notifications and webhook events for relevant leads.",
    Tech: [
      { id: 1, name: "Node.js" },
      { id: 2, name: "OpenAI" },
      { id: 3, name: "IMAP" }
    ],
    liveLink: "",
    github: "https://github.com/eeshm/reachbox-eesh",
  },
  {
    id: 4,
    Title: "Music Lib (UI)",
    Description: "A sleek, responsive music library UI with smooth animations, built with TypeScript to showcase frontend skills.",
    Tech: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Taiwind CSS" }
    ],
    liveLink: "https://music-lib-eeshmidha.vercel.app/",
    github: "",
    image: "/musiclib.png", // Ensure this image exists in your public folder
  },
];

// Reusable ProjectCard Component
// ... (imports and projects array remain the same)

const ProjectCard = ({ project }:any) => {
  return (
    <div className="relative overflow-hidden h-full flex flex-col rounded-lg bg-white dark:bg-[#0a0a0a] shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out border border-gray-200 dark:border-zinc-800">
      {/* Project Image */}
      {project.image && (
        <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
          <Image
            src={project.image}
            alt={project.Title}
            layout="fill"
            className="transition-transform object-top object-cover duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <div className="p-4 flex flex-col flex-1"> {/* Use flex-1 here to ensure this div fills the parent's height */}
        {/* Title */}
        <h3 className="text-xl font-bold text-black dark:text-white mb-1">
          {project.Title}
        </h3>

        {/* Description */}
        <p className="text-pretty font-sans text-xs text-muted-foreground dark:prose-invert mb-2">
          {project.Description}
        </p>

        {/* This wrapper pushes its content to the bottom */}
        <div className="mt-auto pt-4">
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-3">
            {project.Tech.map((tech:any) => (
              <span
                key={tech.id}
                className="inline-flex items-center rounded-sm border font-semibold transition-colors focus:outline-none border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]"
              >
                {tech.name}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-row flex-wrap items-start gap-1">
            {project.liveLink && (
              <Link href={project.liveLink} target="_blank" rel="noopener noreferrer"
                className="items-center rounded-md border font-semibold transition-colors focus:outline-none border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
                <Globe className="size-3" />
                <span>Website</span>
              </Link>
            )}
            {project.github && (
              <Link href={project.github} target="_blank" rel="noopener noreferrer" className="items-center rounded-md border font-semibold transition-colors focus:outline-none border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
                <Image src={Github} alt="GitHub" width={12} height={12} className="filter invert dark:filter-none" />
                <span>Source</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <section className="pt-10">
      <div className="flex flex-col text-base text-[#8b8b8b] space-y-2">
        <BlurFade delay={0.1 * 3}>
          <h2 className="text-xl font-bold tracking-tight text-black dark:text-white">projects</h2>
          <p className="dark:text-[#8b8b8b] text-black text-sm">things i have built</p>
        </BlurFade>
        <div className="max-w-7xl mx-auto py-8">
          {/* This grid layout is mobile-first and responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <BlurFade delay={0.1 * (index + 4)} key={project.id}>
                <ProjectCard project={project} />
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}