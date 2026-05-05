import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// componentes
import CursorSpotlight from "@/components/CursorSpotlight";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import AnimatedBackground from "@/components/AnimatedBackground";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: {
    default: "Brenno | Desenvolvedor Front-end",
    template: "%s | Brenno",
  },
  description: "Desenvolvedor Front-end especializado em React, JavaScript.",
  openGraph: {
    title: "Brenno | Desenvolvedor Front-end",
    description: "Desenvolvedor Front-end especializado em React, JavaScript.",
    url: "https://brenno-portfolio.vercel.app",
    siteName: "Portfolio Brenno",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="font-primary min-h-screen" suppressHydrationWarning>
        <AnimatedBackground />
        {/* <CursorSpotlight /> */}
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}