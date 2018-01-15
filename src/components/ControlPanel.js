import React from "react";
import PropTypes from "prop-types";
import { Button } from 'react-bootstrap';

const ControlPanel = props =>
  <div className="control-panel row">
    <div className="col-xs-3">
      { props.isRunning ?
        <Button bsClass="btn control-btn" onClick={props.pauseGame}>Pause</Button>
        :
        <Button bsClass="btn control-btn" onClick={props.runGame}>Run</Button>
      }
    </div>
    <div className="col-xs-3">
      <Button bsClass="btn control-btn" onClick={props.clearBoard}>Clear</Button>
    </div>
    <div className="generation-label col-xs-6">
      Generation: {props.generation}
    </div>
  </div>

ControlPanel.proptypes = {
  isRunning: PropTypes.bool.isRequired,
  runGame: PropTypes.func.isRequired,
  pauseGame: PropTypes.func.isRequired,
  clearBoard: PropTypes.func.isRequired,
  generation: PropTypes.number.isRequired
}

export default ControlPanel;