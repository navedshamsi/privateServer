import React,{useState,useEffect} from "react"
import './messageApp.css';
import {IconButton} from '@material-ui/core'
import ContactsHeader from "../ContactsHeader"
import SendIcon from '@material-ui/icons/Send';
import io from "socket.io-client"
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from "axios"

let socket


  
 
function MessageApp(props) {
  var username=props.name

  setTimeout(() => {
      var objDiv = document.querySelector(".chatDiv");
     objDiv.scrollTop =objDiv.scrollHeight  
  }, 0)

const [messages,fetchMeassages]=useState([])
const [newMsg,sendNewMsg]=useState()

 const newMsgFunc= ()=>{
 const time=new Date().toLocaleString()
 
  if(newMsg)
  {
  socket.emit("send",{message:newMsg,name:username,time:time}) 
   document.querySelector(".Inp0t").value=""
   sendNewMsg("") 
  }    
   
 }
 


useEffect(()=>{
 
   axios.get("https://navedsapi.herokuapp.com").then((results)=>{
    var temp=results.data.map((result)=>
    [<div key={Math.random()*10000} className={result.name===username?"sentMsg":"recievedMsg"}>
    {result.name===username?"":<div className="theName">{result.name}</div>}
    <p>{result.message}</p><h4 className="h">{result.time}</h4>
     </div>])
    
     fetchMeassages(temp)
 
    })

  socket =io("https://nshmasiapis.herokuapp.com/")
  
  
  socket.on("join",(m)=>{toast.info("new user joined ")})

  socket.on("discon",(m)=>{toast.info("one user left")})

     socket.on("recieve",(result)=>{

      var temp=[<div key={Math.random()*10000} className={result.name===username?"sentMsg":"recievedMsg"}>
      {result.name===username?"":<div className="theName">{result.name}</div>}
      <p>{result.message}</p><h4 className="h">{result.time}</h4>
       </div>]
     fetchMeassages((r)=>[...r,temp]) 
     
     })

},[])

useEffect(()=>{
  toast.info("welcome "+username+" Please wait")
},[username])


  return (
  
    <div className="App">
      <><ToastContainer autoClose={3000}/></>
    <ContactsHeader username={username} src="https://mpng.subpng.com/20180331/yhe/kisspng-computer-programming-computer-icons-programmer-pro-coding-5abfdeb02a1e92.2753269715225238241725.jpg" />
     
      <div className="chatDiv">
      
      
         {messages}  

      <div className="msgInput">
      <input className="Inp0t" placeholder={"whats on your mind? "+username} 
      onChange={(e)=>{sendNewMsg(e.target.value)}}></input>

      <IconButton style={{color:"#11ECE5",width:"7vh",height:"6vh",padding:0,marginLeft:"2%"}}
      onClick={newMsgFunc}>
      <SendIcon style={{width:"50%",height:"100%"}} />
      </IconButton>

      </div>

     </div>
    
    </div>
  );
}

export default MessageApp;
