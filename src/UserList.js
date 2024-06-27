import axios from 'axios'
import React, { useEffect ,useState } from 'react';
import './UserList.css';

function UserList() {
    const [listOfUSer , setListOfUser] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
          .then(response => {
            setListOfUser(response.data);
          })
          .catch(error => {
            console.log('error', error);
          });
      }, []);
  
   

  return (
    <div className="user-list">
        <h1>This is the list of users</h1>
      {
        listOfUSer.map(user =>(
            <li key={user.id} className="user-item">{user.name}</li>
        ))
      }
    </div>
  )
}

export default UserList
