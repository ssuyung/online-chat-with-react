import React from "react";

export class Message extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.fromMe);
        console.log(this.props.message);
    }
    render(){
        return(
            <div className={"message "+ (this.props.fromMe? "parker":"stark")}>
                {this.props.message}
            </div>
        )
    }
}