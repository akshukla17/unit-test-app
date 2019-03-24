import React, { Component } from "react";
import PropTypes from "prop-types";
class Headline extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { header, desc } = this.props;
    // const personalInfo = tempArr.map((person, index) => {
    //   return (
    //     <li key={index}>
    //       {person.fName}, {person.lName}
    //     </li>
    //   );
    // });
    return (
      <div data-test='headline-component'>
        <h1 data-test='header'>{header}</h1>
        <p data-test='desc'>
          <i>{desc}</i>
        </p>
        {/* <ul>
          <p data-test='personal-info'>{personalInfo}</p>
        </ul>{" "} */}
      </div>
    );
  }
}
Headline.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
  tempArr: PropTypes.arrayOf(
    PropTypes.shape({
      fName: PropTypes.string,
      lName: PropTypes.string,
      exp: PropTypes.number,
      onlineStatus: PropTypes.bool,
      email: PropTypes.string
    })
  )
};
export default Headline;
