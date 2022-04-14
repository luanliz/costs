import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Contact from './pages/Contact';
import Company from './pages/Company';
import Home from './pages/Home';
import NewProject from './pages/Newproject';
import Container from './components/layout/Container';



function App() {

  return (

    <Router>
      <div>
        <Navbar />
 
      </div>
      <Container customClass="min-height">
        <Routes>
          <Route exact path='/' element= {<Home />} />
          <Route exact path='/newproject' element={<NewProject />} />
          <Route exact path='/company' element={<Company />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
        
      </Container>
      <Footer/>
    </Router>
     

  )
}

export default App;
