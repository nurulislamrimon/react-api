import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <GetDatas></GetDatas>
    </div>
  );
}

const GetDatas = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return users.map(user => <DisplayUser name={user.name} email={user.email}></DisplayUser>)
}

const DisplayUser = props => {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h5>E-mail: {props.email}</h5>
    </div>
  )
}

export default App;
