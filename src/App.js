import './App.css';
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import MainPage from './Pages/MainPage';
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
        <Route path='/ProductListMain' exact Component={Home} />
    </Routes>
    </Router>
 </div>
  )
}
export default App;
