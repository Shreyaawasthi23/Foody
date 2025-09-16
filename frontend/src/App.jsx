import React from 'react'
import { Routes,Route } from 'react-router'
import SignUp from './pages/signUp'
import SignIn from './pages/SignIn'
import ForgotPasswprd from './pages/ForgotPasswprd'
export const serverUrl = "http://localhost:8000"
const App = () => {
  return (
    <Routes>
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/forgot-password' element={<ForgotPasswprd/>} />
    </Routes>
  )
}

export default App
