import type { Metadata } from 'next'
import '@radix-ui/themes/styles.css'
import './globals.css'
import { Theme, ThemePanel } from '@radix-ui/themes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'VITLIB',
  description: 'Get your books here',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <Theme accentColor='gray'>
          <Navbar />
          {children}
          <Footer />
          {/* <ThemePanel /> */}
        </Theme>
      </body>
    </html>
  )
}
