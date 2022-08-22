import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cards from './Cards'

function UserList() {
    const [data, setData] = useState()
    const [error, setError] = useState(null)
  
 useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>setData(res.data) ).catch((error)=>
  setError(error))

}, [])
 return (
     <div className='ll'>
         {error? <h1>ERROR</h1> : data && data.map((el)=><Cards car={el} key={el.id} /> ) }
     </div>
  
  )
}

export default UserList