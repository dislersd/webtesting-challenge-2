import React from 'react';

const Display = props => {
  return (
    <>
      <div>balls: {props.balls}</div> 
      <div>strikes: {props.strikes}</div>
    </>
  )
}

export default Display;