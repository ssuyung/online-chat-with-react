import React from "react";
// import default_image from "../img/default_user.png"

var encodeUserEmail = (userEmail) =>{
    return userEmail.replace(/\./g, ",");
}

var decodeUserEmail = (userEmail) =>{
    return userEmail.replace(/\./g, ".");
}
export class Contact extends React.Component{
    constructor(props){
        super(props);
        var handle=this;
        this.state={
            user_profile_url: "./src/img/default_user.png",
        }
        firebase.storage().ref().child("user_profile_image/"+encodeUserEmail(this.props.email)).getDownloadURL().then(function(url){
            handle.setState({
                user_profile_url: url,
            });
            // console.log(url);
        })
        .catch(function(error){
            // console.log(error.message);
        });
    }

    // componentDidUpdate(prevProps){
    //     if (this.props.email !== prevProps.email) {
    //         this.forceUpdate();
    //     }
    // 
    render(){
        
        return(
            <div className="contact" onClick={()=>this.props.onClick(this.props.email)}>
                <div>
                    <img className="pic" src={this.state.user_profile_url}></img>
                </div>
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