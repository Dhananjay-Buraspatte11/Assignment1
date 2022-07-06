import React from 'react'
// import Board from '../Board/Board'
import './Card.css'


  const Card = ({ boardid,card,deleteCard,moveForward,moveBackward }) => {

    const { cid, name } = card;

    return (
      <div className='card-data col-12'>
        <div>
          <p>{name}</p>
          <p onClick ={() => deleteCard(boardid,cid)}> X </p>

        </div>
      
        <div className='card_body col-2'>
          {/* <p onClick={() => deleteCard(boardid,cid)} >🏚️</p> */}
          <p onClick={()=> moveForward(boardid,cid)}>▶️</p>
          <p onClick={()=> moveBackward(boardid,cid)}>◀️</p>
        </div>

      </div>
    )
  }


export default Card;