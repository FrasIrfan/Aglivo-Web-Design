import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // The weights you need for your design
  variable: '--font-montserrat', // Optional: Define a CSS variable for custom use
});

export const metadata = {
  title: 'Aglivo Web Design',
  description: 'Professional web design and development services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
