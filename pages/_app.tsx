import {Provider} from 'react-redux'
import {createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import AppRedux from './../redux/app-redux'

import 'bootstrap/dist/css/bootstrap.min.css'
import './../styles/styles.scss'




const  MyApp = ({ Component, pageProps }) =>{
  /*const reducer = (state=[{
    'text': 'lorem ipsau'
  }], action) => {
    return state
  }*/
  
  const store = createStore(AppRedux, composeWithDevTools())

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
  
}
export default MyApp