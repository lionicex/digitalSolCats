import { Router } from "@reach/router";
import WalletProvider from "./components/WalletProvider";
import Home from "./views/Home";
import Mint from "./views/Mint";

const App = () => {
  return (
    <WalletProvider>
      <Router>
        <Home path="/" />
        <Mint path="/mint" />
      </Router>
    </WalletProvider>
  );
};

export default App;
