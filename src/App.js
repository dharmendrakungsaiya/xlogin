import {useState} from "react";
import './App.css';

function App() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (e) => {
   setName(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
   }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(name === "user" && password === "password"){
      setMessage("Welcome, user!");
    } else{
      setMessage("Invalid username or password");
    }
  }
  
  return (
    <div className="App">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
      {message && <p>{message}</p>}
      <label>Username:</label>
      <input type="text" placeholder="username"  value={name} onChange={handleName} required/>
      <br/>
      <label>Password:</label>
      <input type="password" placeholder="password" value={password} onChange={handlePassword} required/>
      <br/>
      <button type="submit">Submit</button>
      </form>
      
    </div>
  );
}

export default App;
