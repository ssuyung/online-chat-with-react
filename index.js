import React from "react";

export class Example extends React.Component {
    render(){
        return(
            <div class="text-center">
                <h1>Hello World!</h1>
                {/* <nav class="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
                    <a class="navbar-brand" href="#">Simple Forum</a>
                    <button class="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Account</a>
                                <div id="dynamic-menu" class="dropdown-menu" aria-labelledby="dropdown01">
                                    <a class="dropdown-item" href="signin.html">Login</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav> */}
                
                <div className="form-signin">
                    <img className="mb-4" src="img/pic2-01.png" alt="" height="108"></img>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in/register</h1>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus></input>
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required></input>
                    <div className="checkbox mb-3">
                    
                    <input type="checkbox" id="remember" value="remember-me"></input>
                    <label htmlFor="remember">remember me</label>
                    
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" id="btnLogin">Sign in</button>
                    <button className="btn btn-lg btn-info btn-block" id="btngoogle">Sign in with Google</button>
                    <button className="btn btn-lg btn-secondary btn-block" id="btnSignUp">New account</button>
                </div>


            </div>
        );
    }
}

ReactDOM.render(<Example/>, document.getElementById("example"));