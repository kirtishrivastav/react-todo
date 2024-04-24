import { useState,} from 'react';
import './App.css';
import Inputs from './Components/Inputs';
import TodoList from './Components/TodoList';


function App() {
  const [listTodo,setListTodo]=useState([]);
  
    let addList=(input)=>{
      if(input!=="")
             setListTodo([...listTodo, input]);
    }

    
  return (
    <>
    <div className='main-container'>
      <div className='center-container'>
        <h1 className='main-heading'>ToDo List App</h1>
         <Inputs addList={addList}/>

       <h1 className='app-heading'>ToDos </h1>
       <hr />
        
       {listTodo.map((listItem,i)=>{
          return (
            <TodoList key={i} item={listItem}/>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default App;


