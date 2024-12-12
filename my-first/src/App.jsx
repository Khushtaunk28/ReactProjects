import { Fragment } from "react";
import MyHeading from "./components/MyHeading";

const a=200
function App(){
  return( 
    <Fragment>
  <div>
    <MyHeading/>
    <h1>Hello this is react with a={a}</h1>
    <p>hey this is p</p>
  </div>
  </Fragment>
  );
  
}
export default App;