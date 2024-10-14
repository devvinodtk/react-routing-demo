import React, { useContext } from 'react'
import Login from './Login'
import { useAuth } from '../utils/Auth'

function Home() {
  const auth = useAuth();
  return (
    <div>
        <h1 className='text-3xl font-bold underline'>
            Welcome {auth?.userState} to Home Page
        </h1>
        { auth.userState === null && <Login />}
    </div>
  )
}

export default Home