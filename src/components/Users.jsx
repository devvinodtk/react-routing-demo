import React from 'react'
import { useNavigate } from 'react-router-dom'

function Users() {
const navigate = useNavigate();
  return (
    <div>
        <h2>Mohan Lal - <a style={{"cursor": 'pointer', 'color': 'blue'}} onClick={()=> { navigate('lal')}}>lal</a></h2>
        <h2>John Brittas - <a style={{"cursor": 'pointer', 'color': 'blue'}} onClick={()=> { navigate('jb')}}>jb</a></h2>
        <h2>Suresh Gopi - <a style={{"cursor": 'pointer', 'color': 'blue'}} onClick={()=> { navigate('vtk')}}>sg</a></h2>
    </div>
  )
}

export default Users