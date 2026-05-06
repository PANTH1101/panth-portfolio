import { Geist_Mono, Space_Grotesk } from "next/font/google";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import ScrollProgress from "@/components/ScrollProgress";
import { ThemeProvider } from "@/components/ThemeProvider";
import "../styles/globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://portfolio.example.com"),
  title: {
    default: "Panth Chauhan | Developer Portfolio",
    template: "%s | Panth Chauhan",
  },
  description:
    "Developer portfolio for Panth Chauhan, a Computer Engineering student at Dharmsinh Desai University focused on problem-solving and software development.",
  keywords: [
    "developer portfolio",
    "computer engineering student",
    "Next.js portfolio",
    "frontend developer",
    "internship portfolio",
  ],
  authors: [{ name: "Panth Chauhan" }],
  creator: "Panth Chauhan",
  openGraph: {
    title: "Panth Chauhan | Developer Portfolio",
    description:
      "Computer Engineering student portfolio built with Next.js, Tailwind CSS, Framer Motion, and React Three Fiber.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full bg-background font-sans text-foreground antialiased">
        <ThemeProvider>
          <AnimatedBackground />
          <Preloader />
          <ScrollProgress />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
