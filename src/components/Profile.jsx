import React from 'react'
import { Outlet, Link, useParams, useNavigate } from 'react-router-dom'

function Profile() {
    const {userId } = useParams();
    const navigate = useNavigate();
  return (
    <>
        <div>
        <h1 className='text-3xl font-bold underline'>Welcome to Profile of {userId}</h1>
        </div>
        <nav>
            <ul>
                <li><Link to="settings">Settings</Link></li>
                <li><Link to="posts">Posts</Link></li>
            </ul>
        </nav>
        <button onClick={()=> { navigate(-1) }}>Go Back</button>
        <Outlet></Outlet>
    </>
  )
}

export default Profile