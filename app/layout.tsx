import type { Metadata } from "next"
import { Alan_Sans, Irish_Grover } from "next/font/google"
import "./globals.css"
import { LeftSidebar } from "@/src/components/LeftSidebar"
import { Footer } from "@/src/components/Footer"

const alanSans = Alan_Sans({
  variable: "--font-alan-sans",
  subsets: ["latin"],
})

const irishGrover = Irish_Grover({
  variable: "--font-irish-grover",
  subsets: ["latin"],
  weight: "400",
})

export const metadata: Metadata = {
  title: "Stelsey",
  description: "Hello, good friend",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${alanSans.variable} ${irishGrover.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-row p-6">
        <LeftSidebar />
        <main className="flex min-h-full grow flex-col items-center justify-center px-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
