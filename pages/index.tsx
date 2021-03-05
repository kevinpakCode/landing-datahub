import LandingPage from './../layouts/landing-page'
import HomeBanner from './../components/home-banner'
import Functionality from './../components/functionality/functionality'
import SolveClentProblemes from './../components/solve-client-problemes/solve-client-problemes'
import Integration from './../components/integration/integration'

const Home = () => {
  const dataBanner = {
    title: `Отслеживание плюс аналитика репутации в соцмедия и СМИ`,
    text: `Поможем во влиянии на аудиторию`,
    getDemo : true,
    image: ''
  }
  return (
    <LandingPage>
      <HomeBanner data={dataBanner}/>
      <Functionality />
      <SolveClentProblemes />
      <Integration />
    </LandingPage>
  )
}

export default Home