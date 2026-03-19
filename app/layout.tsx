import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The World in a City | A Global Documentary Series',
  description: 'A cinematic documentary exploring how the FIFA World Cup transforms cities through football, food, business, and identity. From 1994 to 2026 across North America.',
  keywords: 'FIFA World Cup, documentary, cities, culture, football, soccer, 2026',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
