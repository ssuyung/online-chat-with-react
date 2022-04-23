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
    }

    // componentDidUpdate(prevProps){
    //     if (this.props.email !== prevProps.email) {
    //         this.forceUpdate();
    //     }
    // 
    render(){
        // var user_profile_url;
        // firebase.storage().ref().child("user_profile_image/"+encodeUserEmail(this.props.email)).getDownloadURL().then(function(url){
        //     user_profile_url=url;
        //     console.log(url);
        // })
        // .catch(function(error){
        //     user_profile_url="./src/img/default_user.png";
        // });
        return(
            <div className="contact" onClick={()=>this.props.onClick(this.props.email)}>
                <div className="pic"></div>
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