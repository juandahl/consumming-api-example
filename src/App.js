import React from 'react';
import logo from './logo.svg';
import './App.css';

const SERVER_URL = `https://jsonplaceholder.typicode.com`; 
const POSTS_URL = `${SERVER_URL}/posts`;
const USERS_URL = '';

function App() {
  // States
  const [posts, setPosts] = React.useState([]);
  const [users, setUsers] = React.useState([]);

  // Handlers
  const getPosts = async () => {
    try {
      const response = await fetch(POSTS_URL, { method: 'GET' });
      const data = await response.json();
  
      setPosts(data);
    } catch(e) {
      console.error(e);
      setPosts([]);
    }
  }

  // TODO: complete this method to show users
  const getUsers = async () => {
  } 

  // Effects
  React.useEffect(() => {
    getPosts();
    getUsers();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* POST LIST */}
        <div className="title">POSTS</div>

        <ul className="posts-container">
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>

        {/* USER LIST */}
        <div className="title">USERS</div>

        {users.length === 0 && (<p>TAREA: Completa la función getUsers para mostrar los nombres de los usuarios</p>)}

        <ul className="posts-container">
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
