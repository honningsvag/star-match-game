import React from 'react';

const NumberButton = (props) => {
  return (
    <button className='number' onClick={() => console.log('Num', props.number, 'clicked')}>
      {props.number}
    </button>
  )
}

export default NumberButton
