import React from "react";

export default function Timer(props) {
  console.log(props.time);
  return (
    <>
      {/* This span will display minutes */}
      <span>{("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}</span>
      &nbsp;:&nbsp;
      {/* This span will display seconds */}
      <span>{("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}</span>
      &nbsp;:&nbsp;
      {/* This span will display milliseconds */}
      <span>{("0" + Math.floor((props.time / 10) % 100)).slice(-2)}</span>
    </>
  );
}
