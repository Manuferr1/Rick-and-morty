import React from 'react'
import styles from "./Search.scss"

export default function Search({setSearch}) { 

  return (
    <form className='d-flex justify-content-center my-3 gap-1'>  
      <input onChange={(e) => setSearch(e.target.value)} className={styles.input} type="text" aria-label="Buscador" placeholder="Search Character" />  {/*Onchange: cuando la entrada cambia se activa*/}
      <button onClick={(e)=> e.preventdefault} type="button" className="btn btn-outline-primary"> 🔍 </button>
    </form>
  )
}
