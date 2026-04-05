import type { Metadata } from "next";
import { Outfit, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { FilmNoise } from "@/components/ui/FilmNoise";

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

const jetbrains = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Harshed's Portfolio",
  description: "Harshed's Portfolio Website built with Next.js and Tailwind CSS with TypeScript and ESLint support. It showcases my projects and blog posts. It also has a dark mode. 🌙",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${playfair.variable} ${jetbrains.variable} font-sans bg-[#000000]`}>
        <FilmNoise />
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
