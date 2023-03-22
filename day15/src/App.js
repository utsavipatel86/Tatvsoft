
import './App.css';
import Users from './Users';

function App() {
  const users = [
    {
      name: "Maitri",
      age: 21
    },
    {
      name: "Kunj",
      age: 15
    },
    {
      name: "Jiyu",
      age: 4
    }
  ]
  return (
    <div className="App">
      {users.map((user) => { return <Users user={user} /> })}
    </div>
  );
}

export default App;