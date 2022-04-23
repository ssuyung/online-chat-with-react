import React from "react";
// import default_image from "../img/default_user.png"
export class Contact extends React.Component{
    constructor(props){
        super(props);
    }

    // componentDidUpdate(prevProps){
    //     if (this.props.email !== prevProps.email) {
    //         this.forceUpdate();
    //     }
    // 
    render(){
        return(
            <div className="contact" onClick={()=>this.props.onClick(this.props.email)}>
                <div className="pic" src="./src/img/default_user.png"></div>
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