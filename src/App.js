import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Header from './Components/header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from './Components/projects/Projects';
import Services from './Components/Services/Services';

import Contact from './Components/contacts/Contact';
import Footer2 from './Components/footer2/Footer2';
import Footer1 from './Components/Footer1/Footer1';
import Service1 from './Components/services1/Service1';
import Team from './Components/team/Team';
import Careers from './Components/careers/Careers';
import Contact2 from './pages/contact2/Contact2';
import Team2 from './pages/team2/Team2';
import Service2 from './pages/services2/Service2';
import Project2 from './pages/project2/Project2';

function App() {
  return (
    <div >
<BrowserRouter>
     <Header/>
        <Routes>
        <Route path='/' element={<Home />} />
         <Route path='/Service1' element={<Service2 />} />
         <Route path='/Projects' element={<Project2 />} />
         <Route path='/Team' element={<Team2/>} />
        <Route path='/contact' element={<Contact2 />} />
        <Route path='/career' element={<Careers />} />
      


        </Routes>
       
     
     
     </BrowserRouter>
    <Footer2/>
    </div>
  );
}

export default App;
