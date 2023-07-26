import React from "react";

const Card = ({ text, ...props }) => {
  return (
    <>
      <div className="max-w-sm shadow-md shadow-white p-2 ">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum dummy text of the printing and typesetting
          industry
        </p>
      </div>
    </>
  );
};

export default Card;
