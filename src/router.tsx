import { Router } from "@reach/router";
import Home from "./Views/Home";

const RouterWrapper = () => {
	return (
		<Router>
			<Home path="/"/>
		</Router>
	);
};
export default RouterWrapper;
