import React from "react";
import PropTypes from "prop-types";

const BoardSquare = props =>
  <button className="board-square" onClick={() => props.toggleLife(props.rowIndex, props.colIndex)}>
    {props.square}
  </button>


BoardSquare.prototypes = {
  square: PropTypes.number.isRequired,
  rowIndex: PropTypes.number.isRequired,
  colIndex: PropTypes.number.isRequired,
  toggleLife: PropTypes.func.isRequired
}

export default BoardSquare;