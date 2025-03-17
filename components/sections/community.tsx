import { Users, Zap, Code } from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { GradientText } from "@/components/ui/animated-text";

export function Community() {
  const communityFeatures = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Inclusive Environment",
      description:
        "We welcome developers of all skill levels and backgrounds, fostering a supportive community where everyone can contribute and grow.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Knowledge Sharing",
      description:
        "Regular workshops, code reviews, and pair programming sessions help everyone level up their skills.",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Collaborative Projects",
      description:
        "Join forces with other developers to build meaningful projects that solve real-world problems.",
    },
  ];

  return (
    <section id="community" className="py-20 dark:bg-slate-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our"
          highlight="Community"
          highlightClassName="animate-text-bounce"
          description="Whether you're a seasoned developer or just starting, there's a place for you here."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              {communityFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="hover:border-[#FF416C]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF416C]/10 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-[#FF416C] to-[#E48633] p-3 rounded-full">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        <GradientText
                          text={feature.title}
                          animate={false}
                          className="group-hover:animate-text-shimmer"
                        />
                      </h3>
                      <p className="text-gray-700 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative animate-float">
            <div className="relative w-full h-64 md:h-96">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/community.jpg"
                  alt="Tech Community"
                  width={500}
                  height={400}
                  className="rounded-xl w-full h-64 md:h-96 object-cover"
                />
              </div>
              <div className="absolute -top-5 left-10 bg-gradient-to-r from-[#E48633] to-[#FF416C] p-4 rounded-xl shadow-xl animate-pulse-slow">
                <Users className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
