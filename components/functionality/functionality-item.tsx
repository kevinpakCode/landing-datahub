import styles from './../../styles/components/functionality-item.module.scss'

const FunctionalityItem = (props) => {
  return (
    <div className={styles.functionalityItem+ ' ' +props.className}>
      <div className={styles.image}>
        <img src={'/images/svg/'+props.image} alt="functionality image"/>
      </div>
      <div className={styles.content}>
        <div className={styles.supTitle}>{props.supTitle}</div>
        <h3 className={styles.title}>{props.title}</h3>
        <div className={styles.text}>{props.text}</div>
      </div>
    </div>
  )
}

export default FunctionalityItem