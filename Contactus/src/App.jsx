import { div, form } from "framer-motion/client";
import Header from "./assets/components/Header";
import  "./styles/Header.css";
import Hero from "./assets/components/Hero";
import "./styles/Hero.css";
import "./styles/Forms.css";
import Form from "./assets/components/Form";
const App=()=>{
  return(
    <div>
      <Header/>
      <Hero/>
      <Form/>
    </div>
  )
}
export default App;