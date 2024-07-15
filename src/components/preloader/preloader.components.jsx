import React from "react";
const Preloader = (props) => (
  <div id={props.load ? "preloader" : "preloader-none"}></div>
);

export default Preloader;
