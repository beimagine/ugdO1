import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'UGD Virtual University',
  description: 'Virtual University for Undergraduates and Graduates',
}
export default function RootLayout({ children,params }) {

  return (
    <html lang="en" params={params}>
      <body className={inter.className}>
        <Navbar params={params.locales}/>
        {children}
        <Footer />
      </body>
    </html>
  )
}