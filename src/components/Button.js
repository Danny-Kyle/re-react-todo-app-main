import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <button
      className="hover:text-sky-700 active:text-sky-700"
      onClick={() => onClick()}
    >
      {label}
    </button>
  );
};

export default Button;
