import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from './../../styles/components/banner-consulation.module.scss'

const SolveClentProblemes = (props) => {
  return (
    <div className={styles.bannerConsultation} id={props.id??''}>
      <h2 className={styles.title}>Расскажите о задачах вашего проекта, и мы составим для вас предложение</h2>
      <button className={styles.btn} ><span>Написать</span></button>
    </div>
  )
}

export default SolveClentProblemes