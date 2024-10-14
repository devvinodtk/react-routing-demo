import React, { useContext, useState } from 'react'
import { useAuth } from '../utils/Auth';
import { useNavigate } from 'react-router-dom';

function Login() {
    const auth = useAuth();
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();
    const handleLogin = () => {
        auth.login(userName)
        navigate('/users');
    }
    return (
        <div>
            <label>
                Login: <input value={userName} onChange={(e)=>setUserName(e.target.value)} ></input>
            </label>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login