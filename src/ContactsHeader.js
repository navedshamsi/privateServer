import React from 'react'
import "./chatsHeader.css"
import { IconButton,Avatar } from '@material-ui/core'
 function ContactsHeader(props) {
    return (
        <div className="chatsheader">
          <IconButton style={{width:"8vh",height:"80%"}}><Avatar src={props.src}/></IconButton> 
          <p >Welcome to NS's server, Mr. {props.username}</p>
        </div>
    )
}

export default ContactsHeader