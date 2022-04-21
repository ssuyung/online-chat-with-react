import React from "react";

export class Contact extends React.Component{
    constructor(props){
        super(props);

    }


    render(){
        return(
            <div className="contact">
                <div className="name">
                    {this.props.email}
                </div>
                <div className="message">
                    Hi, there!
                </div>
            </div>
        )
    }
}