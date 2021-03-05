import Head from 'next/head'
import Header from './../components/header'
import Footer from './../components/footer'

const LandingPage = (props) => {
  return (
    <>
      <Head>
       <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="wrapper">
        <Header />
        <main className="main">
          {props.children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default LandingPage