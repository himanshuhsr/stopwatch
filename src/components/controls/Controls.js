import React from "react";

export default function ControlButton(props) {
  return (
    <div>
      {props.active ? (
        <div>
          <button onClick={props.handleReset}>Reset</button>&emsp;
          <button onClick={props.handlePauseRequest}>
            {props.isPaused ? "Resume" : "Pause"}
          </button>
        </div>
      ) : (
        <button onClick={props.handleStart}>Start</button>
      )}
    </div>
  );
}
