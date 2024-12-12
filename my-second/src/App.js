import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Header from "./components/Header";
import "./style/App.scss";
import "./style/Header.scss";
function App(){
  return(
    <Router>
      <Header/>
      <Routes>
        <Route/>
      </Routes>
    </Router>
  )
}
export default App;