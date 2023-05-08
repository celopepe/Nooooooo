import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Noooooooo!</title>
        <link rel="icon" href="public/626-6268258_calling-him-scruffy-looking-but-through-a-gutsy.png" />
      </Head>

      <main>
        <img src="/b2753328-1f88-4e64-ac9e-4c7f85a79bc4.jpg" class="vader" />
        <iframe width="110" height="100" src="https://www.myinstants.com/instant/darth-vader-noooooooo-94359/embed/" frameborder="0" scrolling="no"></iframe>
      </main>
    
      <Footer />

    </div>
  )
}
