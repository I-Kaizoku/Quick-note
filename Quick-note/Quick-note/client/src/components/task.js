import React, { useEffect, useState } from 'react'
import "../components/task.css"
import axios from 'axios'
function Task (props){

  const [ ,setdivwidth]=useState("");
  const [divheight,setdivheight]=useState("");
  const [vis,setvis]=useState("");
  const [state,setstate]=useState("");

  const [updatetask,setUpdatetask]=useState("");
  const [subject,setSubject]=useState("");

  const [bgColour,setBgColour]=useState("")
  const [newtabvis,setnewtabvis]=useState("");
  const [pad,setPad]=useState("");

  const [starColour,setStarColour]=useState("white")

  function randomColourPicker(){
    const colours = ["#E9BA43","#1FB8DD","#1FDDC5","#1FDD6F","#DAA66F","#E07979","#DAF7A6","#21A279","#7393B3","#00FFFF","#C2B280","#F2D2BD","#FF69B4"]
    const randomIndex = Math.floor(Math.random() * colours.length);
    const randomElement = colours[randomIndex];
    return randomElement
  }

  var i=0;
  useEffect(()=>{
    setdivheight("200px");
    setdivwidth("25%");
    setvis("hidden");
    setstate("expand");
    setnewtabvis("hidden")
    if(props.Subject==="") setSubject("Personal Task")
    else setSubject(props.Subject)
    setUpdatetask(props.task)
    setPad("0px")
    setBgColour(randomColourPicker())
  },[])


  const taskUpdate=()=>{
    const day=new Date();
    var date1=day.toLocaleDateString().toString();
    axios.put("http://localhost:3001/updateTask/"+props.taskid,{task:updatetask,subject:subject,date:date1})
    .then(res=>{alert(res.data.message);window.location.reload()})
    .catch(err=>{console.log(err)})
  }

  const deletetask=()=>{
    if(window.confirm("you sure want to delete")){
    axios.post("http://localhost:3001/deletetask",{userid:props.taskid})
    .then(res=>{
      alert(res.data.message);
      window.location.reload()

    })
    .catch(err=>console.log(err))
  }
}
  return (
    <div style={{position:"relative"}}>
    <div className='total' style={{backgroundColor:bgColour}}>
        <label className='subject'>{
        props.Subject!==""?props.Subject:"personal task"
        }</label>
        <pre className='task'>{props.task}</pre>
        <label className='date'>{props.date}</label>
        <button className='btn' onClick={()=>{
          setnewtabvis("visible");
        }}><i class="fa-solid fa-pen"></i>
        </button>
        <button className='delete' onClick={deletetask}>
          <i class="fa-solid fa-trash"></i>
          </button>
          <button className='star' onClick={()=>{
            if (starColour==="white"){
              setStarColour("#FFEF00")
            }
            else{
              setStarColour("white")
            }
          }}><i class="fa-solid fa-star" style={{color:starColour}}></i></button>
    </div>

     <div className='background-blur' style={{visibility:newtabvis}}>     
    <div className="newtab" style={{visibility:newtabvis}}>
          <input type='text' id='subject' style={{backgroundColor:"white",boxShadow:"0px 0px 0px grey",height:"30px",color:"black",border:"1px solid grey"}} name='subject' value={subject} onChange={e=>{setSubject(e.target.value)}}/>
          <textarea id='updateTask' name='updateTask' value={updatetask} onChange={e=>{setUpdatetask(e.target.value)}}/>
          <div>
            <button onClick={taskUpdate}>update</button>
            <button onClick={()=>{setnewtabvis("hidden")}}>cancel</button>
          </div>
    </div>
    </div>
    </div>

  )
}

export default Task;