import React from "react";

//children is a special prop that allows you to pass JSX or components inside the opening and closing tags of a component
const Card = ({ children, bg = "bg-gray-100" }) => {
  return <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>;
};

export default Card;
