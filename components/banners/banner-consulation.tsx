import {useState, useEffect, useRef} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from './../../styles/components/banner-consulation.module.scss'
import ModalRequest from './../modales/request'

const SolveClentProblemes = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className={styles.bannerConsultation} id={props.id??''}>
        <h2 className={styles.title}>Расскажите о задачах вашего проекта, и мы составим для вас предложение</h2>
        <button className={styles.btn} onClick={() => handleShow()}><span>Написать</span></button>
      </div>
      <ModalRequest show={show} onHide={handleClose}/>
    </>
  )
}

export default SolveClentProblemes