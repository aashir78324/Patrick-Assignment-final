import './App.css';
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import MainPage from './Pages/MainPage';
import SaleItems from "./Pages/SaleItems";
import MEN from "./Pages/ManPage";
import WomenPage from "./Pages/WomenPage";
import ChildrenPage from "./Pages/Children"
import SportPage from "./Pages/SportSectionPage"
import ContactPage from "./Pages/AboutPage"
import product from "./Pages/ProductListMain";
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
        <Route path='/ManPage' exact Component={MEN} />
        <Route path='WomenPage' exact Component={WomenPage} />    
        </Routes>
    </Router>
 </div>
  )
}
export default App;
