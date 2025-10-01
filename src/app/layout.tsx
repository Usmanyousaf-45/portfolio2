import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Usman’s Portfolio 🚀",
  description:
    "A vibrant portfolio built with Next.js 15, TypeScript & Tailwind CSS. Showcasing projects, creativity, and innovation.",
  keywords: ["Portfolio", "Next.js", "TailwindCSS", "TypeScript", "Usman Yousaf"],
  authors: [{ name: "Usman Yousaf" }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-background text-foreground min-h-screen flex flex-col tracking-tight">
        {/* Navbar */}
        <header className="shadow-md sticky top-0 z-50">
          <Navbar />
        </header>

        {/* Main content */}
        <main className="flex-1 w-full">{children}</main>

        {/* Footer */}
        <footer className="mt-auto w-full">
          <Footer />
        </footer>
      </body>
    </html>
  )
}
