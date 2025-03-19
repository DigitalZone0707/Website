import { ArrowRight, Github } from "lucide-react"
import { AnimatedWords } from "@/components/ui/animated-text"
import { Button } from "@/components/ui/button"

export function Join() {
  return (
    <section
      id="join"
      className="py-20 bg-gradient-to-r dark:from-slate-900 dark:to-slate-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Community
          </h2>
          <p className="text-xl text-gray-800 dark:text-gray-300 mb-8">
            <AnimatedWords
              text="Ready to be part of something innovative? Join our community today and start collaborating on projects that matter."
              once={false}
            />
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button href="https://github.com/techthrives" variant="primary" size="lg" external={true} className="group">
              <Github className="h-5 w-5 group-hover:animate-pulse-slow" />
              <span className="group-hover:animate-text-shimmer bg-gradient-to-r from-white to-gray-300 bg-clip-text group-hover:text-transparent">
                Join on GitHub
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

