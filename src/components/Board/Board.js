import React from 'react'
import './Board.css'
import Card from '../Card/Card'

const Board = ({ Board,deleteCard,moveForward,moveBackward }) => {
    return (
     <div className='board'>
        <div className='board-top'>
        
            <div className='nav'>{Board.title}</div>

            {
          Board.cards.map((ele) => {
            return (
              <Card  key={ele.cid} card={ele} boardid={Board.id} deleteCard={deleteCard} moveForward={moveForward} moveBackward={moveBackward}/>
                
            
            );
          }

          )
        }
        </div>
     </div>
    )
}

export default Board