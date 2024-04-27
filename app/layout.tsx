import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import { GlobalContextProvider } from '@/context/context'

const rubik = Rubik({
  weight:['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})


export const metadata: Metadata = {
  title: 'StacFx',
  description: 'Learn and get better at industry trading secrets',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <GlobalContextProvider >
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  )
}
