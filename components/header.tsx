import {useState, useEffect, useRef} from 'react'
import {connect} from 'react-redux'
import Modal from 'react-bootstrap/Modal'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from './../styles/components/header.module.scss'
import Link from 'next/link'
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
                    <Link  href="#technologies" >
                      <a  className={styles.MenuItemLink}>Функции</a>
                    </Link>
                  </li>
                  <li className={styles.MenuItem}>
                    <Link  href="#clients" >
                      <a  className={styles.MenuItemLink}>Клиенты</a>
                    </Link>
                  </li>
                  <li className={styles.MenuItem}>
                    <Link  href="#integration" >
                      <a  className={styles.MenuItemLink}>Интеграция</a>
                    </Link>
                  </li>
                </ul>
                <ul className={styles.Btns}>
                  <li className={styles.BtnsItem}>
                    <Link  href="https://lk.datahub.ru">
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