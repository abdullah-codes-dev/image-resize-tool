import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Ammy Resize - Professional Image Resizing Tool | Free Online Image Resizer",
	description:
		"Resize images online for free. Professional image resizing tool with dimension control, file size optimization, and batch processing. Support for JPG, PNG, WebP formats.",
	keywords:
		"image resize, photo resize, image compression, online image editor, free image resizer, photo editor",
	authors: [{ name: "Ammy Resize Team" }],
	creator: "Ammy Resize",
	publisher: "Ammy Resize",
	robots: "index, follow",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://ammyvirk.site",
		title: "ResizeIt - Professional Image Resizing Tool",
		description:
			"Resize images online for free with our professional image resizing tool.",
		siteName: "Ammy Resize",
	},
	twitter: {
		card: "summary_large_image",
		title: "Ammy Resize- Professional Image Resizing Tool",
		description:
			"Resize images online for free with our professional image resizing tool.",
	},
};

// Google Analytics Script Component
const GoogleAnalytics = () => {
	return (
		<>
			<script async src="https://www.googletagmanager.com/gtag/js?id=G-8GXF90BYWG"></script>
			<script
				dangerouslySetInnerHTML={{
					__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-8GXF90BYWG');
					`,
				}}
			/>
		</>
	);
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head>
				{/* Google Search Console Verification */}
				<meta name="google-site-verification" content="7dYbm5_iMr336y4cH-MyFP-vcr0Fy-VFhZtzJXPTzDI" />

				{/* Google AdSense */}
				<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1791146899524566"
     crossorigin="anonymous"></script>

				{/* Google Analytics */} 
				<GoogleAnalytics />
			</head>
			<body className={inter.className} suppressHydrationWarning>
				<div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>
					<Navigation />
					<main className='pt-16'>{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
