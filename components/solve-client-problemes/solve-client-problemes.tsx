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
                <div className={styles.subTitle}>Короткое пояснение какие мы крутые</div>
                <div className={styles.content}>
                  <ul className={styles.list}>
                    <li className={styles.listItem}>
                      <strong>Определили репутационные риски</strong> выросли <br className="hide-for-mobil"/>вот такие показатели круто
                    </li>
                    <li className={styles.listItem}>
                      <strong>Определили репутационные риски</strong> выросли <br className="hide-for-mobil"/>  вот такие показатели круто на 50%
                    </li>
                    <li className={styles.listItem}>
                      <strong>Снизили расходы на SMM специалиста на 100%</strong> выросли <br className="hide-for-mobil"/>вот такие показатели круто
                    </li>
                    <li className={styles.listItem}>
                      <strong>Определили репутационные риски</strong> выросли <br className="hide-for-mobil"/>вот такие показатели круто
                    </li>
                    <li className={styles.listItem}>
                      <strong>Определили репутационные риски</strong> выросли <br className="hide-for-mobil"/>вот такие показатели круто
                    </li>                  
                  </ul>
                  <div className={styles.logos}>
                    <span className={styles.logosItem}>LOGO</span>
                    <span className={styles.logosItem}></span>
                    <span className={styles.logosItem}></span>
                    <span className={styles.logosItem}></span>
                    <span className={styles.logosItem}></span>
                    <span className={styles.logosItem}></span>
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