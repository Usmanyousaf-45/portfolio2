import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Usman’s Portfolio",
  description: "A colourful modern portfolio built with Next.js 15, TypeScript & Tailwind CSS",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
