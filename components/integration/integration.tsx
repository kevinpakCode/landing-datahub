import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from './../../styles/components/integration.module.scss'
import BannerConsultation from './../../components/banners/banner-consulation'

const Integration = () => {
  return (
    <div className={styles.integration} id="integration">
      <Container>
        <Row>
          <Col sm={12}>
            <h2 className={styles.title}>Интегрируемся технично</h2>
            <div className={styles.subTitle}>Возьмем на себя рутину и поддержим на всех этапах</div>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <i className={styles.listItemIcon}>
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.25" d="M37.5002 5C33.4085 5.00202 29.447 6.4381 26.3045 9.05849C23.1621 11.6789 21.0375 15.3178 20.3002 19.3425C23.1451 17.7869 26.4175 17.1949 29.6271 17.6554C32.8367 18.1159 35.8106 19.604 38.1034 21.8968C40.3962 24.1895 41.8843 27.1635 42.3448 30.3731C42.8053 33.5827 42.2133 36.8551 40.6577 39.7C44.9536 38.9149 48.8005 36.5513 51.4422 33.0738C54.0839 29.5963 55.3292 25.2565 54.9335 20.9073C54.5377 16.5582 52.5295 12.5144 49.3035 9.57084C46.0776 6.62726 41.8673 4.99682 37.5002 5Z" fill="url(#paint0_linear)"/>
                    <path d="M17.5 55C24.4036 55 30 49.4036 30 42.5C30 35.5964 24.4036 30 17.5 30C10.5964 30 5 35.5964 5 42.5C5 49.4036 10.5964 55 17.5 55Z" fill="url(#paint1_linear)"/>
                    <path opacity="0.5" d="M27.5001 17.5C23.7791 17.5003 20.1912 18.8836 17.433 21.3812C14.6749 23.8788 12.9434 27.3124 12.5751 31.015C14.8709 30.0284 17.4099 29.7529 19.8639 30.2242C22.3179 30.6956 24.5741 31.892 26.3411 33.659C28.1081 35.4259 29.3045 37.6822 29.7758 40.1362C30.2472 42.5902 29.9717 45.1292 28.9851 47.425C32.8131 47.0408 36.3472 45.2003 38.8567 42.2842C41.3662 39.368 42.6593 35.5991 42.4686 31.7565C42.2779 27.914 40.618 24.2916 37.8321 21.6382C35.0463 18.9848 31.3474 17.5034 27.5001 17.5Z" fill="url(#paint2_linear)"/>
                    <defs>
                    <linearGradient id="paint0_linear" x1="55.0055" y1="22.35" x2="20.3002" y2="22.35" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF5E3A"/>
                    <stop offset="1" stopColor="#FF9500"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="30" y1="42.5" x2="5" y2="42.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF5E3A"/>
                    <stop offset="1" stopColor="#FF9500"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear" x1="42.487" y1="32.4625" x2="12.5751" y2="32.4625" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF5E3A"/>
                    <stop offset="1" stopColor="#FF9500"/>
                    </linearGradient>
                    </defs>
                  </svg>
                </i>
                <span className={styles.listItemTitle}>Быстро установить</span>
              </li>
              <li className={styles.listItem}>
                <i className={styles.listItemIcon}>
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.25" d="M15 57.5H5C4.33696 57.5 3.70107 57.2366 3.23223 56.7678C2.76339 56.2989 2.5 55.663 2.5 55V40C2.5 39.337 2.76339 38.7011 3.23223 38.2322C3.70107 37.7634 4.33696 37.5 5 37.5H15C15.663 37.5 16.2989 37.7634 16.7678 38.2322C17.2366 38.7011 17.5 39.337 17.5 40V55C17.5 55.663 17.2366 56.2989 16.7678 56.7678C16.2989 57.2366 15.663 57.5 15 57.5Z" fill="url(#paint0_linear)"/>
                    <path opacity="0.5" d="M35 57.5H25C24.337 57.5 23.7011 57.2366 23.2322 56.7678C22.7634 56.2989 22.5 55.663 22.5 55V25C22.5 24.337 22.7634 23.7011 23.2322 23.2322C23.7011 22.7634 24.337 22.5 25 22.5H35C35.663 22.5 36.2989 22.7634 36.7678 23.2322C37.2366 23.7011 37.5 24.337 37.5 25V55C37.5 55.663 37.2366 56.2989 36.7678 56.7678C36.2989 57.2366 35.663 57.5 35 57.5Z" fill="url(#paint1_linear)"/>
                    <path d="M55 57.5H45C44.337 57.5 43.7011 57.2366 43.2322 56.7678C42.7634 56.2989 42.5 55.663 42.5 55V5C42.5 4.33696 42.7634 3.70107 43.2322 3.23223C43.7011 2.76339 44.337 2.5 45 2.5H55C55.663 2.5 56.2989 2.76339 56.7678 3.23223C57.2366 3.70107 57.5 4.33696 57.5 5V55C57.5 55.663 57.2366 56.2989 56.7678 56.7678C56.2989 57.2366 55.663 57.5 55 57.5Z" fill="url(#paint2_linear)"/>
                    <defs>
                    <linearGradient id="paint0_linear" x1="17.5" y1="47.5" x2="2.5" y2="47.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF5E3"/>
                    <stop offset="1" stopColor="#FF9500"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="37.5" y1="40" x2="22.5" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF5E3"/>
                    <stop offset="1" stopColor="#FF9500"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear" x1="57.5" y1="30" x2="42.5" y2="30" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF5E3"/>
                    <stop offset="1" stopColor="#FF9500"/>
                    </linearGradient>
                    </defs>
                  </svg>
                </i>
                <span className={styles.listItemTitle}>Легко масштабировать</span>
              </li>
              <li className={styles.listItem}>
                <i className={styles.listItemIcon}>
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.25" d="M29.9999 35.4873C29.5599 35.4873 29.1299 35.3723 28.7499 35.1548L6.24989 22.1598C5.86987 21.9404 5.5543 21.6248 5.3349 21.2448C5.1155 20.8647 5 20.4336 5 19.9948C5 19.556 5.1155 19.1249 5.3349 18.7449C5.5543 18.3648 5.86987 18.0492 6.24989 17.8298L28.7499 4.84481C29.5249 4.40231 30.4749 4.40231 31.2499 4.84481L53.7499 17.8298C54.1299 18.0492 54.4455 18.3648 54.6649 18.7449C54.8843 19.1249 54.9998 19.556 54.9998 19.9948C54.9998 20.4336 54.8843 20.8647 54.6649 21.2448C54.4455 21.6248 54.1299 21.9404 53.7499 22.1598L31.2499 35.1548C30.8695 35.3732 30.4385 35.4878 29.9999 35.4873Z" fill="url(#paint0_linear)"/>
                    <path opacity="0.5" d="M53.7499 27.8301L48.8399 24.9951L31.2499 35.1551C30.4749 35.6001 29.5249 35.6001 28.7499 35.1551L11.1599 24.9951L6.24989 27.8301C5.86987 28.0495 5.5543 28.3651 5.3349 28.7452C5.1155 29.1252 5 29.5563 5 29.9951C5 30.4339 5.1155 30.865 5.3349 31.2451C5.5543 31.6251 5.86987 31.9407 6.24989 32.1601L28.7499 45.1551C29.5249 45.6001 30.4749 45.6001 31.2499 45.1551L53.7499 32.1601C54.1299 31.9407 54.4455 31.6251 54.6649 31.2451C54.8843 30.865 54.9998 30.4339 54.9998 29.9951C54.9998 29.5563 54.8843 29.1252 54.6649 28.7452C54.4455 28.3651 54.1299 28.0495 53.7499 27.8301Z" fill="url(#paint1_linear)"/>
                    <path d="M53.7499 37.8301L48.8399 34.9951L31.2499 45.1551C30.4749 45.6001 29.5249 45.6001 28.7499 45.1551L11.1599 34.9951L6.24989 37.8301C5.86987 38.0495 5.5543 38.3651 5.3349 38.7452C5.1155 39.1252 5 39.5563 5 39.9951C5 40.4339 5.1155 40.865 5.3349 41.2451C5.5543 41.6251 5.86987 41.9407 6.24989 42.1601L28.7499 55.1551C29.5249 55.6001 30.4749 55.6001 31.2499 55.1551L53.7499 42.1601C54.1299 41.9407 54.4455 41.6251 54.6649 41.2451C54.8843 40.865 54.9998 40.4339 54.9998 39.9951C54.9998 39.5563 54.8843 39.1252 54.6649 38.7452C54.4455 38.3651 54.1299 38.0495 53.7499 37.8301Z" fill="url(#paint2_linear)"/>
                    <defs>
                    <linearGradient id="paint0_linear" x1="54.9998" y1="20.0001" x2="5" y2="20.0001" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF5E3A"/>
                    <stop offset="1" stopColor="#FF9500"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="54.9998" y1="35.242" x2="5" y2="35.242" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF5E3A"/>
                    <stop offset="1" stopColor="#FF9500"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear" x1="54.9998" y1="45.242" x2="5" y2="45.242" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF5E3A"/>
                    <stop offset="1" stopColor="#FF9500"/>
                    </linearGradient>
                    </defs>
                  </svg>
                </i>
                <span className={styles.listItemTitle}>Соберём все данные</span>
              </li>
              <li className={styles.listItem}>
                <i className={styles.listItemIcon}>
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 15V12.5H35V15H40V12.5C39.9987 11.1743 39.4715 9.90332 38.5341 8.96593C37.5967 8.02853 36.3257 7.50132 35 7.5H25C23.6743 7.50132 22.4033 8.02853 21.4659 8.96593C20.5285 9.90332 20.0013 11.1743 20 12.5V15H25Z" fill="url(#paint0_linear)"/>
                    <path opacity="0.25" d="M22.5 37.5C21.837 37.5 21.2011 37.2366 20.7322 36.7678C20.2634 36.2989 20 35.663 20 35V30C20 29.337 20.2634 28.7011 20.7322 28.2322C21.2011 27.7634 21.837 27.5 22.5 27.5C23.163 27.5 23.7989 27.7634 24.2678 28.2322C24.7366 28.7011 25 29.337 25 30V35C25 35.663 24.7366 36.2989 24.2678 36.7678C23.7989 37.2366 23.163 37.5 22.5 37.5ZM37.5 37.5C36.837 37.5 36.2011 37.2366 35.7322 36.7678C35.2634 36.2989 35 35.663 35 35V30C35 29.337 35.2634 28.7011 35.7322 28.2322C36.2011 27.7634 36.837 27.5 37.5 27.5C38.163 27.5 38.7989 27.7634 39.2678 28.2322C39.7366 28.7011 40 29.337 40 30V35C40 35.663 39.7366 36.2989 39.2678 36.7678C38.7989 37.2366 38.163 37.5 37.5 37.5Z" fill="url(#paint1_linear)"/>
                    <path opacity="0.5" d="M50 15H10C8.67392 15 7.40215 15.5268 6.46447 16.4645C5.52678 17.4021 5 18.6739 5 20V27.5C5 28.8261 5.52678 30.0979 6.46447 31.0355C7.40215 31.9732 8.67392 32.5 10 32.5H20V30C20 29.337 20.2634 28.7011 20.7322 28.2322C21.2011 27.7634 21.837 27.5 22.5 27.5C23.163 27.5 23.7989 27.7634 24.2678 28.2322C24.7366 28.7011 25 29.337 25 30V32.5H35V30C35 29.337 35.2634 28.7011 35.7322 28.2322C36.2011 27.7634 36.837 27.5 37.5 27.5C38.163 27.5 38.7989 27.7634 39.2678 28.2322C39.7366 28.7011 40 29.337 40 30V32.5H50C51.3261 32.5 52.5979 31.9732 53.5355 31.0355C54.4732 30.0979 55 28.8261 55 27.5V20C55 18.6739 54.4732 17.4021 53.5355 16.4645C52.5979 15.5268 51.3261 15 50 15Z" fill="url(#paint2_linear)"/>
                    <path d="M50 32.5H40V35C40 35.663 39.7366 36.2989 39.2678 36.7678C38.7989 37.2366 38.163 37.5 37.5 37.5C36.837 37.5 36.2011 37.2366 35.7322 36.7678C35.2634 36.2989 35 35.663 35 35V32.5H25V35C25 35.663 24.7366 36.2989 24.2678 36.7678C23.7989 37.2366 23.163 37.5 22.5 37.5C21.837 37.5 21.2011 37.2366 20.7322 36.7678C20.2634 36.2989 20 35.663 20 35V32.5H10C8.67392 32.5 7.40215 31.9732 6.46447 31.0355C5.52678 30.0979 5 28.8261 5 27.5V47.5C5 48.8261 5.52678 50.0979 6.46447 51.0355C7.40215 51.9732 8.67392 52.5 10 52.5H50C51.3261 52.5 52.5979 51.9732 53.5355 51.0355C54.4732 50.0979 55 48.8261 55 47.5V27.5C55 28.8261 54.4732 30.0979 53.5355 31.0355C52.5979 31.9732 51.3261 32.5 50 32.5Z" fill="url(#paint3_linear)"/>
                    <defs>
                    <linearGradient id="paint0_linear" x1="40" y1="11.25" x2="20" y2="11.25" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF5E3A"/>
                    <stop offset="1" stopColor="#FF9500"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="40" y1="32.5" x2="20" y2="32.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF5E3A"/>
                    <stop offset="1" stopColor="#FF9500"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear" x1="55" y1="23.75" x2="5" y2="23.75" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF5E3A"/>
                    <stop offset="1" stopColor="#FF9500"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear" x1="55" y1="40" x2="5" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF5E3A"/>
                    <stop offset="1" stopColor="#FF9500"/>
                    </linearGradient>
                    </defs>
                  </svg>
                </i>
                <span className={styles.listItemTitle}>Будем поддерживать</span>
              </li>
            </ul>
            
            <BannerConsultation  id="contact-banner"/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Integration