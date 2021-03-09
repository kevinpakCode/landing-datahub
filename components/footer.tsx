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
          <Col sm={12} md={6}>
            <div className={styles.logo}>
              <Link  href="/">
                <a className={styles.logoLink}>
                  <img src="/images/svg/datahub_logo-v4.svg" alt="logo"/>
                </a>
              </Link>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className={styles.grpColumn}>
              <div className={styles.column}>
                <h5 className={styles.columnTitle}>Навигация</h5>
                <ul className={styles.columnList}>
                  <li className={styles.columnListItem}>
                    <Link  href="/"><a className={styles.columnListItemLink}>Функции</a></Link>
                  </li>
                  <li className={styles.columnListItem}>
                    <Link  href="/"><a className={styles.columnListItemLink}>Клиенты</a></Link>
                  </li>
                  <li className={styles.columnListItem}>
                    <Link  href="/"><a className={styles.columnListItemLink}>Интеграция</a></Link>
                  </li>
                </ul>
              </div>

              <div className={styles.column}>
                <h5 className={styles.columnTitle}>Контакты</h5>
                <ul className={styles.columnList}>
                  <li className={styles.columnListItem}>
                    <Link  href="/"><a className={styles.columnListItemLink}>8 800 00 00</a></Link>
                  </li>
                  <li className={styles.columnListItem}>
                    <Link  href="/"><a className={styles.columnListItemLink}>mail@datahub</a></Link>
                  </li>
                </ul>
              </div>
                
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer