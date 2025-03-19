import { ExternalLink, Github } from "lucide-react";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function Card({
  children,
  className = "",
  hoverEffect = true,
}: CardProps) {
  return (
    <div
      className={`
        bg-slate-100 dark:bg-slate-800 p-6 cursor-pointer rounded-xl border border-slate-200 dark:border-slate-700
        ${
          hoverEffect
            ? "hover:border-[#FF416C]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF416C]/10 group"
            : ""
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  className = "",
}: FeatureCardProps) {
  return (
    <Card className={className}>
      <div className="bg-slate-200 dark:bg-slate-900 p-4 rounded-lg inline-block mb-4 group-hover:bg-gradient-to-r from-[#FF416C]/20 to-[#E48633]/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">
        <span className="bg-gradient-to-r from-[#FF416C] to-[#E48633] bg-clip-text text-transparent group-hover:animate-text-shimmer">
          {title}
        </span>
      </h3>
      <p className="text-gray-800 dark:text-gray-400">{description}</p>
    </Card>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  website?: string;
}

export function ProjectCard(project: ProjectCardProps) {
  return (
    <div className="bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden cursor-pointer border border-slate-200 dark:border-slate-700 hover:border-[#E48633]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#E48633]/10 group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-[#FF416C] group-hover:to-[#E48633] group-hover:bg-clip-text group-hover:text-transparent transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-800 dark:text-gray-400 mb-4 line-clamp-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="text-xs bg-slate-300 cursor-pointer dark:bg-slate-700 px-2 py-1 rounded-full text-gray-800 dark:text-gray-300 hover:bg-gradient-to-r hover:from-[#FF416C]/20 hover:to-[#E48633]/20 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <a
            target="_blank"
            href={project.link}
            className="flex items-center text-sm gap-2 font-medium text-[#FF416C] hover:text-[#E48633] transition-colors group"
          >
            <span>Github</span>
            <Github className="h-5 w-5" />
          </a>
          <a
            target="_blank"
            href={project.website}
            className="flex items-center text-sm gap-2 font-medium text-[#FF416C] hover:text-[#E48633] transition-colors group"
          >
            <span>Website</span>
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatar,
}: TestimonialCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <div className="flex-1">
        <svg
          className="h-8 w-8 text-[#FF416C] mb-4 opacity-80"
          fill="currentColor"
          viewBox="0 0 32 32"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className="text-gray-800 dark:text-gray-300 mb-4 italic">{quote}</p>
      </div>
      <div className="flex items-center mt-4">
        <img
          src={avatar || "/placeholder.svg"}
          alt={author}
          className="h-10 w-10 rounded-full mr-3 object-cover border-2 border-[#FF416C]"
        />
        <div>
          <h4 className="font-semibold text-gray-800 dark:text-white">
            {author}
          </h4>
          <p className="text-sm text-gray-800 dark:text-gray-400">
            {role}, {company}
          </p>
        </div>
      </div>
    </Card>
  );
}
