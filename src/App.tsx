import { Router } from "@reach/router";
import WalletProvider from "./components/WalletProvider";
import Home from "./views/Home";

const App = () => {
  return (
    <WalletProvider>
      <Router>
        <Home path="/" />
      </Router>
    </WalletProvider>
  );
};

export default App;
