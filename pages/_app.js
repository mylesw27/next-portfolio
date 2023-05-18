import '@/styles/globals.css'
import Navbar from '@/components/Navbar'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Navbar />
      <footer>
        © Myles Wiegel {new Date().getFullYear()} GPLv3
      </footer>
    </>
  )
}
