import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import TrendSet from "@/assets/projectImgs/trendset.png";
import Mentorsklub from "@/assets/projectImgs/mentorsklub.png";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
// import TrendSet from "@/assets/projectImgs/trendset.png";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
    technologies: [
      "React",
      "Next.js",
      "Redux Toolkit",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Tailwind CSS",
      "Shadcn/ui",
    ],
    liveUrl: "https://trendsetnext.vercel.app/",
    githubUrl: "https://github.com/RajuNiranjan/ecommerce_next_frontend",
    imageUrl: TrendSet,
  },
  {
    title: "Mentors Klub",
    description:
      "A Full Stack Schedule Management web application, for metors and mentees. where users can book their slots for meetings",
    technologies: [
      "React",
      "Tailwind CSS",
      "Materila-UI",
      "Tailwind CSS",
      "Node.js",
      "Nest.js",
      "MongoDB",
    ],
    liveUrl: "https://mentorsklub.vercel.app/",
    githubUrl: "https://github.com/Abhisek0721/mentorsklub-frontend",
    imageUrl: Mentorsklub,
  },
];

export default function ProjectsSection() {
  return (
    <div id="projects" className="py-16 bg-[#f6eee1]  dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover "
                width={500}
                height={500}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubLogoIcon className="mr-2 h-4 w-4" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
