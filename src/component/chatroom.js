import React, { Component } from 'react';
import {Button, TextField} from '../../node_modules/@material-ui/core'
import {Chatbox} from "./Chatbox.js";

const divStyle = {
  display: "flex",
}

export class Chatroom extends Component {
  constructor(props) {
    super(props);
    var ListRef = firebase.database().ref('com_list');
    ListRef.on('child_added', function(snapshot){
        // console.log(snapshot.val());
        show_post(snapshot.val());
    });
    

  }
  show_post(post_data){
    // total_post[total_post.length] = str_before_username + post_data.email + "</strong>" + post_data.data + str_after_content
    // document.getElementById('post_list').innerHTML = total_post.join('');
    console.log(post_data);
  }
  handleKeydown(event){
    if(event.key==="Enter"){
      // console.log("enter");
      // console.log(event.target.value);
      this.addNewChat(event.target.value);
    }
  }
  addNewChat(email){
    console.log(email);
  }
  render() {
    return (
      <div>
        <div className="center">
          <div className="contacts">
            <i className="fas fa-bars fa-2x"></i>
            <div style={divStyle}>
            {/* <Button>New</Button> */}
            <TextField id="new_chat" variant="outlined" label="New Conversation" onKeyDown={(event)=>{this.handleKeydown(event)}}></TextField>
              <h2>
                  Contacts
              </h2>
            
            </div>
            <div className="contact">
                <div className="pic rogers"></div>
                <div className="badge">
                14
                </div>
                <div className="name">
                Steve Rogers
                </div>
                <div className="message">
                That is America's ass 🇺🇸🍑
                </div>
            </div>

          </div>

          <Chatbox
            name="Stark"
          />
        </div>
      </div>
    );
  }
}
