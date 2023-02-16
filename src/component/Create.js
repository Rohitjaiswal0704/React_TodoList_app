import React, { useState } from 'react';
import { useAlert } from 'react-alert'
import "./Create.css"

function Create(props) {
  const alert = useAlert()

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    // const [disable, setDisable] = useState(0);
    const {tasks, setTask} = props;

    const submitHandler = (e) => {
        e.preventDefault();
        const Task = { title, desc };

        if(!title ){
          alert.info("No input field must empty!")
          return
        }

        setTask([...tasks, Task]);
        alert.success("Task Created!");
        setTitle("");
        setDesc("");
        console.log({ title, desc });
        // setDisable(true) -----
      };
  return (
    <div className="form1" >
         <form onSubmit={submitHandler} className="form11">
        <input
        className='input11'
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* <input
        className='input11'
          type="text"
          placeholder="Desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        /> */}
        <button className='btn1'>Submit</button>  
        {/* disabled={disable} */} -----
      </form>    

    </div>
  )
}

export default Create