import React, { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AppContext'

const loginCredentials = {
    username: 'admin',
    password: 'admin',
}

export const Login = () => {
    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isInvalid, setIsInvalid] = useState(false)

    const handleUsename = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }
    const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleLogin = () => {
        if (loginCredentials.username === username && loginCredentials.password === password) {
            auth.login(username)
            setIsInvalid(false)
            navigate('/todos', { replace: true });
        } else {
            setIsInvalid(true)
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <h3 className="text-center">Login</h3>
                    <div>
                        <div className="mb-3">
                            <label htmlFor="Username" className="form-label" >Username</label>
                            <input type="text" className="form-control" id="login" placeholder="Username" value={username} onChange={handleUsename} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Password" className="form-label" >Password</label>
                            <input type="password" className="form-control" id="Password" value={password} onChange={handlePassword} />
                        </div>
                        {
                            isInvalid &&
                            <div className="mb-3 invalid-feedback d-block">
                                Invalid username or password
                            </div>
                        }
                        <div className="mb-3 d-grid">
                            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
