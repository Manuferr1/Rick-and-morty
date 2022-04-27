import React from "react";

const FilterButton = ({ name, index, items }) => {
  return (
    <div>
      <input
        type="checkbox"
        className="btn-check"
        id={`${name}-${index}`}
        autocomplete="off"
      />
      <label className="btn btn-outline-primary p-2" for={`${name}-${index}`}>
        {items}
      </label>
    </div>
  );
};

export default FilterButton;

//id and for must be equal to get the checkbutton

const styles = {
  button : {
    padding: "100px",
    backgroundcolor: "blue"
  }
}