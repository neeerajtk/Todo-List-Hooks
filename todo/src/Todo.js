import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
function Todo({task,completed}){
    return (
        <ListItem>
        <Checkbox tabIndex={-1} checked={completed}/>
        <ListItemText>
            {task}
        </ListItemText>
    </ListItem>
    );
}

export default Todo;