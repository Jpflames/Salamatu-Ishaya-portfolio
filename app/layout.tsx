import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Salamatu Ishaya – Professional Virtual Assistant",
  description: "Portfolio of a skilled Virtual Assistant specializing in admin support, email management, research, and customer service.",
  keywords: "virtual assistant, administrative support, email management, customer service, professional assistant",
  authors: [{ name: "Salamatu Ishaya" }],
  openGraph: {
    title: "Salamatu Ishaya – Professional Virtual Assistant",
    description: "Portfolio of a skilled Virtual Assistant specializing in admin support, email management, research, and customer service.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

