import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FlightBooker - Find Your Perfect Flight',
  description: 'Book cheap flights with best deals and offers worldwide',
  icons: {
    icon: '/aeroplane.svg',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
           <Toaster
          richColors
          position="top-center"
          closeButton
        />
        </ThemeProvider>
      </body>
    </html>
  )
}