import './globals.css'

export const metadata = {
  title: 'ThePourSuite — In Pursuit of Taste',
  description: 'Discover & book unforgettable winery experiences across America.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
