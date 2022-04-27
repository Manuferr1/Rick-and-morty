import React from "react";

export default function Search({ setSearch }) {
  return (
    <form className="d-flex justify-content-center my-3 gap-2">
      <input
        onChange={(e) => setSearch(e.target.value)}
        className="form-control"
        style={styles.input}
        type="text"
        aria-label="Search"
        placeholder="Search Character"
      />
      {/*Onchange: cuando la entrada cambia se activa*/}
      <button
        onClick={(e) => e.preventdefault}
        type="button"
        className="btn btn-outline-primary border-2"
      >
        {" "}
        🔍{" "}
      </button>
    </form>
  );
}

const styles = {
  input : {
    width: "30%",
    border: "10px",
    bordercolor: "blue",
    borderwidth: "5px",
    borderradius: "10px"
}
}
