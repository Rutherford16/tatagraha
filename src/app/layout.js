import './globals.css'
import Header from './component/header'

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
        <footer className="bg-footer text-white p-4 pb-2">
          <div className="grid grid-cols-3 border-b pb-5">
            <div className="border-r">
              <h1 className="text-center text-2xl">Hubungi Kami</h1>
              <ul>
                <li>Alamat Kantor</li>
                <ul className="ml-4">
                  <li><a href="https://www.google.com/maps/place/ND.10/@-0.4715615,117.1347588,19z/data=!4m6!3m5!1s0x2df67f71a1459abd:0x6e1d9033851c73ca!8m2!3d-0.4714662!4d117.1355473!16s%2Fg%2F11ty005xm1?entry=ttu" className="text-link text-sm">ND 10, Perumahan Pandan Harum Hill, Kel. Air Hitam, Kec. Samarinda Ulu, Kota Samarinda, Provinsi Kalimantan Timur, Indonesia</a></li>
                </ul>
              </ul>
              <h3><a href="/" className="text-link text-sm">admin@tatagraha.com</a></h3>
              <h3 className="text-sm">+6281234567890</h3>
              <div className="flex justify-center child:mx-1">
                <a href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </a>
                <a href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="border-r">
              <h1 className="text-center text-2xl">Our Client</h1>
            </div>
            <div>
              <h1 className="text-center text-2xl">Shortlink</h1>
            </div>
          </div>
          <h3 className="text-center pt-2">© 2023 tatagraha, Dibuat oleh <a href="https://rutherford16.github.io/" className="text-link">Ronny Hidayat</a></h3>
        </footer>
      </body>
    </html>
  )
}
