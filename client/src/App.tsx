import './App.css'
import AddUsers from './components/AddUser'
import UsersList from './components/UsersList'

function App() {

  return (
    <div>
      <AddUsers/>
      <br /><br />
      All users:
      <UsersList/>
    </div>
  )
}

export default App
