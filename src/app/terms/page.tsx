import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Ammy Resize| Usage Terms and Conditions",
  description:
    "Read Ammy Resize's Terms of Service to understand the rules, responsibilities, and conditions of using our free image resizing tool.",
  keywords:
    "terms of service, usage terms, image resizing terms, service conditions",
};

export default function TermsPage() {
  const lastUpdated = new Date().toLocaleDateString();

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Sidebar Table of Contents */}
        <aside className="hidden lg:block lg:col-span-1 sticky top-24 self-start bg-white p-6 border rounded-2xl shadow-sm h-fit">
          <h3 className="font-semibold text-slate-900 mb-4 text-lg">
            Quick Navigation
          </h3>
          <ul className="space-y-3 text-slate-700 text-sm">
            <li><a href="#acceptance" className="hover:text-blue-600">Acceptance of Terms</a></li>
            <li><a href="#description" className="hover:text-blue-600">Description of Service</a></li>
            <li><a href="#responsibilities" className="hover:text-blue-600">User Responsibilities</a></li>
            <li><a href="#availability" className="hover:text-blue-600">Service Availability</a></li>
            <li><a href="#liability" className="hover:text-blue-600">Limitation of Liability</a></li>
            <li><a href="#privacy" className="hover:text-blue-600">Privacy & Data</a></li>
            <li><a href="#intellectual" className="hover:text-blue-600">Intellectual Property</a></li>
            <li><a href="#termination" className="hover:text-blue-600">Termination</a></li>
            <li><a href="#changes" className="hover:text-blue-600">Changes to Terms</a></li>
            <li><a href="#law" className="hover:text-blue-600">Governing Law</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
            <li><a href="#severability" className="hover:text-blue-600">Severability</a></li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-3 space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-3">
              Terms of Service
            </h1>
            <p className="text-slate-600 text-lg">
              <strong>Last updated:</strong> {lastUpdated}
            </p>
          </div>

          {/* Intro Card */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-green-900 mb-2">
              Welcome to Ammy Resize
            </h2>
            <p className="text-green-800">
              These Terms of Service outline the rules and regulations for
              using Ammy Resize’s image resizing tool. By using our service,
              you agree to these terms.
            </p>
          </div>

          {/* Terms Sections in Cards */}
          <section id="acceptance" className="bg-white p-6 rounded-2xl border shadow-sm">
            <h2 className="text-xl font-semibold mb-3 text-slate-900">1. Acceptance of Terms</h2>
            <p className="text-slate-700">
              By using Ammy Resize, you accept and agree to these terms. If you do
              not agree, please discontinue using our service.
            </p>
          </section>

          <section id="description" className="bg-white p-6 rounded-2xl border shadow-sm">
            <h2 className="text-xl font-semibold mb-3 text-slate-900">2. Description of Service</h2>
            <ul className="list-disc list-inside text-slate-700 space-y-1">
              <li>Resize images by adjusting dimensions</li>
              <li>Optimize image file sizes</li>
              <li>Convert between formats (JPEG, PNG, WebP)</li>
              <li>Adjust image quality</li>
            </ul>
            <p className="mt-2 text-slate-700">
              All image processing happens locally in your browser. We never
              store your images.
            </p>
          </section>

          <section id="responsibilities" className="bg-white p-6 rounded-2xl border shadow-sm">
            <h2 className="text-xl font-semibold mb-3 text-slate-900">3. User Responsibilities</h2>
            <ul className="list-disc list-inside text-slate-700 space-y-1">
              <li>No illegal, harmful, or offensive content</li>
              <li>Respect applicable laws</li>
              <li>No infringement of intellectual property</li>
              <li>No reverse engineering or system compromise</li>
              <li>No automated misuse or overload</li>
            </ul>
          </section>

          <section id="availability" className="bg-white p-6 rounded-2xl border shadow-sm">
            <h2 className="text-xl font-semibold mb-3 text-slate-900">4. Service Availability</h2>
            <p className="text-slate-700">Service may be interrupted due to:</p>
            <ul className="list-disc list-inside text-slate-700 space-y-1">
              <li>Maintenance</li>
              <li>Technical issues</li>
              <li>Force majeure events</li>
              <li>Third-party dependencies</li>
            </ul>
          </section>

          <section id="liability" className="bg-white p-6 rounded-2xl border shadow-sm">
            <h2 className="text-xl font-semibold mb-3 text-slate-900">5. Limitation of Liability</h2>
            <p className="text-slate-700">
              Ammy Resize is provided “as is” without warranties. We are not liable
              for any damages, data loss, or service interruptions.
            </p>
          </section>

          <section id="privacy" className="bg-white p-6 rounded-2xl border shadow-sm">
            <h2 className="text-xl font-semibold mb-3 text-slate-900">6. Privacy and Data Protection</h2>
            <ul className="list-disc list-inside text-slate-700 space-y-1">
              <li>Images are processed locally</li>
              <li>We never store or access your images</li>
              <li>Only minimal anonymous analytics collected</li>
              <li>No personal info shared with third parties</li>
            </ul>
            <p className="mt-2">
              See our{" "}
              <a href="/privacy" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>{" "}
              for full details.
            </p>
          </section>

          <section id="intellectual" className="bg-white p-6 rounded-2xl border shadow-sm">
            <h2 className="text-xl font-semibold mb-3 text-slate-900">7. Intellectual Property</h2>
            <ul className="list-disc list-inside text-slate-700 space-y-1">
              <li>No copying, modifying, or redistributing service</li>
              <li>No reverse engineering algorithms/code</li>
              <li>No misuse of branding or trademarks</li>
              <li>No derivative works</li>
            </ul>
          </section>

          <section id="termination" className="bg-white p-6 rounded-2xl border shadow-sm">
            <h2 className="text-xl font-semibold mb-3 text-slate-900">8. Termination</h2>
            <p className="text-slate-700">
              We may suspend or terminate access for violations, fraud, or abuse
              without notice.
            </p>
          </section>

          <section id="changes" className="bg-white p-6 rounded-2xl border shadow-sm">
            <h2 className="text-xl font-semibold mb-3 text-slate-900">9. Changes to Terms</h2>
            <p className="text-slate-700">
              We may update these terms anytime. Continued use means acceptance
              of the new terms.
            </p>
          </section>

          <section id="law" className="bg-white p-6 rounded-2xl border shadow-sm">
            <h2 className="text-xl font-semibold mb-3 text-slate-900">10. Governing Law</h2>
            <p className="text-slate-700">
              These terms are governed by applicable laws. Disputes will be
              handled through proper legal channels.
            </p>
          </section>

          <section id="contact" className="bg-white p-6 rounded-2xl border shadow-sm">
            <h2 className="text-xl font-semibold mb-3 text-slate-900">11. Contact Information</h2>
            <ul className="text-slate-700 space-y-1">
              <li>Email: legal@AmmyResize.com</li>
              <li>
                Contact Form:{" "}
                <a href="/contact" className="text-blue-600 hover:underline">
                  example.com/contact
                </a>
              </li>
            </ul>
          </section>

          <section id="severability" className="bg-white p-6 rounded-2xl border shadow-sm">
            <h2 className="text-xl font-semibold mb-3 text-slate-900">12. Severability</h2>
            <p className="text-slate-700">
              If any part of these terms is invalid, the rest remain fully
              enforceable.
            </p>
          </section>

          {/* Final Questions Box */}
          <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6 shadow-sm text-center">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Questions?
            </h3>
            <p className="text-slate-700">
              If you have any questions about these Terms,{" "}
              <a href="/contact" className="text-blue-600 hover:underline">
                contact us
              </a>
              . We’re here to help!
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

