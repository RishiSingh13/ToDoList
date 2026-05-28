import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [Todolist,setTodolist]=useState([]);
  let saveToDoList = (event) => {
    event.preventDefault();
   let todoname=event.target.task.value;
   if(!Todolist.includes(todoname)){
    let finalist=[...Todolist,todoname]
    setTodolist(finalist)
   }
   else{
    alert("TASK ALREADY EXISTS");
   }
  }
  let list=Todolist.map((item,index)=>{
    return(
      <Todo item={item} key={index} indexnumber={index} Todolist={Todolist}  setTodolist={setTodolist}/>
    )
  })

  return (
    <div className="App">
     <h1>
       Todo List
     </h1>
     <form onSubmit={saveToDoList}>
      <input type="text" placeholder='Enter a task' name="task" />
      <button >Add Task</button>
     </form>
     <div className="outerdiv">
      <ul>
        {list}
      </ul>
     </div>
    </div>
  );
}

export default App;
function Todo (props){
   let removeItem = (index) => {
    
    let finalData = props.Todolist.filter((v, i) => i !== index)
    return(
    props.setTodolist(finalData)
)  }
let [Line,setLine]=useState(false)
let line=()=>{
  setLine(!Line)
}
return(
  
<li className={Line?"line":""} onClick={line}>{props.item}<span onClick={() =>removeItem(props.indexnumber)}>&times;</span></li>


)

}
