import Navigation from "./components/navigation";
import LandingPage from "./pages/landing-page";
import "./main.scss";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Navigation />

			<Routes>
				<Route path="/" element={<LandingPage />} />
			</Routes>
		</>
	);
}

export default App;
