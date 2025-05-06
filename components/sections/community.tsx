import React from "react";
import { TextGenerateEffect } from "@/components/ui/text-effects";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { IconBrandDiscord, IconBrandGithub } from "@tabler/icons-react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const items = [
  {
    id: 1,
    name: "John Doe",
    designation: "CEO",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    id: 2,
    name: "Jane Doe",
    designation: "CTO",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
];

export default function Community() {
  return (
    <div className="flex flex-col items-center justify-center mx-6 w-full">
      <h1 className="my-6 mx-auto text-center text-3xl font-bold text-slate-700 md:text-4xl lg:text-6xl dark:text-slate-300">
        Join Our Community
      </h1>
      <TextGenerateEffect
        className="text-center text-md max-w-2xl"
        words="Ready to be part of something innovative? Join our community today and start collaborating on projects that matter. "
      />
      <div className="flex flex-col my-12 items-center justify-center mx-6 w-full">
        <div className="flex">
          <AnimatedTooltip items={items} />
        </div>
        <div className="flex gap-6">
          <HoverBorderGradient className="flex gap-2">
            <a className="flex gap-2" href="https://discord.com/invite/aceternity" target="_blank">
              <IconBrandDiscord /> Join Discord
            </a>
          </HoverBorderGradient>
          <HoverBorderGradient>
            <a className="flex gap-2" href="https://discord.com/invite/aceternity" target="_blank">
              <IconBrandGithub /> Join Github
            </a>
          </HoverBorderGradient>
        </div>
      </div>
    </div>
  );
}
