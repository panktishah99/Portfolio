import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Header/Navbar";
import SocialLists from "@/components/Socials/SocialLists";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/providers/theme-provider";
import SideNavbar from "@/components/SideNavbar/SideNavbar";
import { Analytics } from "@vercel/analytics/react";
const spaceGrotesk = Space_Grotesk({
  variable: "--font-Space_Grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-IBM_Plex_Mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pankti Bhaskar Shah • Portfolio",
  description:
    "Portfolio of Pankti Bhaskar Shah – Software Engineer, Product Builder, and Innovation-Driven Developer. Projects, experience, and skills in AI, backend, and full-stack development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex items-start w-full">
            <SideNavbar />
            <div className="w-full lg:flex-1">
              <Navbar />
              <main>{children}</main>
              <Footer />
            </div>
            <SocialLists />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
