import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import NextTopLoader from 'nextjs-toploader';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextJS 13 Contentlayer MDX',
  description: 'Generated by Quang',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <NextTopLoader color='#262829' />

        {/* Header */}
        <header className='w-full'>
          <div className='max-w-7xl mx-auto px-5 py-10 flex justify-center items-center gap-4'>
            <Link href="/" className='px-3 py-2 border border-black rounded-lg shadow-lg'>Home</Link>
            <Link href="/blogs" className='px-3 py-2 border border-black rounded-lg shadow-lg'>Blogs</Link>
          </div>
        </header>


        {children}
      </body>
    </html>
  )
}
