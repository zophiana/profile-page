import '@/styles/globals.css'

import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'

import Footer from './footer'
import Header from './header'

export const metadata = {
  title: 'Welcome',
  description: 'My personal page',
  icons: [{ rel: 'icon', url: '/images/favicon.ico' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body
        className={
          'dark flex min-h-screen flex-col bg-background font-sans antialiased'
        }
      >
        <Header className="border-b" />
        <main className="flex-auto">{children}</main>
        <Footer className="border-t" />
      </body>
    </html>
  )
}
