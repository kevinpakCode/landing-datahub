import {useState, useEffect, useRef} from 'react'
import {connect} from 'react-redux'
import Modal from 'react-bootstrap/Modal'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from './../styles/components/header.module.scss'
import Link from 'next/link'
import Anchor from './../components/scrolls/anchor'
import ModalRequest from './modales/request'

const Header = (props) => {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

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
                </ul>
                <ul className={styles.Btns}>
                  <li className={styles.BtnsItem}>
                    <Link  href="/">
                      <a className={styles.BtnsItemLink} >Войти</a>
                    </Link>
                  </li>
                  <li className={styles.BtnsItem}>
                    <button className={styles.BtnsItemBtn} onClick={() => handleShow()}><span>Заявка на доступ</span></button>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </header>

      <ModalRequest show={show} onHide={handleClose}/>
    </>
  )
}




export default connect(
  state => ({
    appStore: state
  }),
  dispatch => ({

    //onClick={() => props.OpenModale()}
    OpenModale: () => {
      console.log('open')
      dispatch({
        type: 'OPEN_MODALE',
        playload: true
      })
    },
    CloseModale: () => {
      console.log('close')
      dispatch({
        type: 'CLOSE_MODALE',
        playload: false
      })
    },
  })
)(Header)