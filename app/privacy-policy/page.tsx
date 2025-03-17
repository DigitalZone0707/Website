import { FloatingContact } from "@/components/floating-contact";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { SectionHeading } from "@/components/ui/section-heading";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-white">
      <Header />
      <main>
        <div className="text-gray-900 dark:text-gray-100 p-6 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Privacy"
              highlight="Policy"
              description="Your privacy is important to us. This Privacy Policy explains how
              we collect, use, and protect your information."
            />
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl font-semibold mt-6 mb-2">
                1. Information We Collect
              </h2>
              <p className="mb-4">
                We may collect personal information such as your name, email
                address, and other details when you use our services.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-2">
                2. How We Use Your Information
              </h2>
              <p className="mb-4">
                We use your data to improve our services, provide customer
                support, and communicate with you.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-2">
                3. Data Protection
              </h2>
              <p className="mb-4">
                We take security measures to protect your personal information
                from unauthorized access.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-2">
                4. Changes to This Policy
              </h2>
              <p className="mb-4">
                We may update this policy from time to time. Any changes will be
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
