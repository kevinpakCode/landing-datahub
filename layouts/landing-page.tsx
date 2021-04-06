import Head from 'next/head'
import Header from './../components/header'
import Footer from './../components/footer'

const LandingPage = (props) => {
  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="/images/svg/logo-min.svg" />
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