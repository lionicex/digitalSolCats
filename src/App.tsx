import {Router} from '@reach/router'
import Home from './views/Home';
import Mint from './views/Mint';

const App = ()=>  {
  return (
    <Router>
		  <Home path="/" />
      <Mint path="/mint"/>
	  </Router>
  );
}

export default App;
