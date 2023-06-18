import './App.css';
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import MainPage from './Pages/MainPage';
import SaleItems from "./Pages/SaleItems";
import MEN from "./Pages/ManPage";
import WOMEN from "./Pages/WomenPage";
import kids from "./Pages/KidsPage"
import Sport from "./Pages/SportSectionPage"
import ContactPage from "./Pages/Contact"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"




function App() {
  return  (
 <div className='App'>
    <Router>
    <Navbar />
    <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/MainPage' exact Component={MainPage} />
        <Route path='/SaleItems' exact Component={SaleItems} />
        <Route path='/man' exact Component={MEN} />
        <Route path='women' exact Component={WOMEN} />  
        <Route path='/kids' exact Component={kids} />
        <Route path='/sport' exact Component={Sport} />
        <Route path='/contact' exact Component={ContactPage} />
        </Routes>
    </Router>
 </div>
  )
}
export default App;
