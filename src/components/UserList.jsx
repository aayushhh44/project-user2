import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { API_URL } from '../API';
import '../App.css'

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
        setFilteredUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const filtered = users.filter((user) =>
      user.login.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="user-list">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search users by usename"
      />
      {filteredUsers.map((user) => (
        <div key={user.id} className="user">
          <div>
            <h3>Username: {user.login}</h3>
          </div>
          <div>
            <img
              src={user.avatar_url}
              alt="hehehehe"
              onClick={() => navigate(`/users/${user.id}`)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
