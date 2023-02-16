import React from 'react'
import "./Show.css"
import { useAlert } from "react-alert";
function Show(props) {
    
    const alert = useAlert()

    const { tasks, setTask } = props;
    const taskdelete = (i) => {
        const copytasks = [...tasks];
        copytasks.splice(i, 1);
        setTask(copytasks);
        alert.show('Task removed!')
    };

    let tasklist = <h2 className='h12'>No Tasks Found!</h2>;
    if (tasks.length > 0) {
        tasklist = tasks.map((task, index) => {
            return (
                <li className='li2' key={index}>
                    {task.title}
                    <span className='cross' onClick={() => taskdelete(index)}><i style={{color:"red"}} class="fa-solid fa-trash-can"></i></span>
                </li>
            );
        });
    }

    return <ol className='task'>{tasklist}</ol>;
};


export default Show