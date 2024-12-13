import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import  Contact from "./components/Contact";
import  Services from "./components/Services.jsx";

import "./style/App.scss";
import "./style/Header.scss";
import "./style/Home.scss";
import "./style/Footer.scss";
import "./style/contact.scss";
import "./style/mediaquery.scss";






import Home from "./components/Home";
function App(){
  return(
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />


      </Routes>
      <Footer/>
    </Router>
  )
}
export default App;