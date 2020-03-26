import React from 'react';

const NumberButton = (props) => {
  return (
    <button
      className='number'
      onClick={() => console.log('Num', props.number, 'clicked')}
      style={{backgroundColor: colors[props.status]}}
    >
      {props.number}
    </button>
  )
}

export default NumberButton

const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};