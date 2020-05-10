import React from "react";
function TodoList(props){
    return(
    <div>
        {props.todos.map(todo=>(
            <li>{todo.task}</li>
        ))}
    </div>
    );
}
export default TodoList;