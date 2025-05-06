import {
  IconCode,
  IconGitBranch,
  IconHeartCode,
  IconMessageDots,
  IconRocket,
  IconSchool,
  IconSettingsAutomation,
  IconUsers,
} from "@tabler/icons-react";
import { TextGenerateEffect } from "@/components/ui/text-effects";
import { About } from "@/components/ui/cards";

export default function FeaturesSection() {
  const abouts = [
    {
      title: "Open Source First",
      description: "Built on the spirit of sharing, learning, and improving code together.",
      icon: <IconCode />,
    },
    {
      title: "Collaborative Development",
      description: "Work on real-world projects with contributors from all over the globe.",
      icon: <IconUsers />,
    },
    {
      title: "Version Control Mastery",
      description: "Track every change, roll back mistakes, and maintain clean code history with Git.",
      icon: <IconGitBranch />,
    },
    {
      title: "Community Driven",
      description: "Driven by passionate developers who review, discuss, and build together.",
      icon: <IconMessageDots />,
    },
    {
      title: "Learning by Doing",
      description: "From beginners to pros — contribute, review, and grow your skills on real codebases.",
      icon: <IconSchool />,
    },
    {
      title: "Hackathons & Projects",
      description: "Join community events, collaborate on exciting builds, and get noticed.",
      icon: <IconRocket />,
    },
    {
      title: "CI/CD Integration",
      description: "Automate testing, deployment, and delivery with powerful GitHub Actions workflows.",
      icon: <IconSettingsAutomation />,
    },
    {
      title: "Inclusive for All",
      description: "Welcoming contributors of all skill levels — from your first PR to your thousandth.",
      icon: <IconHeartCode />,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-20 mx-6 w-full" id="about">
      <h1 className="mt-6 mx-auto text-center text-3xl font-bold text-slate-700 md:text-4xl lg:text-6xl dark:text-slate-300">
        About Tech Thrives
      </h1>
      <TextGenerateEffect
        className="text-center text-md max-w-2xl"
        words="We believe in the power of teamwork, and this platform is our hub for developing, sharing, and improving projects that make a difference. "
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
        {abouts.map((feature, index) => (
          <About key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}
