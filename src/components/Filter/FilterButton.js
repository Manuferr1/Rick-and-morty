import React from "react";

const FilterButton = ({ index, items, setPageNumber, display }) => {
  return (
    <div>
      <input
        onClick={() => {
          setPageNumber(1);
          display(items);
        }}
        type="form-check"
        className="btn-check"
        id={`${items}-${index}`}
        autocomplete="off"
      />
      <label className="btn btn-outline-primary p-2" for={`${items}-${index}`}>
        {items}
      </label>
    </div>
  );
};

export default FilterButton;

//id and for must be equal to get the checkbutton

const styles = {
  button: {
    padding: "100px",
    backgroundcolor: "blue",
  },
};
