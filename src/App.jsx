import { useEffect, useState } from 'react'
import './App.css'
import User from './User';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  // Styles
  const counterStyle = {
    border: "2px solid cyan",
    padding: "20px",
    margin: "20px auto",
    borderRadius: "10px",

  }

  return (
    <>
      <div style={counterStyle}>
        <h2>Users: {users.length}</h2>
        <p>{users.length !== 0 ? users.map(user => <User user={user} />) : "No User found!"}</p>
      </div>
    </>
  )
}

export default App
