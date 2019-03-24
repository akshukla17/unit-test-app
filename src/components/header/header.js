import React from "react";
import logo from "../../logo.svg";
const header = () => {
  return (
    <header>
      <div data-test='wrap'>
        <div data-test='logo' style={{ float: "left" }}>
          <img src={logo} alt='logo' width='100px' height='100px' />
        </div>
      </div>
    </header>
  );
};
export default header;
