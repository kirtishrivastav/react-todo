import { useState } from "react"
import axios from 'axios'


function Inputs(Props) {

    const[input, setinput]= useState('');

    const EnterPress=(e)=>{
      if(e.keyCode === 13){
         Props.addList(input)
         setinput("")
      }
    }
     
    //axios post req function
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post("input/", { input: input })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error('Error adding todo:', error);
        });
    };
    
  return (
   
     <div className="input-container">
      <input type="text"  className="input-box-todo" placeholder="Enter your todo"
      value={input}
      onChange={e=>{
        setinput(e.target.value)

      }}   
      onKeyDown={EnterPress}
       />
      <button className="add-btn"  onClick={ ()=>{
        Props.addList(input)
        setinput("")
        handleSubmit();
      }}>Add Task</button>
     
     </div>
   
  )
}

export default Inputs
