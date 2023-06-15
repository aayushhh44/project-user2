import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import UserDetails from './components/UserDetails'
import UserList from './components/UserList'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='App'>
     <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<UserList />}/>
        <Route path='/users/:id' element={<UserDetails/>}/>
      </Routes>
      <Footer />
     </Router>
    </div>
  )
}

export default App
