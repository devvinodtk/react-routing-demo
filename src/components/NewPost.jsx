import React from 'react'
import { useNavigate } from 'react-router-dom'

function NewPost() {    
    const navigate = useNavigate();

    return (
        <div>
            <h1 className='text-3xl font-bold underline'>Add New Post Here..</h1>
            <button onClick={()=> { navigate('../') }}>Go Back</button>
        </div>
    )
}

export default NewPost