import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from './../../styles/components/integration-technology.module.scss'
import ListMinCard from '../cards/list-min-card'


const IntegrationTechnology = () => {
  const toolList = [
    {
      image: 'logo-google-driver.svg'
    },
    {
      image: 'logo-brand-analytic.svg'
    },
    {
      image: 'logo-b24.svg'
    },
    {
      image: 'logo-amocrm.svg'
    },
    {
      image: 'logo-dataplexus.svg'
    },
    {
      image: 'logo-microsoft-office.svg'
    },
    {
      image: 'logo-yourscan.svg'
    },
    {
      image: 'logo-kribrum.svg'
    }
  ]
  return (
    <div className={styles.integrationTechnology} id="IntegrationTechnology">
      <Container>
        <Row>
          <Col sm={12}>
            <h2 className={styles.title}>Интегрируемся технично</h2>
            <div className={styles.subTitle}>Поддерживаем связь со всеми современными сервисами</div>
            <ListMinCard listItem={toolList}/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default IntegrationTechnology