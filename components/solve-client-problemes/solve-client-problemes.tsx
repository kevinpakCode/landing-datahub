import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from './../../styles/components/solve-client-problemes.module.scss'

const SolveClentProblemes = () => {
  return (
    <div className={styles.solveClientProblemes} id="clients">
      <Container>
        <Row>
          <Col sm={12}>
            <div className={styles.inner}>
              <div className={styles.innerChildren}>
                <h2 className={styles.title}>Решаем задачи клиентов</h2>
                <div className={styles.subTitle}>Мы помогаем бизнесу анализировать и учитывать мнения клиентов</div>
                <div className={styles.content}>
                  <ul className={styles.list}>
                    <li className={styles.listItem}>
                      <strong>Экономим время</strong> автоматизируем рутинные процессы. Автоматический мониторинг социальных СМИ и медиа, блогов, мессенджеров и подкастов. Простой и понятный интерфейс
                    </li>
                    <li className={styles.listItem}>
                      <strong>Снизижаем риски</strong> контроль медиаполя, генерация позитива и точечная проработка негатива. 
                    </li>
                    <li className={styles.listItem}>
                      <strong>Работаем над репутацией</strong> выявляем точки социальной напряженности, своевременно отрабатываем жалобы клиентов в социальных сетях.
                    </li>
                    <li className={styles.listItem}>
                      <strong>Быть эффективнее</strong> планирование проведения рекламных кампаний, улучшение маркетинговой стратегии
                    </li>
                    <li className={styles.listItem}>
                      <strong>Улучшить сервис</strong> влияем на ЦА, формируем положительный имидж с помощью СМИ. Повышаем лояльность потребителей
                    </li>                  
                  </ul>
                  <div className={styles.logos}>
                    <span className={styles.logosItem}><img src={'images/uploads/logo-onlineshtab.svg'} alt="logo onlineshtab"/></span>
                    <span className={styles.logosItem}><img src={'images/uploads/logo-epicenter.svg'} alt="logo epicenter"/></span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SolveClentProblemes