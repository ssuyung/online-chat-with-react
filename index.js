import React from "react";

export class Example extends React.Component {
    render(){
        return(<div><h1>Hello World!</h1></div>);
    }
}

ReactDOM.render(<Example/>, document.getElementById("example"));