import React from 'react';

const Dashboard = props => {
  
  return (
    <>
    <button onClick={props.strike}>Strike</button>
    <button onClick={props.ball}>Ball</button>
    <button >Hit</button>
    <button >Foul</button>
    </>
  )
}

export default Dashboard;
