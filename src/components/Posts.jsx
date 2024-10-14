import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

function Posts() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams()

  const filterParam = searchParams.get('filter');
  return (
    <div>
        <h1 className='text-3xl font-bold underline'>
        Child Route - Posts </h1>
        <button onClick={()=> { navigate('../new-post') }}>Add New Post</button>
        <button onClick={()=>{setSearchParams({filter:'true'})}}>Add Filter</button>
        <button onClick={()=>{setSearchParams({})}}>Remove Filter</button>

        {filterParam ?<h3>Showing Active Posts</h3>:<h3>Showing all Posts</h3>}
    </div>
  )
}

export default Posts