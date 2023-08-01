import { useState, useEffect } from 'react'

import styles from './Message.module.css'

export default function Message({ msg, type }) {
   const [ visible, setVisible ] = useState(false)

   useEffect(() => {
      if(!msg) {
         setVisible(false)
         return
      }

      setVisible(true)

      const timer = setTimeout(() => { 
         setVisible(false)
      }, 2000)

      return () => clearTimeout(timer)
   }, [ msg ])

   return(
      <>
         {visible  && (
            <div className={`${ styles.msg_container } ${ styles[ type ]}`}>
               <p>{ msg }</p>
            </div>
         )}
      </>
   )
}