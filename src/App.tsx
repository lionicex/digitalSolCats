import { Router } from "@reach/router";
import { ToastContainer } from "react-toastify";
import Providers from "./providers";
import Home from "./views/Home";

const App = () => {
  return (
    <Providers>
      <Router>
        <Home path="/" />
      </Router>
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        pauseOnHover={false}
        limit={1}
        theme="colored"
      />
    </Providers>
  );
};

export default App;
