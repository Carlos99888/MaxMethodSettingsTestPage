import { useState } from 'react'
import './App.css'

import UserEmail from '../components/UserEmail';
import UserLevel from '../components/UserLevel';
import UserName from '../components/UserName';
import SettingTittle from '../components/SettingTittle';

function App() {
  const [user, setUser] = useState({
    email: 'user@email.com',
    name: 'UserName',
    level: 'Beginner'
    
  })

  const updateField = (field, value) => {
    setUser(prev => ({
      ...prev,
      [field]: value,
    }))

  }

  return(
    <div className="app-container">
      <SettingTittle></SettingTittle>
      
      <UserName 
        name={user.name} 
        onSave={(value) => updateField('name', value)}
      />

      <UserEmail 
        email={user.email} 
        onSave={(value) => updateField('email', value)}
      />
      
      <UserLevel level={user.level} />
 
    </div>
  )
 
}

export default App
