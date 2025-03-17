import { FloatingContact } from "@/components/floating-contact";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { SectionHeading } from "@/components/ui/section-heading";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-white">
      <Header />
      <main>
        <div className="text-gray-900 dark:text-gray-100 p-6 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Terms and"
              highlight="Conditions"
              description="These terms and conditions outline the rules and regulations for the use of our website."
            />
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl font-semibold mt-6 mb-2">
                1. Acceptance of Terms
              </h2>
              <p className="mb-4">
                By using our website, you agree to comply with these terms and
                conditions.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-2">
                2. User Responsibilities
              </h2>
              <p className="mb-4">
                You must use our services legally and not engage in any
                fraudulent activity.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-2">
                3. Intellectual Property
              </h2>
              <p className="mb-4">
                All content on this website is owned by us and may not be copied
                without permission.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-2">
                4. Limitation of Liability
              </h2>
              <p className="mb-4">
                We are not responsible for any damages resulting from the use of
                our services.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-2">
                5. Changes to Terms
              </h2>
              <p className="mb-4">
                We may update these terms from time to time. Any changes will be
                posted on this page.
              </p>

              <p className="mt-6">
                If you have any questions, contact us at{" "}
                <span className="text-blue-500">support@example.com</span>.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
