import React from "react";
import Genders from "./Category/Genders";
import Species from "./Category/Species";
import Status from "./Category/Status";

export default function Filter() {
  return (
    <div className="col-2" style={styles.accordion}>
      <div className="text-center fw-bold mb-4 fs-4">Filter</div>
      <div className="accordion" id="accordionExample">
        <Genders />
        <Species />
        <Status />
      </div>
      <div>
        <a
          href="#"
          className="text-center text-decoration-underline text-primary pe-auto"
        >
          {" "}
          Clear Filter
        </a>{" "}
      </div>
    </div>
  );
}

const styles = {
  accordion: {
    paddingLeft: "2%",
    paddingRight: 0,
    //marginleft: "15px",
  }
};
