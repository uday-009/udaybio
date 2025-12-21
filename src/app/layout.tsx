import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Uday Maroju - Frontend Engineer',
  description: 'Professional portfolio of Uday Maroju, a skilled Frontend Engineer specializing in React and modern web technologies.',
  keywords: ['Frontend Engineer', 'React', 'TypeScript', 'Tailwind CSS'],
  openGraph: {
    title: 'Uday Maroju - Frontend Engineer',
    description: 'Professional portfolio showcasing my projects and skills.',
    url: 'https://udaymaroju.com',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}
