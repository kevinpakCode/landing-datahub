import styles from './../../styles/components/get-demo.module.scss'

const GetDemo = () => {
  return (
    <div className={styles.getDemo}>
      <input type="email" placeholder="E-mail"  className={styles.field} name="email"/>
      <button className={styles.btn}><span>Получить демо</span></button>
    </div>
  )
}

export default GetDemo