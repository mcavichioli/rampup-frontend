import React from 'react';

export default function Login() {
    return(
        <form className="login-form">
            <div className="form-group">
                <input placeholder="User" className="form-control"></input>
            </div>
            <div className="form-group">
                <input placeholder="Password" className="form-control"></input>
            </div>
            <div className="form-group">
                <button>Login</button>
            </div>
        </form>
    )
} 