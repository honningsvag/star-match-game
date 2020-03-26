import React from 'react'

const PlayAgain = (props) => {
  return (
    <div className='game-done' onClick={props.onClick}>
      <button>Play Again</button>      
    </div>
  )
}

export default PlayAgain
