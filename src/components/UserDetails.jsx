import React, { useState, useEffect } from 'react'
import '../App.css'
import { useParams } from 'react-router'
import axios from 'axios';
import { USER_DETAILS_URL } from '../API';

function UserDetails() {

  const [user, setUser] = useState({});

  const { id } = useParams();

  useEffect(() =>{
    axios.get(`${USER_DETAILS_URL}/${id}`)
      .then((res) =>{
        setUser(res.data)
      }).catch((err) => console.log(err))
  },[id]);

  

  return (
    <div className='user-details'>
      <div><h2>{user?.name}</h2>
      <img src={user?.avatar_url} alt="avatar" />
      </div>
      
      <div>
        <h2>Description</h2>
        <p>{user?.url}</p>
        <h2>Authors</h2>
        <p>{user?.node_id}</p>
        <h2>Genres</h2>
        <p>{user?.subscriptions_url}</p>
      </div>
    </div>
  )
}

export default UserDetails