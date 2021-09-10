import { Router } from "@reach/router";
import { RecoilRoot } from "recoil";
import WalletProvider from "./components/WalletProvider";
import Home from "./views/Home";

const App = () => {
  return (
    <RecoilRoot>
      <WalletProvider>
        <Router>
          <Home path="/" />
        </Router>
      </WalletProvider>
    </RecoilRoot>
  );
};

export default App;
