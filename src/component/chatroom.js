import React, { Component } from 'react';
import {Button, TextField} from '../../node_modules/@material-ui/core'
import {Chatbox} from "./Chatbox.js";
import { Contact } from './Contact.js';

const divStyle = {
  display: "flex",
}

var encodeUserEmail = (userEmail) =>{
  return userEmail.replace(/\./g, ",");
}

var decodeUserEmail = (userEmail) =>{
  return userEmail.replace(/\./g, ".");
}

function notifyMe() {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
      // If it's okay let's create a notification
      var notification = new Notification("You have a new conversation!");
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
          var notification = new Notification("You have a new conversation!");
      }
      });
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them anymore.
}

export class Chatroom extends Component {
  constructor(props) {
    super(props);

    let _user = firebase.auth().currentUser;
    if(_user) console.log("you are now logged in as " +_user.email);
    else {
      console.log("you are not logged in");
      location.replace("./");
    }
    this.state={
      user: _user,
      construct_timestamp: Date.now(),
    }
    let handle = this;
    let contact_history=[];
    let encoded_user_email = encodeUserEmail(_user.email);
    firebase.database().ref("chat_history/"+encoded_user_email).on("child_added", function(snapshot){
      contact_history.push(snapshot.val());
      handle.setState({
        chatHistory: contact_history,
        cur_chat_email: snapshot.val().info.contact_email,
      })
      console.log("cur_chat_email: " + handle.state.cur_chat_email);
      if(snapshot.val().info.timestamp){
        if(snapshot.val().info.timestamp > handle.state.construct_timestamp){
          // console.log("new chat");
          notifyMe();
        }
      }
      handle.forceUpdate();
    });
    console.log("user_uid: " +this.state.user.uid);
   }
  handleKeydown(event){
    if(event.key==="Enter"){
      this.addNewChat(event.target.value);
    }
  }
  addNewChat(email){
    // console.log(Date.now());
    var database_ref = firebase.database();
    var handle = this;
    database_ref.ref("user_list").orderByChild("email").equalTo(email).once("value").then(function(snapshot){
      //if the user exists
      if(snapshot.val()){
        //firebase database doesn't allow path with '.', so replace '.' with ','
        var encoded_user_email = encodeUserEmail(handle.state.user.email);
        var encoded_contact_email = encodeUserEmail(email);
        database_ref.ref("chat_history/"+encoded_user_email+'/'+encoded_contact_email+'/info').orderByChild("exist").equalTo(true).once("value").then(function(s){
          if(s.val()){
            alert("Chat already exists");
          }
          else{
            firebase.database().ref('chat_history/'+encoded_user_email+'/'+encoded_contact_email+"/info").set({
              contact_email: email,
              sender_email: handle.state.user.email,
              timestamp: Date.now(),
              exist: true,
            });
            firebase.database().ref('chat_history/'+encoded_contact_email+'/'+encoded_user_email+"/info").set({
              contact_email: handle.state.user.email,
              sender_email: email,
              timestamp: Date.now(),
              exist: true,
            });
          }
        })
      } 
      else{
        alert("This user does not exist, check for spelling or spaces");
      } 
    })
  }
  handleChangeChat(email){
    console.log("currenct chat changed to "+email);
    this.setState({cur_chat_email: email});
  }
  onFileChange = event => { 
    firebase.storage().ref().child("user_profile_image/"+encodeUserEmail(firebase.auth().currentUser.email)).put(event.target.files[0])
    .then((snapshot)=>{
      console.log("uploaded "+event.target.files[0]);
    })
    // Update the state 
    // this.setState({ selectedFile: event.target.files[0] }); 
  }; 

  render() {
    const history = this.state.chatHistory;
    
    return (
      <div>
        {/* <div style={{height: "100px"}}>
          <Button>profile photo</Button>
        </div> */}
        <div className="center">
          <div className="contacts">
            <i className="fas fa-bars fa-2x"></i>
            <div style={divStyle}>
            <TextField id="new_chat" variant="outlined" label="New Conversation" onKeyDown={(event)=>{this.handleKeydown(event)}}></TextField>
              {/* <h2>
                  Contacts
              </h2> */}
            <div> 
                <input type="file" onChange={this.onFileChange} /> 
            </div> 
            </div>
            {history?.map((history_item)=>{
              return(
                <Contact
                  key={history_item.info.contact_email}
                  email={history_item.info.contact_email}
                  onClick={this.handleChangeChat.bind(this)}
                />
              )
            })
            }
          </div>

          <Chatbox
            email={this.state.cur_chat_email}
          />
          
        </div>
      </div>
    );
  }
}
