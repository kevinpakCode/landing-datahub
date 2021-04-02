import {useState, useEffect, useRef} from 'react'
import {connect} from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Modal from 'react-bootstrap/Modal'
import Link from 'next/link'
import axios from 'axios'

import styles from './../../styles/components/modal.module.scss'

const ModalRequest = (props) =>{
  const modale = useRef(null)
  const [successRequest, setSuccessRequest] = useState(false)

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      message:''
    },

    validationSchema: Yup.object({
      name: Yup.string().required('Обязательно поля'),
      email: Yup.string().email('Введите правильный адрес электронной почты').required('Обязательно поля'),
      phone: Yup.string().required('Обязательно поля'),
      company: Yup.string().required('Обязательно поля'),
      message: Yup.string(),
    }),

    onSubmit: (values, {resetForm}) => {

      const dataForm = {
        data : {
          name : values.name,
          email: values.email,
          phone: values.phone,
          company: values.company,
          text: values.message
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
        resetForm({values:{
          name: '',
          email: '',
          phone: '',
          company: '',
          message:''
        }})
        setSuccessRequest(true)

        setTimeout(()=> {
          setSuccessRequest(false)
        }, 3000)
      })
      .catch(function (error) {
        console.log(error)
      })
    },
  })






  return (
    <>
      <Modal className={styles.modal} show={props.show} onHide={props.onHide} ref={modale}>
        <Modal.Header closeButton className="btn-close"></Modal.Header>
        <Modal.Body className={styles.body}>
          { 
            successRequest&&
            <div className={styles.successRequest}>
              Ваша заявка успешно отправлена!
            </div>
          }
          <form onSubmit={formik.handleSubmit} className={styles.form}>
            <div className="cpn-form-row">
              <label htmlFor="user-name" className="cpn-form-row__label">Имя <span className="cpn-form-row__label-required" >*</span></label>
              <input
                type="text"
                id="user-name"
                className={`cpn-field ${formik.touched.name && formik.errors.name ? 'cpn-field--error': 'cpn-field--valid'}`}
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (<div className="cpn-field-message">{formik.errors.name}</div>) : null}
            </div>

            <div className="cpn-form-row">
              <label htmlFor="user-phone" className="cpn-form-row__label">Телефон <span className="cpn-form-row__label-required" >*</span></label>
              <input
                type="text"
                id="user-phone"
                className={`cpn-field ${formik.touched.phone && formik.errors.phone ? 'cpn-field--error': 'cpn-field--valid'}`}
                name="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone ? (<div className="cpn-field-message">{formik.errors.phone}</div>) : null}
            </div>

            <div className="cpn-form-row">
              <label htmlFor="user-email" className="cpn-form-row__label">E-mail <span className="cpn-form-row__label-required" >*</span></label>
              <input
                type="text"
                id="user-email"
                className={`cpn-field ${formik.touched.email && formik.errors.email ? 'cpn-field--error': 'cpn-field--valid'}`}
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (<div className="cpn-field-message">{formik.errors.email}</div>) : null}
            </div>

            <div className="cpn-form-row">
              <label htmlFor="user-company" className="cpn-form-row__label">Компания <span className="cpn-form-row__label-required" >*</span></label>
              <input
                type="text"
                id="user-company"
                className={`cpn-field ${formik.touched.company && formik.errors.company ? 'cpn-field--error': 'cpn-field--valid'}`}
                name="company"
                onChange={formik.handleChange}
                value={formik.values.company}
              />
              {formik.touched.company && formik.errors.company ? (<div className="cpn-field-message">{formik.errors.company}</div>) : null}
            </div>

            <div className="cpn-form-row">
              <label htmlFor="user-message" className="cpn-form-row__label">Ваше сообщение </label>
              <textarea 
                id="user-message" 
                className={`cpn-field ${formik.touched.message && formik.errors.message ? 'cpn-field--error': 'cpn-field--valid'}`}
                placeholder="Необязательный пункт"
                name="message" 
                onChange={formik.handleChange}
                value={formik.values.message}
              ></textarea>
              {formik.touched.message && formik.errors.message ? (<div className="cpn-field-message">{formik.errors.message}</div>) : null}
            </div>

            <div className={`${styles.formBtns} cpn-form-row cpn-form-row--btns`}>
              <button type="submit" className={styles.btn+' cpn-form-row__btn-submit cpn-form-row__btn-submit--block'}><span>Отправить</span></button>
            </div>

            <div className="cpn-form-row">
              <p className="cpn-form-row__text">
                Нажимая на эту кнопку вы соглашаетесь на  <Link href="#"><a className="cpn-form-row__link">обработку персональных данных </a></Link>
              </p>
            </div>

          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}
export default ModalRequest