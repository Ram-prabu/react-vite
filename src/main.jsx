import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

export const UserContext=React.createContext()
export const ColorContext=React.createContext()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   

    <UserContext.Provider value={'user1'}> 

    <ColorContext.Provider value={'green'}>
    <App />
    </ColorContext.Provider>
    
    </UserContext.Provider>
   
    
  </React.StrictMode>,
)