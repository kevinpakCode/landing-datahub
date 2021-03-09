import {useState, useEffect, useRef} from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from './../styles/components/header.module.scss'
import Link from 'next/link'
import Anchor from './../components/scrolls/anchor'

const Header = () => {
  return (
    <>
      <header className={styles.Header}>
        <Container>
          <Row>
            <Col sm={12}>
              <div className={styles.Innner}>
                <div className={styles.Logo}>
                  <Link  href="/">
                    <a className={styles.LogoLink}>
                      <img src="/images/svg/datahub_logo-v3.svg" alt="logo"/>
                    </a>
                  </Link>
                </div>
                <ul className={styles.Menu}>
                  <li className={styles.MenuItem}>
                    <Anchor href="#technologies" className={styles.MenuItemLink}>Функции</Anchor>
                  </li>
                  <li className={styles.MenuItem}>
                    <Anchor href="#clients" className={styles.MenuItemLink}>Клиенты</Anchor>
                  </li>
                  <li className={styles.MenuItem}>
                    <Anchor href="#integration" className={styles.MenuItemLink}>Интеграция</Anchor>
                  </li>
                  <li className={styles.MenuItem}>
                    <Anchor href="#contact-banner" className={styles.MenuItemLink}>Контакты</Anchor>
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
      <style jsx global>{`
    
      `}</style>
    </>
  )
}

export default Header