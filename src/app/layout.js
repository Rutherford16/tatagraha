import './globals.css'
import Header from './components/header'
import Footer from './components/footer'

export const metadata = {
  title: 'tatagraha',
  description: 'Website profil perusahaan Tatagraha',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-background'>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  )
}
