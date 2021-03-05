import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from './../styles/components/home-banner.module.scss'
import Link from 'next/link'
import GetDemo from './../components/form/get-demo'

const HomeBanner = (props) => {
  const dataInfos = props.data

  return (
    <div className={styles.banner}>
      <Container>
        <Row>
          <Col sm={12}>
            <div className={styles.inner}>
              <div className={styles.content}>
                <h1 className={styles.title}>{dataInfos.title}</h1>
                <div className={styles.text}>
                  {dataInfos.text??''}
                </div>
                {dataInfos.getDemo && <div className={styles.getDemo}><GetDemo /></div>}
                <div className={styles.getDemo}></div>
              </div>
              <div className={styles.image}>
                <img src={`/images/svg/${(dataInfos.image && dataInfos.image.length>0)? dataInfos.image : 'robo.svg'}`} alt="banner image"/>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomeBanner