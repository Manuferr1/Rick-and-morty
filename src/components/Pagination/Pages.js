import React from 'react'

export default function Pages({pageNumber, setpageNumber, results}) {
  let page = pageNumber;
  console.log(page);
  const prev = () => {
    if (page===1) return;   //para la funciónn para que no haya negativos 
    page = page - 1;
    setpageNumber(page);
  }
  const next = () => {
    if (page === 42) return; 
    page = page + 1; 
    setpageNumber(page)
  }

  return (
    <div className="my-3 d-flex justify-content-center gap-4"> 
      <button onClick={prev}  className='btn btn-outline-dark'>Prev</button>
      <button onClick={next} className='btn btn-outline-dark'>Next</button>
    </div>
  )
}
