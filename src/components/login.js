import React from "react";
import { useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState(""); 
    const navigate = useNavigate();
    const dummyUser = {
        email: "test@mail.com",
        password: "admin"
    }
    const handleLogin = (e) => {
        if(email === dummyUser.email && password === dummyUser.password){
            localStorage.setItem("user",email);
            navigate("/dashboard")
        }else{
            setError("Invalid Email or Password")
        }
    }
    
return (
    <Container>
        <div className="login-box">
            <h3>Login</h3>
            {error && <Alert>{error}</Alert>}
            <div>
                <label>Email</label>
                <input
                type="email"
                className="input-control"
                placeholder="enter email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
                >
                </input>
            </div>
            <div>
                <label>Password</label>
                <input
                type="password"
                className="input-control"
                placeholder="enter password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
                >
                </input>
            </div>
            <button
            onClick={handleLogin}
            >
                Login
            </button>
        </div>
    </Container>
)
}

export default LoginPage;