/* eslint-disable react/no-unknown-property */
import React from "react";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import styles from "./Button.module.css";

const Button = ({
  children,
  type = "button",
  variant = "solid",
  className = "",
  size = "",
  fontweight = "",
  to = "",
  disabled = false,
  isLoading = false,
  cypressfield = "",
  ...props
}) => {
  const classes = `btn ${styles.btn} ${className} ${styles[variant]} ${
    size ? styles[size] : ""
  } ${fontweight ? styles[fontweight] : ""}`;

  if (to && navigator.onLine === true) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      isLoading={isLoading}
      className={classes}
      data-cy={cypressfield}
      {...props}
    >
      {isLoading ? <ClipLoader color="#000000" size={25} /> : children}
    </button>
  );
};

export default Button;
