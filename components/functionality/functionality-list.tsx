import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from './../../styles/components/functionality-list.module.scss'
import FunctionalityItem from './functionality-item'

const FunctionalityList = (props) => {
  const data = props.data ?? []
  let listItem = 'null'

  if(data.length) {
    listItem = data.map((item, index) => {
      return (
          <FunctionalityItem className={styles.functionalityListItem} image={item.image} supTitle={item.supTitle} title={item.title} text={item.text} key={index}/>
      )
    })
  }

  return (
    <div className={styles.functionalityList} id="functionality-list">
      {listItem}
    </div>
  )
}

export default FunctionalityList