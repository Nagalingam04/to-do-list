import React, { useState } from 'react'

const Todolist = () => {

  const [task,setTask] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleAddTask() {
    if (inputValue.trim() === '') {
      return;
    }
    setTask([...task, inputValue]);
    setInputValue('');
  }

  function handleDeleteTask(index) {

    const newTask = task.filter((_,i) => i !== index)
    setTask(newTask);
  }

  return (
    <div id="to-do"className='place-self-center text-black flex border-0 bg-blue-500 flex-col gap-10 border-0 rounded-xl'>
      <div className=''>
        <input value={inputValue} placeholder='Enter Tasks' onChange = {(e) => {setInputValue(e.target.value)}} id = 'text' type="text" className='border-0 rounded-xl w-60 color-grey-200 h-12 text-[#626262] bg-white outline-0 font-bold'/>
        <button id = "button" onClick = {() => {handleAddTask()}}className='bg-green-500 rounded-xl '>add</button>
      </div>
      <div>
        {task.length > 0 ? 
          <ul id = 'list'> 
          {
            task.map((item, index) => {
              return (
                <li key={index} id="tasks-list" className='flex flex-row justify-between'>
                  <p className='inline font-bold'>{item}</p>
                  <button id ="delete" onClick = {() => {handleDeleteTask(index)}}className='bg-red-700 text-white rounded-xl'>Delete</button>
                </li>
              )
            }) 
          }
          </ul>
        :
          <p className='text-black'>No tasks are enrolled</p>
        }
      </div>
    </div>
  )
}

export default Todolist