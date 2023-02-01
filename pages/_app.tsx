import '@/styles/globals.css'
import '@/styles/style.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="page-content">
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}
