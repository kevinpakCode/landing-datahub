import LandingPage from './../layouts/landing-page'
import HomeBanner from './../components/home-banner'
import Technologies from '../components/technologies/technologies'
import SolveClentProblemes from './../components/solve-client-problemes/solve-client-problemes'
import Integration from './../components/integration/integration'
import IntegrationTechnology from '../components/integration/integration-technology'

const Home = () => {
  const dataBanner = {
    title: `Управление брендом и репутацией в соцмедиа и СМИ`,
    text: `Отслеживайте и анализируйте влияние информационной среды на имидж вашего бренда`,
    getDemo : true,
    image: ''
  }
  return (
    <LandingPage>
      <HomeBanner data={dataBanner}/>
      <Technologies />
      <IntegrationTechnology/>
      <SolveClentProblemes />
      <Integration />
    </LandingPage>
  )
}

export default Home