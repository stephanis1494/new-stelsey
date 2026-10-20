import type { Metadata } from "next"
import { Alan_Sans, Irish_Grover } from "next/font/google"
import "@/app/globals.css"
import { StoreProvider } from "@/src/store/StoreProvider"

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

// The only root layout. Route groups add their own chrome on top of this, which keeps
// navigation between the public site and the portal client-side (no full reload).
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${alanSans.variable} ${irishGrover.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  )
}
