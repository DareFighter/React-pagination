import React from "react";

const Pagination = ({ data, pageHandler }) => {
  let pageNumbers = [];
  for (let i = 1; i < Math.ceil(data.length) / 10 + 1; i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <center>
        {pageNumbers.map((page) => (
          <div
            onClick={() => pageHandler(page)}
            className="button-page"
            style={{
              display: "inline-block",
              border: "1px solid black",
              padding: "10px",
              margin: "5px",
            }}
          >
            {page}
          </div>
        ))}
      </center>
    </div>
  );
};

export default Pagination;
