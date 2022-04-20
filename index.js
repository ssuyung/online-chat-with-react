import React, { useReducer } from "react";
import { BrowserRouter, Route, Routes, HashRouter} from "react-router-dom";
// import {hashHistory} from "react-router";
import {Login} from "./src/component/Login.js";
import {Chatroom} from "./src/component/Chatroom.js";


ReactDOM.render((
    <HashRouter>
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="chatroom" element={(<Chatroom />)}></Route>
        </Routes>
    </HashRouter>
),document.getElementById("example"));
// ReactDOM.render(<Example/>, document.getElementById("example"));
// console.log(document.getElementById("example").isLoggedIn);