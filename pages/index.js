import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Noooooooo!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src="/b2753328-1f88-4e64-ac9e-4c7f85a79bc4.jpg" style="margin: 20px 20px 20px 20px" class="vader" />
        <iframe width="110" height="200" src="https://www.myinstants.com/instant/darth-vader-noooooooo-94359/embed/" frameborder="0" scrolling="no"></iframe>
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
