"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { IconWorld, IconBrandGithub } from "@tabler/icons-react";
import { LinkPreview } from "@/components/ui/link-preview";
import { Project } from "@/types/types";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  index: number;
  hovered: number | null;
  setHovered: React.Dispatch<React.SetStateAction<number | null>>;
}

export const ProjectCard = React.memo(({ project, index, hovered, setHovered }: ProjectCardProps) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-xl overflow-hidden shadow-md transition-all duration-300 ease-out select-none",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}
  >
    <Image src={project.image} alt={project.name} width={400} height={300} className="w-full h-48 md:h-60 object-cover" />

    <div className="p-4 space-y-3">
      <h3 className="text-xl font-semibold">{project.name}</h3>

      <p className="text-sm text-gray-600 dark:text-gray-300">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.topics.map((topic: string) => (
          <Badge variant="secondary" key={topic}>
            {topic}
          </Badge>
        ))}
      </div>

      <div className="flex gap-4 pt-2">
        <LinkPreview url={project.github}>
          <div className="flex items-center gap-1 font-semibold text-sm">
            <IconBrandGithub className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            Github
          </div>
        </LinkPreview>
        <LinkPreview url={project.url}>
          <div className="flex items-center gap-1 font-semibold text-sm">
            <IconWorld className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            Live
          </div>
        </LinkPreview>
      </div>
    </div>
  </div>
));
