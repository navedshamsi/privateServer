import React,{useState} from 'react'
import "./Login.css"
import MsgApp from "../APP/MessageApp"

export default function Contacts(val) {
    
    const [values,valuesUpdate]=useState({})
    const password="wrong_password"
    const [disp,dispChanger]=useState(true)
    
    const  authorizer=()=>{
    values.username && values.password===password?dispChanger(false):alert("wrong pass or invalid name")
}
    return  disp?(
    <div className="loginDiv" >
       
        
        <div id="looginDiv">

<label className="label">NAME:
<input className="name inputs" placeholder="  name"
onChange={(e)=>  
 {
    valuesUpdate((oldVal)=>{var temp=oldVal;temp.username=e.target.value;return temp})
 }
}
></input>
</label>
<label className="label">PASSWORD:
<input className="password inputs" placeholder="  password" 
onChange={(e)=>
{
valuesUpdate((oldVal)=>{var temp=oldVal;temp.password=e.target.value;return temp})
}
}
></input>
</label>

 

<button id="login_signup_Button" onClick={authorizer}>Login</button>


</div>        
</div>

    ):<MsgApp name={values.username} />
}
