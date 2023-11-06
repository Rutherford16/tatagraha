import './globals.css'

export const metadata = {
  title: 'tatagraha',
  description: 'Website profil perusahaan Tatagraha',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-background'>{children}</body>
    </html>
  )
}
