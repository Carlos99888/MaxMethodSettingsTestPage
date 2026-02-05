import { useState } from 'react'
import './App.css'

import UserEmail from '../components/UserEmail';
import UserLevel from '../components/UserLevel';
import UserName from '../components/UserName';

function App() {
  const [user] = useState({
    email: 'user@email.com',
    name: 'UserName',
    level: 'Beginner'
    
  })

  return(
    <div className="app-container">
      <UserEmail email={user.email} />
      <UserName name={user.name} />
      <UserLevel level={user.level} />
    </div>
  )
 
}

export default App
