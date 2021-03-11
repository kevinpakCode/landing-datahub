import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from './../styles/components/footer.module.scss'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col sm={12}>
            <div className={styles.inner}>
              <Link  href="/">
                <a className={styles.logoLink}>
                  <img src="/images/svg/datahub_logo-v4.svg" alt="logo"/>
                </a>
              </Link>
              <span className={styles.copyright}>© 2020-2021 DATAHUB</span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer