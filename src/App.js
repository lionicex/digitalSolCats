import './App.css';
import {Router} from "@reach/router";
import Home from "./Views/Home";

const App = () => {
  return (
	  <Router>
		  <Home path="/" />
	  </Router>
  );
}

export default App;
