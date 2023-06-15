import "./index.css";
import { useState } from "react";

const Todo = ({ data }) => {
    const [nameOfClass, setnameOfClass] = useState();
    let status = ""; 
    
    function handleClassname() {
        if (data.completed)
        {
            setnameOfClass("todo_notcompleted");
        }
        else
        {
            setnameOfClass("todo_completed");
        }
    }

    const handleTodoCick = () => {
        handleClassname();
        data.completed = !data.completed;
    }
    
    if (data.completed.toString() === "true") {
        status = "Completed";
        return (
            <div className={nameOfClass || "todo_completed"} onClick={handleTodoCick}>
                <h4>Todo: {data.title}</h4>
                <h4>Status: {status} </h4>
            </div>
        );
    }
    else {
        status = "Not Completed";
        return (
            <div className={nameOfClass || "todo_notcompleted"} onClick={handleTodoCick}>
                <h4>Todo: {data.title}</h4>
                <h4>Status: {status} </h4>
            </div>
        );
    }
};

export default Todo;