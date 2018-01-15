import React from "react";
import PropTypes from "prop-types";

const BoardSquare = props =>
  <button className={`board-square square-value-${props.square}`} onClick={() => props.toggleLife(props.rowIndex, props.colIndex)} />


BoardSquare.prototypes = {
  square: PropTypes.number.isRequired,
  rowIndex: PropTypes.number.isRequired,
  colIndex: PropTypes.number.isRequired,
  toggleLife: PropTypes.func.isRequired
}

export default BoardSquare;