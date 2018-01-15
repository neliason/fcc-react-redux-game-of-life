import React from "react";
import PropTypes from "prop-types";

const Header = props =>
  <h1>{props.title}</h1>

Header.proptypes = {
  title: PropTypes.string.isRequired
}

export default Header;