import React from 'react';
import {Button, TextField} from '../../node_modules/@material-ui/core/'
export class Chatbox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user: firebase.auth().currentUser,
        }
        // console.log(this.state.user.email);
        // console.log(this.state.user.name);
    }

    handleKeyDown(event){
        if(event.key==="Enter"){
            console.log("enter");
            // firebase.database().ref('com_list').push(post_data);
            // post_txt.value = "";
        }
    }
    render(){
        return(
            <div className="chat">
                <div className="contact bar">
                    <div className="pic stark"></div>
                    <div className="name">
                    {this.props.name}
                    </div>
                    <div className="seen">
                    Today at 12:56
                    </div>
                </div>
                <div className="messages" id="chat">
                    <div className="time">
                    Today at 11:41
                    </div>
                    <div className="message parker">
                    Hey, man! What's up, Mr Stark? 👋
                    </div>
                    <div className="message stark">
                    Kid, where'd you come from? 
                    </div>
                    <div className="message parker">
                    Field trip! 🤣
                    </div>
                    <div className="message parker">
                    Uh, what is this guy's problem, Mr. Stark? 🤔
                    </div>
                    <div className="message stark">
                    Uh, he's from space, he came here to steal a necklace from a wizard.
                    </div>
                    <div className="message stark">
                    <div className="typing typing-1"></div>
                    <div className="typing typing-2"></div>
                    <div className="typing typing-3"></div>
                    </div>
                </div>
                <div className="input">
                    <i className="fas fa-camera"></i><i className="far fa-laugh-beam"></i><input onKeyDown={(event)=>{this.handleKeyDown(event)}} placeholder="Type your message here!" type="text" /><i className="fas fa-microphone"></i>
                </div>
            </div>
        )
    }
}