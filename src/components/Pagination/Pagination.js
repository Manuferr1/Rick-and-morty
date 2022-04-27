import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  return (
    <ReactPaginate
      className="justify-content-center pagination gap-1" //Pagination lo pasa a row (bootstrap)
      pageCount={info?.pages}
      pageRangeDisplayed={2}
      previousLabel="Prev"
      nextLabel="Next"
      breakLabel="..."
      breakClassName="text-primary"
      initialPage={1}
      previousClassName="btn btn-outline-primary "
      nextClassName="btn btn-outline-primary "
      pageLinkClassName="btn btn-outline-primary"
      activeClassName="active"
      onPageChange={(e) => {
        setPageNumber(e.selected + 1); //empieza desde 0
        console.log(e.selected);
        console.log(e);
      }}
    />
  );
};

export default Pagination;
