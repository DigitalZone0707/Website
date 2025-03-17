import { SectionHeading } from "@/components/ui/section-heading";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingContact } from "@/components/floating-contact";

export default function FAQ() {
  const faqs = [
    {
      question: "How can I join Tech Thrives?",
      answer:
        "You can join Tech Thrives by visiting our GitHub organization and requesting to join. We welcome developers of all skill levels and backgrounds. Once your request is approved, you'll have access to our repositories and can start contributing to projects.",
    },
    {
      question: "What kind of projects does Tech Thrives work on?",
      answer:
        "Tech Thrives focuses on a variety of projects that aim to make a positive impact. These include open-source tools for developers, educational resources, accessibility solutions, and applications that address social or environmental challenges. We're always open to new project ideas that align with our mission.",
    },
    {
      question: "I'm new to coding. Can I still contribute?",
      answer:
        "We believe in creating an inclusive environment where everyone can learn and grow. We have projects suitable for beginners and experienced mentors who can guide you through your first contributions. We also regularly host workshops and pair programming sessions to help newcomers get started.",
    },
    {
      question: "How does the collaboration process work?",
      answer:
        "We use GitHub for project management and collaboration. Each project has a dedicated repository with issues labeled for different skill levels and types of contributions. We follow a standard pull request workflow, with code reviews to ensure quality and provide feedback. We also use Discord for real-time communication and regular video meetings for planning and demos.",
    },
    {
      question: "Can I propose a new project idea?",
      answer:
        "Yes! We encourage community members to propose new project ideas. You can submit your proposal through our GitHub discussions or during our monthly project planning meetings. If your idea aligns with our mission and there's enough interest from other members, we'll help you set up the project and assemble a team to work on it.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-white">
      <Header />
      <main>
        <div className="text-gray-900 dark:text-gray-100 p-6 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Frequently Asked"
              highlight="Questions"
              description="Find answers to common questions about Tech Thrives and how to get involved."
            />

            <div className="max-w-3xl mx-auto">
              <Accordion>
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} title={faq.question}>
                    <p>{faq.answer}</p>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
