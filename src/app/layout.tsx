import type { Metadata } from "next"
import { Poppins } from 'next/font/google'
import RootClientLayout from "@/components/RootClientLayout"
import "./globals.css"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: "Buildsify",
  description: "Built to Work. Built to Wow. Buildsify.",
  icons: {
    icon: '/logos/main-logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <RootClientLayout>
          {children}
        </RootClientLayout>
      </body>
    </html>
  )
}
