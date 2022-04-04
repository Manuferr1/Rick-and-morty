import React from 'react'; 
import ReactPaginate from 'react-paginate';


const Pages = ({info, pageNumber, setpageNumber}) => {
  return (
    <ReactPaginate
      className='justify-content-center pagination'  //Pagination lo pasa a row (bootstrap) 
      pageCount={info?.pages}
      pageRangeDisplayed={3}
      previousLabel="Prev"
      nextLabel="Next"
      breakLabel="..."
      initialPage={1}
      forcePage={pageNumber}
      previousClassName="btn btn-secondary "
      nextClassName="btn btn-secondary"
      pageLinkClassName="btn btn-secondary"
      pageClassName='page-link'
      activeClassName='active'
      onPageChange={(e) =>{
        setpageNumber(e.selected + 1);  //empieza desde 0
        console.log(e.selected)}}


     />
    
  )
}



export default Pages


 