import { Router } from "@reach/router";
import { ToastContainer } from "react-toastify";
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
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        pauseOnHover={false}
        limit={1}
        theme="colored"
      />
    </RecoilRoot>
  );
};

export default App;
