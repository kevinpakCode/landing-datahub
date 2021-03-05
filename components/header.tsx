import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from './../styles/components/header.module.scss'
import Link from 'next/link'

const Header = () => {
  return (
    <header className={styles.Header}>
      <Container>
        <Row>
          <Col sm={12}>
            <div className={styles.Innner}>
              <div className={styles.Logo}>
                <Link  href="/">
                  <a className={styles.LogoLink}>
                    <img src="/images/svg/datahub_logo.svg" alt="logo"/>
                  </a>
                </Link>
              </div>
              <ul className={styles.Menu}>
                <li className={styles.MenuItem}>
                  <Link  href="/">
                    <a className={styles.MenuItemLink}>Технологии</a>
                  </Link>
                </li>
                <li className={styles.MenuItem}>
                  <Link  href="/">
                    <a className={styles.MenuItemLink}>Клиенты</a>
                  </Link>
                </li>
                <li className={styles.MenuItem}>
                  <Link  href="/">
                    <a className={styles.MenuItemLink}>Интеграция</a>
                  </Link>
                </li>
                <li className={styles.MenuItem}>
                  <Link  href="/">
                    <a className={styles.MenuItemLink}>Контакты</a>
                  </Link>
                </li>
              </ul>
              <ul className={styles.Btns}>
                <li className={styles.BtnsItem}>
                  <Link  href="/">
                    <a className={styles.BtnsItemLink}>Войти</a>
                  </Link>
                </li>
                <li className={styles.BtnsItem}>
                  <button className={styles.BtnsItemBtn}><span>Заявка на доступ</span></button>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header