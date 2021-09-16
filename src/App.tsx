import { ToastContainer } from "react-toastify";
import Providers from "./providers";
import Router from "./router";

const App = () => {
	return (
		<Providers>
			<Router/>
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
