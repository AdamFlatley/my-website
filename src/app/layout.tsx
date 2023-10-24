'use client';
import Header from '@/components/header/header'
import './global.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/footer'
import { usePathname } from 'next/navigation'
// import { useRouter } from 'next/router'


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathName = usePathname()
  const isHomepage = pathName === '' || pathName === '/'

  return (
    <html className='flex flex-col h-screen bg pinky-good' lang="en">
      {/* {!isHomepage && <Header />} */}
      <Header />
      {children}
      <div className='flex-1 h-auto'></div>
      <Footer />
      {/* {!isHomepage && <Footer />} */}
    </html>
  )
}
