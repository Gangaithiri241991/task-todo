import {useState} from "react";
export default function Todo(){
    const [todos,setTodos]=useState([]);
    const [todo,setTodo]=useState("");
    
    
    
    function handleTodo(){

    let todosCopy=[...todos];
    todosCopy.push(todo);
    setTodos(todosCopy);


    }
    
    function handleInput(e){
        setTodo(e.target.value);

    }
    
    
    return <div id="todo-form-container"> 
    <div id="form-header">
    <input id="todo" placeholder="enter the task" onChange={handleInput}/><br/><br/>
<button onClick={handleTodo}>Add Task</button>




    </div>
    <div id="form-body">
        <ul>
            {todos.map((t,index)=>(
                <li  id="a1" key={`todo-list-item-${index}`}> {t}</li>

            ))}

        </ul>
    </div>
</div>




}
