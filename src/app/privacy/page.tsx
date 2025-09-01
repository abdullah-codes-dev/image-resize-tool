import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Privacy Policy - Ammy Resize | Your Data Protection Rights",
	description:
		"Read Ammy Resize' privacy policy to understand how we protect your data and ensure your privacy while using our image resizing tool.",
	keywords:
		"privacy policy, data protection, image resizing privacy, user data security",
};

export default function PrivacyPage() {
	return (
		<div className="py-16 bg-gray-50">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h1 className="text-4xl font-bold text-slate-900 mb-4">
						Privacy Policy
					</h1>
					<p className="text-slate-600 text-lg">
						<strong>Last updated:</strong>{" "}
						{new Date().toLocaleDateString()}
					</p>
				</div>

				{/* Grid Layout */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Privacy First */}
					<div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow-sm">
						<h2 className="text-xl font-semibold text-blue-900 mb-3">
							Privacy First Approach
						</h2>
						<p className="text-blue-800">
							Ammy Resize is designed with privacy as a core principle. 
							All image processing happens directly in your browser, 
							so your images never leave your device or get uploaded 
							to our servers.
						</p>
					</div>

					{/* Information We Collect */}
					<div className="bg-white border rounded-2xl p-6 shadow-sm">
						<h2 className="text-xl font-semibold text-slate-900 mb-3">
							1. Information We Collect
						</h2>
						<ul className="list-disc list-inside text-slate-700 space-y-1">
							<li>Images processed in-browser (never uploaded)</li>
							<li>Anonymous usage analytics (device, browser, location)</li>
							<li>Contact info only when you reach out to us</li>
						</ul>
					</div>

					{/* Usage of Information */}
					<div className="bg-white border rounded-2xl p-6 shadow-sm">
						<h2 className="text-xl font-semibold text-slate-900 mb-3">
							2. How We Use Your Information
						</h2>
						<ul className="list-disc list-inside text-slate-700 space-y-1">
							<li>Maintain and improve service</li>
							<li>Enhance website & user experience</li>
							<li>Provide support & respond to queries</li>
							<li>Ensure website security</li>
						</ul>
					</div>

					{/* Data Security */}
					<div className="bg-white border rounded-2xl p-6 shadow-sm">
						<h2 className="text-xl font-semibold text-slate-900 mb-3">
							3. Data Security
						</h2>
						<ul className="list-disc list-inside text-slate-700 space-y-1">
							<li>All image processing is client-side</li>
							<li>HTTPS encryption for all data</li>
							<li>Regular security updates</li>
							<li>Restricted access to personal info</li>
						</ul>
					</div>

					{/* Cookies */}
					<div className="bg-white border rounded-2xl p-6 shadow-sm">
						<h2 className="text-xl font-semibold text-slate-900 mb-3">
							4. Cookies & Tracking
						</h2>
						<ul className="list-disc list-inside text-slate-700 space-y-1">
							<li><strong>Essential:</strong> Core functionality</li>
							<li><strong>Analytics:</strong> Improve site usage</li>
							<li><strong>Preferences:</strong> Save your settings</li>
						</ul>
					</div>

					{/* Third-Party Services */}
					<div className="bg-white border rounded-2xl p-6 shadow-sm">
						<h2 className="text-xl font-semibold text-slate-900 mb-3">
							5. Third-Party Services
						</h2>
						<p className="text-slate-700">
							We may use trusted services like Google Analytics (analytics) 
							and Vercel (hosting). Each has its own privacy policies.
						</p>
					</div>

					{/* User Rights */}
					<div className="bg-white border rounded-2xl p-6 shadow-sm">
						<h2 className="text-xl font-semibold text-slate-900 mb-3">
							6. Your Rights
						</h2>
						<ul className="list-disc list-inside text-slate-700 space-y-1">
							<li>Access, correct or delete personal data</li>
							<li>Request data portability</li>
							<li>Object to processing of your information</li>
						</ul>
					</div>

					{/* Children Privacy */}
					<div className="bg-white border rounded-2xl p-6 shadow-sm">
						<h2 className="text-xl font-semibold text-slate-900 mb-3">
							7. Children’s Privacy
						</h2>
						<p className="text-slate-700">
							Our services are not directed to children under 13. 
							We do not knowingly collect their personal data.
						</p>
					</div>

					{/* Changes */}
					<div className="bg-white border rounded-2xl p-6 shadow-sm">
						<h2 className="text-xl font-semibold text-slate-900 mb-3">
							8. Policy Updates
						</h2>
						<p className="text-slate-700">
							We may update this Privacy Policy. Any changes will 
							be posted here with an updated “Last Updated” date.
						</p>
					</div>

					{/* Contact */}
					<div className="bg-white border rounded-2xl p-6 shadow-sm">
						<h2 className="text-xl font-semibold text-slate-900 mb-3">
							9. Contact Us
						</h2>
						<ul className="text-slate-700 space-y-1">
							<li>Email: privacy@AmmyResize.com</li>
							<li>Contact Form: <a href="/contact" className="text-blue-600">AmmyResize.com/contact</a></li>
						</ul>
					</div>
				</div>

				{/* Summary at Bottom */}
				<div className="mt-12 bg-slate-100 border border-slate-200 rounded-2xl p-6 shadow-sm text-center">
					<h3 className="text-lg font-semibold text-slate-900 mb-2">
						Summary
					</h3>
					<p className="text-slate-700 max-w-3xl mx-auto">
						Ammy Resize is committed to protecting your privacy. 
						We process images locally in your browser, collect minimal 
						analytics data, and never share your personal information 
						with third parties for marketing purposes.
					</p>
				</div>
			</div>
		</div>
	);
}
