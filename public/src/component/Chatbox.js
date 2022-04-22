import React from 'react';
import {Button, TextField} from '../../node_modules/@material-ui/core/'
import { Message } from './Message';

var encodeUserEmail = (userEmail) =>{
    if(userEmail) return userEmail.replace(/\./g, ",");
    else return "";
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
        var notification = new Notification("Hi there!");
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
            var notification = new Notification("Hi there!");
        }
        });
    }

    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them anymore.
}
export class Chatbox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user: firebase.auth().currentUser,
        }
        // var encoded_sender_email = encodeUserEmail(this.state.user.email);
        // var encoded_receiver_email = encodeUserEmail(this.props.email);
        // var messageHistory = [];
        // var handle = this;
        // console.log(encoded_receiver_email);
        // firebase.database().ref("chat_history/"+encoded_sender_email+"/"+encoded_receiver_email+"/messages").on("child_added", function(snapshot){
        //     if(snapshot.val()){
        //         messageHistory.push(snapshot.val());
        //         console.log(snapshot.val());
        //         handle.setState({message_history: messageHistory});
        //     }
        // })
        // console.log()
        // console.log(this.state.user.email);
        // console.log(this.state.user.name);
    }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.email!==this.props.email){
            var encoded_sender_email = encodeUserEmail(this.state.user.email);
            var encoded_receiver_email = encodeUserEmail(this.props.email);
            var messageHistory = [];
            var handle = this;
            //clearing message_history to prevent not updating when opening chat with no messages
            handle.setState({message_history: messageHistory});
            firebase.database().ref("chat_history/"+encoded_sender_email+"/"+encoded_receiver_email+"/messages").on("child_added", function(snapshot){
                if(snapshot.val()){
                    messageHistory.push(snapshot.val());
                    // console.log(snapshot.val());
                    // notifyMe();
                    handle.setState({message_history: messageHistory});
                }
            })
            console.log("reload message");
            // this.forceUpdate();
        }
    }
    handleKeyDown(event){
        if(event.key==="Enter"){
            console.log("enter");
            console.log(event.target.value);
            var message = {
                fromMe: true,
                message: event.target.value,
            }
            var encoded_sender_email = encodeUserEmail(this.state.user.email);
            var encoded_receiver_email = encodeUserEmail(this.props.email);
            var database_ref = firebase.database();
            database_ref.ref("chat_history/"+encoded_sender_email+"/"+encoded_receiver_email+"/messages").push(message);
            var message = {
                fromMe: false,
                message: event.target.value,
            }
            database_ref.ref("chat_history/"+encoded_receiver_email+"/"+encoded_sender_email+"/messages").push(message);
            event.target.value="";
        }
    }
    render(){
        return(
            <div className="chat">
                <div className="contact bar">
                    <div className="pic stark"></div>
                    <div className="name">
                    {this.props.email}
                    </div>
                    <div className="seen">
                    Today at 12:56
                    </div>
                </div>
                <div className="messages" id="chat">
                    <div className="time">
                    Today at 11:41
                    </div>
                    
                    {this.state.message_history?.map((msg, index)=>{
                        return(
                            <Message         
                                key={index}
                                fromMe={msg.fromMe}
                                message={msg.message}
                            />
                        )
                    })
                    }
                </div>
                <div className="input">
                    <i className="fas fa-camera"></i><i className="far fa-laugh-beam"></i><input onKeyDown={(event)=>{this.handleKeyDown(event)}} placeholder="Type your message here!" type="text" /><i className="fas fa-microphone"></i>
                </div>
            </div>
        )
    }
}