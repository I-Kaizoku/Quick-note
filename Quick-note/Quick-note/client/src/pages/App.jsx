import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import Task from '../components/task';
import { useRef } from 'react';
function App() {
  const ref = useRef(null);

  const [tasks,setTasks]= useState([]);
  const [inputTask,setInputTask]=useState("");
  const [subject,setSubject]=useState("");
  const [divvisibility,setDivvisibility]=useState("");
  const [divpos,setDivpos]=useState("");
  const [maindivpos,setMaindivpos]=useState("");

  useEffect(()=>{
    axios.get('http://localhost:3001/displaytask')
    .then(task=>{
      setTasks(task.data)
    })
    .catch(err=>console.log(err))

    setDivvisibility("hidden");
    setDivpos("absolute");
    setMaindivpos("absolute");
  },[])

  return (
    <div className="tasks-container">
      <div className='left'>
        <i class="fa-solid fa-bars"></i>
        <i class="fa-solid fa-user"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-calendar-days"></i>
        <i class="fa-solid fa-check"></i>
      </div>
      <div className='right'>
        <label >Quick Note</label>
        <div className='notes-holder'>
          <div>
            {
              
              tasks.map(task=>{
                return(
                  <Task task={task.task} taskid={task._id} Subject={task.subject} date={task.date}/>
                )
                
              })
              
            }
            </div>
        </div>
      </div>
      
      
      
      <div className='edit-container' style={{position:maindivpos}}>
        <a id="a" onClick={()=>{ref.current?.scrollIntoView({behavior: 'smooth'});}} >
          <div className='addtask' onClick={()=>{
          setDivvisibility("visible");
          setDivpos("relative");
          setMaindivpos("relative");
          
        }}>
          <button className='plus' >+</button>
        <label style={{color:"black"}}>Add task</label>
        </div>
        </a>
        <div className='background-blur' style={{visibility:divvisibility}}>
          <div id='input'  ref={ref} className='newtab' style={{visibility:divvisibility}}>
          <input placeholder='Subject' style={{backgroundColor:"white",boxShadow:"0px 0px 0px grey",height:"30px",color:"black",border:"1px solid grey"}} type='text' id='subject' name="subject" value={subject} onChange={event=>{setSubject(event.target.value)}}/>
          <textarea placeholder='Enter your task' className='updateTask' type='text' name='inputtask' value={inputTask} onChange={event=>{setInputTask(event.target.value); }}/>
          <div>
            <button style={{backgroundColor:"white",boxShadow:"0px 0px 5px grey",color:"black"}} onClick={async()=>{
              try {
              axios.post("http://localhost:3001/addtask",{task:inputTask,subject:subject})
                .then(res=>{
                  console.log(res.data.message)
                  window.location.reload()
                })
              } catch (error) {
                console.log(error)
              }
            }
            
            } id='btn'>save</button>
            <button style={{backgroundColor:"white",boxShadow:"0px 0px 5px grey",color:"black"}} onClick={()=>{
              setDivvisibility("hidden");
              setDivpos("absolute");
              setMaindivpos("absolute");
            }} id='btn'>cancel</button>
            </div>
          </div>
          </div>
      </div>


    </div>
  );
}

export default App;
