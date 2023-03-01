import '@/styles/globals.css'
import Layout from '@/componenets/Layout'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src="https://kit.fontawesome.com/6d70eac1dc.js" crossorigin="anonymous"></script>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
