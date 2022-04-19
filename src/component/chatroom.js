import React, { useReducer } from "react";

export class Chatroom extends React.Component {
    constructor(props) {
        super(props);
        console.log("This is chatroom");
    }


    render(){
        return(
            <h1>Welcome to chatroom</h1>
        );
    }
}
