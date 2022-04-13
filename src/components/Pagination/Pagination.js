import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setpageNumber }) => {
  return (
    <ReactPaginate
      className="justify-content-center pagination" //Pagination lo pasa a row (bootstrap)
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
        setpageNumber(e.selected + 1); //empieza desde 0
        console.log(e.selected);
        console.log(e);
      }}
    />
  );
};

export default Pagination;
