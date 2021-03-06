import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from './../../styles/components/technologies.module.scss'
import FunctionalityList from '../../components/functionality/functionality-list'

const Technologies = () => {
  const listFunctionality = [
    {
      'title': `Мониторинг и автоматическая категоризация`,
      'supTitle': `Мониторинг`,
      'text': `Мы используем гибкую систему отслеживания СМИ и соцмедиа, которая позволяет 
                  в режиме реального времени получать упоминания брендов, руководителей, компаний и 
                  связанных с ними хештегов по множеству регионов мира. Наши аналитики помогают 
                  минимизировать шум в отчетах, позволяя получать только данные по теме.`,
      'image': `monotoring.svg`,
    },
    {
      'title': `Анализ публикаций`,
      'supTitle': `Анализ`,
      'text' : `Аналитика и медиаисследования помогают своевременно выявлять проблемы, 
                  которые могут навредить вашей компании, собирайте популярные запросы, тренды, 
                  и мнение аудитории. Автоматический анализ - собирает данные о том, что актуально
                  прямо сейчас, и в то же время, позволяет принять верное решение о дальнейших действиях, 
                  имея более релевантную информацию.`,
      'image': `analytic-03.svg`,
    },
    {
      'title': `Визуализация данных`,
      'supTitle': `Данные`,
      'text': `Наши инструменты визуализации позволяют превращать данные в понятный для человека вид, 
                  с возможность отследить изменения динамики того или иного события. Широкая возможность 
                  для настройки отображения виджетов “под себя”.`,
      'image': `browser-stats.svg`,
    },
    {
      'title': `Простая интеграция`,
      'supTitle': `Интеграция`,
      'text': `Наша архитектура позволяет интегрировать множество внешних сервисов сбора и аналитики
              данных для создания единого центра управления. Мы уже подготовили несколько интеграций 
              для популярных внешних источников, а также имеем возможность достаточно оперативно добавлять 
              интеграции для любых открытых и закрытых API  по запросу.`,
      'image': `integration.svg`,
    },
    {
      'title': `Управление процессами`,
      'supTitle': `Управление`,
      'text': `С помощью менеджмента процессов компании в нашей программе, вы можете построить
                  план и следить за выполнением задач. При необходимости менять приоритеты задач в пару-тройку кликов.
      `,
      'image': `control.svg`,
    },
    {
      'title': `Формирование отчетности`,
      'supTitle': `Отчёт`,
      'text': `Формирование отчетов в единой форме из любого количества и объема данных. 
                Подробные настраиваемые отчеты по выбранному разрезу формируются в один клик. 
                Предусмотрено удобное хранение и рассылка отчетности с помощью мессенджера.`,
      'image': `report.svg`,
    },
  ]
  return (
    <div className={styles.technologies} id="technologies">
      <Container>
        <Row>
          <Col>
            <h2 className={styles.title}>Комплекс функций</h2>
            <div className={styles.subTitle}>Возможности сервиса</div>
            <div className={styles.steps}></div>
            <div className={styles.inner}>
              <Row>
                <Col sm={12}>
                  <FunctionalityList data={listFunctionality}/>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default Technologies