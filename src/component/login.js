import React, { useReducer } from "react";


export class Login extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props.isLoggedIn);
        this.state = {
            isLoggedIn: false,
        };
        // console.log(this.state.isLoggedIn);
    }

    signIn(){
        console.log("signing in");
        var email = document.getElementById("inputEmail").value,
            password = document.getElementById("inputPassword").value;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) =>{
            var user = userCredential.user;
            console.log("User "+ user.email + " is signed in");
            this.setState({isLoggedIn: true});
            location.replace("/#/chatroom");
        })
        .catch((error) =>{
            var errorCode = error.code;
            console.log(error.message);
            alert(error.message);
        })

    }
    signUp(){
        console.log("Signing up");
        var email = document.getElementById("inputEmail").value,
            password = document.getElementById("inputPassword").value;
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential)=>{
            var user = userCredential.user;
            // console.log(user);
            // console.log(user.email);
            console.log("User "+user.email+" is signed up");
        })
        .catch((error)=>{
            var errorCode = error.code;
            console.log(error.message);
        });
    }
    signInWithGoogle(){
        console.log("Siginin in with Google");
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;
            console.log("User "+user.email+" is signed in with Google");
            this.setState({isLoggedIn: true});
            location.replace("/#/chatroom");
        })
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.Message;
            var email = error.email;
            var credential = error.credential;
            console.log(errorMessage);
        })
    }
    render(){
        return(
            <div className="text-center">
                <h1>Hello there!</h1>
                { true && <p>hello</p>

                }
                { !this.state.isLoggedIn &&
                <div className="form-signin">
                    <img className="mb-4" src="./src/img/pic2-01.png" alt="" height="108"></img>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in/register</h1>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus></input>
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required></input>
                    <div className="checkbox mb-3">
                        
                        <input type="checkbox" id="remember" value="remember-me"></input>
                        <label htmlFor="remember">remember me</label>
                    
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" id="btnLogin" onClick={()=>this.signIn()}>Sign in</button>
                    <button className="btn btn-lg btn-info btn-block" id="btngoogle" onClick={()=>this.signInWithGoogle()}>Sign in with Google</button>
                    <button className="btn btn-lg btn-secondary btn-block" id="btnSignUp" onClick={()=>this.signUp()}>New account</button>
                </div>
                }

            </div>
        );
    }
}
