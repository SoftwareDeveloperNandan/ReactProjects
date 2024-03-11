import React from "react";
import { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

function Login() {
    const [username, setUsername ] = useState("")
    const [password, setPassword ] = useState("")

    const {setUser} = useContext(UserContext)

    const finalSubmit = (e) => {
        e.preventDefault();
        setUser({username, password})
    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text" 
            placeholder="Username"
            value={username}
            onChange={(e) => {
                setUsername(e.target.value)
            }}
            />

            <br />

            <input type="text"
            value={password}
            placeholder="Username"
            onChange={(e) => {
                setPassword(e.target.value)
            }}
            />

            <button onSubmit={finalSubmit}>Submit</button>
            
        </div>
    )
}

export default Login