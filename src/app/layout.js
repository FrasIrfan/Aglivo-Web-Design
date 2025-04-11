import './globals.css'

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
