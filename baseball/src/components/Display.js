import React from 'react';

const Display = props => {
  return (
    <>
      <div>balls: {props.balls}&nbsp;|&nbsp; strikes: {props.strikes}</div>
    </>
  )
}

export default Display;