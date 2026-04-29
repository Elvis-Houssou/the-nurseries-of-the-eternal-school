import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
// import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Les Pépinières de l'Éternel",
  description: 'Centre de Protection de la Petite Enfance - Crèche, Préscolaire et Garderie',
  generator: 'v0.app',
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Les Pépinières de l'Éternel",
    description: "Crèche, Préscolaire et Garderie",
    url: "https://pepiniereseternel.vercel.app",
    siteName: "Les Pépinières de l'Éternel",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {/* {process.env.NODE_ENV === 'production' && <Analytics />} */}
      </body>
    </html>
  )
}
