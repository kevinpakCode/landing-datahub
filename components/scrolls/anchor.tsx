import {useState, useEffect, useRef} from 'react'
import Link from 'next/link'

const Anchor = (props) => {
  const [doScroll, setDoScroll] = useState(false)
  const [idElem, setIdElem] = useState(null)
  const link = useRef(null)

  /*
  *
  */
  const scrollDocument = (event) => {
    event.preventDefault()

    const elem = link.current
    const path = elem.getAttribute('href')
    const elemId = path.replace(/[#\/]/g, '')
    //setDoScroll(!doScroll)
    setIdElem(elemId)  
  }

 
  /*
  *
  */
  useEffect(()=> {
    if(idElem) {
      const elem = document.getElementById(idElem)
      const elemPosition = elem.offsetTop
      window.scrollTo({
        top: elemPosition,
        behavior: "smooth"
      });
    }
    
  }, [idElem])

  const Href:string = props.href ?? '#'
  const ClassName:string = props.className ?? ''

  return (
    <>
      <Link  href={Href} >
        <a  className={ClassName} ref={link}  onClick={()=> scrollDocument(event)}>{props.children}</a>
      </Link>
    </>
  )
}

export default Anchor