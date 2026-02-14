import Link from "next/link";
import { Globe } from "lucide-react";
import Image from "next/image";
import { BlurFade } from "./ui/blur-fade";
import Github from "../public/GithubLogo.png";

const projects = [
  {
    id: 2,
    Title: "paper.fun",
    Description: "paper.fun is a backend-focused paper trading platform for the SOL/USD market that simulates real trading behavior using live prices.It’s designed around deterministic execution, transactional correctness, and concurrency-safe order handling.",
    Tech: [
      { id: 1, name: "Express" },
      { id: 2, name: "Postgres" },
      { id: 3, name: "Redis" },
      { id: 4, name: "Next.js" },
      { id: 5, name: "Web Sockets" }
    ],
    liveLink: "https://paperfun.eeshm.me",
    github: "https://github.com/eeshm/paper.fun",
    image: "/paperfun.png",
  },
  {
    id: 1,
    Title: "GigBook",
    Description: "gigBook is a full-stack platform that connects artists, performers, and venues — like fiverr, but for gigs. artists can showcase their talent, and venues can find and book the perfect act in minutes.",
    Tech: [
      { id: 1, name: "Express" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Postgres" },
      { id: 4, name: "Prisma" },
    ],
    liveLink: "https://gig-book.vercel.app",
    github: "https://github.com/eeshm/gig-book",
    image: "/gigbook.png",
  },

  {
    id: 8,
    Title: "Stash",
    Description: "stash is a minimal, in-memory bookmark manager focused on privacy and speed. It’s fully keyboard-first, ad-free, and tracking-free for a distraction-free workflow. Your links stay completely under your control.",
    Tech: [
      { id: 1, name: "React" },
      { id: 2, name: "Bun" },
      { id: 3, name: "Tailwind CSS" },
      { id: 4, name: "Shadcn UI" }
    ],
    liveLink: "https://stsh.vercel.app",
    github: "https://github.com/eeshm/stsh",
    image: "/stash.png",
  },
  {
    id: 3,
    Title: "DevPick",
    Description: "devpick helps developers and teams cut through the noise to make smarter tech decisions. Explore, compare, and choose the right tools—no hype, just clarity. Grew to 3000+ users through organic reach.",
    Tech: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Typescript" },
      { id: 3, name: "Supabase" }
    ],
    liveLink: "https://dev-pick.vercel.app",
    github: "https://github.com/eeshm/devpick",
    image: "/devpick.png",
  },
  {
    id: 6,
    Title: "Kissan Chemicals",
    Description: "A modern landing website for a agricultural chemicals shop. Showcasing products, services, and company information with a clean, professional design tailored for the agricultural industry.",
    Tech: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Typescript" },
      { id: 3, name: "Tailwind CSS" }
    ],
    liveLink: "https://kissanchemicals.vercel.app",
    github: "",
    image: "/kissan.png",
  },
  {
    id: 4,
    Title: "BangerX",
    Description: "X search, but on steroids. An unfiltered engine that finds the signal in the noise, letting you instantly pull viral hits by any topic or creator.",
    Tech: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Typescript" },
      { id: 3, name: "Shadcn UI" }
    ],
    liveLink: "https://banger-x.vercel.app",
    github: "https://github.com/eeshm/bangerx",
    image: "/bangerx.png",
  },

  // {
  //   id: 5,
  //   Title: "ReachInbox",
  //   Description: "A Node.js CLI application that integrates multiple IMAP email accounts, uses AI to categorize incoming emails, indexes them in Elasticsearch, and sends Slack notifications and webhook events for relevant leads.",
  //   Tech: [
  //     { id: 1, name: "Node.js" },
  //     { id: 2, name: "OpenAI" },
  //     { id: 3, name: "IMAP" }
  //   ],
  //   liveLink: "",
  //   github: "https://github.com/eeshm/reachbox-eesh",
  // },
];

const ProjectCard = ({ project }: any) => {
  return (
    <div className="relative overflow-hidden h-full flex flex-col rounded-lg bg-white dark:bg-[#0a0a0a] shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out border border-gray-200 dark:border-white/10">
      {/* Project Image */}
      {project.image && (
        <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
          <Image
            src={project.image}
            alt={project.Title}
            layout="fill"
            className="transition-transform object-top   max-sm:object-cover md:object-contain duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <div className="p-4 flex flex-col flex-1"> {/* Use flex-1 here to ensure this div fills the parent's height */}
        {/* Title */}
        <h3 className="text-sm dark:text-white text-black mb-2  ">
          {project.Title}
        </h3>

        {/* Description */}
        <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-2">
          {project.Description}
        </p>

        {/* This wrapper pushes its content to the bottom */}
        <div className="mt-auto pt-2">
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-3">
            {project.Tech.map((tech: any) => (
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
                className="items-center rounded-sm border font-semibold transition-colors focus:outline-none border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-1 px-1.5 py-0.5 text-[10px]">
                <Globe className="size-2.5" />
                <span>Website</span>
              </Link>
            )}
            {project.github && (
              <Link href={project.github} target="_blank" rel="noopener noreferrer" className="items-center rounded-sm border font-semibold transition-colors focus:outline-none border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-1.5 py-0.5 text-[10px]">
                <Image src={Github} alt="GitHub" className="filter invert dark:filter-none size-2.5" />
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
    <>
      <section className="sm:px-12 px-4 py-2">
        <div className="flex flex-col text-base text-[#8b8b8b] space-y-2">
          <BlurFade delay={0.1}>
            <h2 className="text-base  mb-1 mt-4 sm:mt-6">Projects</h2>
            <p className="text-sm  dark:text-white/70 text-black/70 leading-relaxed">things i have built</p>
          </BlurFade>
          <div className="max-w-7xl mx-auto ">
            {/* This grid layout is mobile-first and responsive */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <BlurFade delay={0.1 + index * 0.1} key={project.id}>
                  <ProjectCard project={project} />
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>
      <BlurFade delay={0.5}>
        <div className="border-b border-dashed dark:border-white/[0.06] border-black/[0.06] mt-6"></div>
      </BlurFade>
    </>
  );
}