import { Zap, Users, Code } from "lucide-react"
import { AnimatedWords } from "@/components/ui/animated-text"
import { SectionHeading } from "@/components/ui/section-heading"
import { FeatureCard } from "@/components/ui/card"

export function About() {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-[#FF416C]" />,
      title: "Innovation",
      description: "We push the boundaries of what's possible with cutting-edge technology and creative solutions.",
    },
    {
      icon: <Users className="h-8 w-8 text-[#E48633]" />,
      title: "Collaboration",
      description: "Our community thrives on teamwork, bringing together diverse skills and perspectives.",
    },
    {
      icon: <Code className="h-8 w-8 text-[#FF416C]" />,
      title: "Open Source",
      description: "We believe in transparent, accessible code that can be improved and shared by everyone.",
    },
  ]

  return (
    <section id="about" className="py-20 dark:bg-slate-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About" highlight="Tech Thrives" highlightClassName="animate-text-focus-in">
          <p className="mt-6 text-gray-800 dark:text-gray-300 max-w-2xl mx-auto">
            <AnimatedWords
              text="We believe in the power of teamwork, and this platform is our hub for developing, sharing, and improving projects that make a difference."
              once={false}
            />
          </p>
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

