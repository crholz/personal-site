import './globals.css'
import { Inter } from 'next/font/google'
import { Cookie } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Corbin And Mykenzie\'s Wedding',
  description: 'Page for the 2024 Wedding of Corbin Holz and Mykenzie Brown',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
