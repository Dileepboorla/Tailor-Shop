import { Route , Routes } from 'react-router-dom'
import NavBar from './Pages/NavBar'
import Home from './Pages/Home'
import Blouse from './Pages/blouse'
import Embriodery from './Pages/embriodery'
import About from './Pages/about'
import Contact from './Pages/contact'
import Admin from './Pages/admin'
import DeleteData from './Pages/AdminPages/deletedata'
import InsertData from './Pages/AdminPages/insertData'
import './App.css'

const App = () =>{
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blouse' element={<Blouse />} />
        <Route path='/embriodery' element={<Embriodery />} />
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/DeleteData' element={<DeleteData/>}/>
        <Route path='/InsertData' element={<InsertData/>}/>
      </Routes>
    </div>
  )
}

export default App;