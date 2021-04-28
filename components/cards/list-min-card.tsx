import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from './../../styles/components/list-min-card.module.scss'


const ListMinCard = (props) => {
  const dataItems = props.listItem??[]
  let listItem

  if(dataItems.length) {
    listItem = dataItems.map((item, index) => {
      return (
        <li key={index} className={styles.item}>
          {item.image? <img src={'images/uploads/'+item.image} alt="logo-tool"/>:''}
        </li>
      )
    })
  }

  return (
    <ul className={styles.listMinCard} id="ListMinCard">
      {listItem}
    </ul>
  )
}

export default ListMinCard