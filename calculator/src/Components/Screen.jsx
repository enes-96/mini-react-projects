import React from "react";

const Screen = ({ value }) => {
  return (
    <input className=" p-4  text-4xl" type="text" value={value} readOnly />
  );
};

export default Screen;
