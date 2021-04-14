import React from 'react';
function Square(props) {
  //return button call of every index value
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
  export default Square;