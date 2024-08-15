import '@radix-ui/themes/styles.css'
import './globals.css'
import './theme-config.css'
import { Inter } from 'next/font/google'
import {Theme, ThemePanel} from '@radix-ui/themes'

const inter = Inter({
    subsets: ['latin'],
    variable: "--font-inter"
})

export const metadata = {
  title: 'Mahisaa Sacco',
  description: 'As a trusted financial service partner, we provide our members with a broad range of services designed to simplify their banking experience.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
      {/*accentColor={"teal-1"}*/}
      <Theme appearance={"light"} >
        {children}
          {/*<ThemePanel/>*/}
      </Theme>
      </body>
    </html>
  )
}
