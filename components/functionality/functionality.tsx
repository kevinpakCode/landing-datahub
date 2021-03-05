import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from './../../styles/components/functionality.module.scss'

const Functionality = () => {
  return (
    <div className={styles.functionality}>
      <Container>
        <Row>
          <Col>
            <h2 className={styles.title}>Функциональные возможности</h2>
            <div className={styles.steps}></div>
            <div className={styles.inner}>
                <Row>
                  <Col sm={12} md={6}>
                    <div className={styles.image}><img src="/images/svg/analytic.svg" alt="functionality image"/></div>
                  </Col>
                  <Col sm={12} md={6}>
                    <div className={styles.content}>
                      <div className={styles.supTitle}>Мониторинг</div>
                      <h3 className={styles.titleSecond}>Мониторинг и автоматическая категоризация</h3>
                      <div className={styles.text}>
                        <p>
                          Поможем своевременно узнать, что говорят пользователи о ваших продуктах и услугах. 
                          Авторы мониторинга пришли к выводу, что меньше всего корректных материалов выходит 
                          о людях с инвалидностью (67,9% от всех материалов с упоминанием группы). 
                          Чаще всего грешат некорректными текстами  региональные государственные медиа.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
            </div>
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default Functionality