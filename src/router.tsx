import { Router } from "@reach/router";
import Home from "./views/Home";

const RouterWrapper = () => {
  return (
    <Router>
      <Home path="/" />
    </Router>
  );
};
export default RouterWrapper;
