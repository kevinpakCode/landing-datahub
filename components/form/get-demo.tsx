import {useState, useEffect} from 'react'
import InputMask from 'react-input-mask'
import axios from 'axios'

import styles from './../../styles/components/get-demo.module.scss'

const GetDemo = () => {
  const  [phone, setPhone] = useState('')
  const  [phoneBlur, setPhoneBlur] = useState(false)
  const  [phoneValid, setPhoneValid] = useState(false)
  const  [phoneError, setPhoneError] = useState(false)
  const [successRequest, setSuccessRequest] = useState(false)

  const handleChange = e => {
    const val = e.target.value
    setPhone(val)
    setPhoneError(false)
  }

  const handleBlur = e => {
    setPhoneBlur(true)
  }

  const handleSubmit = e => {
    if(phoneBlur&&phone.length) {
      const newPhone = phone.replace(/([-_()+ ])/g, '')
      if(newPhone.length === 11) {
        setPhoneError(false)
        setPhoneValid(true)
      } else {
        setPhoneError(true)
        setPhoneValid(false)
      }
    } else {
      setPhoneError(true)
      setPhoneValid(false)
    }
  }


  useEffect(() => {
    if(phoneValid) {
      const dataForm = {
        data : {
          name : '',
          email: '',
          phone,
          company: '',
          text: ''
        }
      }
      //=> Axios, post data
      axios({
        method: 'post',
        url: `${process.env.API_URL}/api/v1/forms`,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(dataForm),
      })
      .then(function (response) {
        setPhone('')
        setSuccessRequest(true)
        setTimeout(()=> {
          setSuccessRequest(false)
        }, 3000)
      })
      .catch(function (error) {
        console.log(error)
      })
    }
    
  }, [phoneValid])


  return (
    <div className={`${styles.getDemo} ${phoneError? styles.error:''}`}>
      <InputMask
        type="text" 
        placeholder="Телефон"  
        className={styles.field} 
        mask="(+7) 999-999-99-99"
        name="phone"
        value={phone}
        onBlur={handleBlur}
        onChange={handleChange}
      >
      </InputMask>
      <button className={styles.btn} onClick={handleSubmit}><span>Получить демо</span></button>
      {
        successRequest&&
        <div className={styles.successRequest}>
          Ваша заявка успешно отправлена!
        </div>
      }
    </div>
  )
}

export default GetDemo