import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import React from 'react'
import Navbar from './Navbar/Navbar'
import CreateProducts from './components/CreateProducts'
import Admin from './components/Admin'
import Productlist from './components/Productlist'
import Edit from './components/Edit'
const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/createproduct' element={<CreateProducts/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/productlist' element={<Productlist/>}/>
        <Route path='/edit' element={<Edit/>}/>
      </Routes>
    </Router>
    </>
  )
}
//testing
export default App