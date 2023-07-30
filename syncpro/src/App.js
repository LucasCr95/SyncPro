import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Project from './components/pages/Project'
import Projects from './components/pages/Projects'

import Navbar from './components/layout/Navbar'
import Container from './components/layout/Container'
import Footer from "./components/layout/Footer"

export default function App() {
  return (
      <Router>
       <Navbar />
        <Container customClass='min_height'>
         <Routes>
           <Route exact path='/' element={<Home />} />
           <Route path='/company' element={<Company />} />
           <Route path='/contact' element={<Contact />} />
           <Route path='/newproject' element={<NewProject />} />
           <Route path='/projects' element={<Projects />} />
           <Route path='/project' element={<Project />} />
         </  Routes>
        </Container>
       <Footer />
      </Router>
   
  )
}