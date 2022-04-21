import React, { Component } from 'react';
import {Button, TextField} from '../../node_modules/@material-ui/core'
import {Chatbox} from "./Chatbox.js";
import { Contact } from './Contact.js';

const divStyle = {
  display: "flex",
}

var encodeUserEmail = (userEmail) =>{
  return userEmail.replace(".", ",");
}

var decodeUserEmail = (userEmail) =>{
  return userEmail.replace(",", ".");
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
    let handle = this;
    let contact_history=[];
    let encoded_user_email = encodeUserEmail(_user.email);
    firebase.database().ref("chat_history/"+encoded_user_email).on("child_added", function(snapshot){
      contact_history.push(snapshot.val());
      handle.setState({chatHistory: contact_history})
    });

    this.state={
      user: _user,
    }
    // this.addNewChat=this.addNewChat.bind(this);
    
    // var ListRef = firebase.database().ref('com_list');
    // ListRef.on('child_added', function(snapshot){
    //     // console.log(snapshot.val());
    //     show_post(snapshot.val());
    // });
    

  }
  show_post(post_data){
    // total_post[total_post.length] = str_before_username + post_data.email + "</strong>" + post_data.data + str_after_content
    // document.getElementById('post_list').innerHTML = total_post.join('');
    // console.log(post_data);
  }
  handleKeydown(event){
    if(event.key==="Enter"){
      this.addNewChat(event.target.value);
    }
  }
  addNewChat(email){
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
  render() {
    const history = this.state.chatHistory;
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
            {history?.map((history_item)=>{
              return(
                <Contact
                  key={history_item.info.contact_email}
                  email={history_item.info.contact_email}
                />
              )
            })
            }

          </div>

          <Chatbox
            name="Stark"
          />
        </div>
      </div>
    );
  }
}
