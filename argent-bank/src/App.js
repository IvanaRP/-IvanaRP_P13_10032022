import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import './style/index.css';

import Home from "./pages/Home";
import Login from "./pages/Login";
import Error from "./components/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {  

  return (
    <Router>
       <Header />
       <Routes>
         <Route exact path="/" element={<Home />} />
         <Route exact path="/login" element={<Login />} />
         <Route path="*" element={<Error />} />
       </Routes>
       <Footer/>
   </Router>
  )
}


export default App
