import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<React.StrictMode>
		<App/>
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
