// import uuidv4 from 'uuid';
import { useState } from 'react';
import { v4 } from 'uuid';


import './App.css';
import Board from './components/Board/Board';
const intialTask = [
  {
    id: 1,
    title: 'Backlog',
    cards: [
      { name: 'tasks 1' , stage: 0, cid:v4()},
      { name: 'tasks 2', stage: 0,  cid:v4()},
    ],
  },
  {
    id: 2,
    title: 'Todo',
    cards: [],
  },
  {
    id: 3,
    title: 'InProgress',
    cards: [],
  },
  {
    id: 4,
    title: 'Done',
    cards: [],
  }
]


function App() {
   const [task, setTask] = useState("")
  const [newTask, setNewTask] = useState(intialTask);

  const changeHandler = (event) =>{
    setTask(event.target.value);
  }
  
  
  const addCard=()=>{
    const tempBoards = [...newTask];
  
    tempBoards[0].cards.push({
      cid: v4(),
      name: task,
      stage: 0
    })
  
    // setBoards(tempBoards);
    setNewTask(tempBoards);
    setTask("");
  }




 const deleteCard=(aid,cid)=>{
  const tempBoards=[...newTask];
  const aIndex = tempBoards.findIndex((item)=>item.id===aid)
  
  const cards = tempBoards[aIndex].cards;
  const cIndex = cards.findIndex((item)=> item.id ===cid)
 
  cards.splice(cIndex,1);
  setNewTask(tempBoards)
 }

 const moveForward=(aid,cid)=>{
const board_id= aid+1;
if (board_id<=3) {
  const tempBoards=[...newTask];
  const cards=tempBoards[aid].cards;

  const cardIndex = cards.findIndex((item)=>item.id===cid);
    const deleteCard=cards[cardIndex];
    cards.splice(cardIndex,1);
    tempBoards[board_id].cards.push(deleteCard);
    setNewTask(tempBoards);
}
else{
  return;
}
 }



 const moveBackward=(aid,cid)=>{
  const board_id= aid-1;
  if (board_id>=0) {
    const tempBoards=[...newTask];
    const cards=tempBoards[aid].cards;
  
    const cardIndex = cards.findIndex((item)=>item.id===cid);

      const deleteCard=cards[cardIndex];
      cards.splice(cardIndex,1);
      tempBoards[board_id].cards.push(deleteCard);
      setNewTask(tempBoards);
  }
  else{
    return;
  }
   }

  return (
    <>



      <div className='kanban-board'>
        <h1>Kanban Board</h1>
      </div>

      <div className='box1'>
        <input type="text" name="" id="text1" placeholder='Please Name Backlog...' onChange={changeHandler} value={task} />
        <sub><button type='submit' onClick={addCard}>Add Backlog</button></sub>
      </div>

      <div>
        {
          intialTask.map((ele) => {
            return (
              <Board  key={ele.id} Board={ele} deleteCard={deleteCard} moveForward={moveForward} moveBackward={moveBackward}/>
          
            
            );
          }
         
          )

        }
        
      </div>

    </>
  );
}

export default App;
