import { Routes, Route } from 'react-router-dom';
import Main from './pages/main/main';

function App() {
	return (
		<Routes>
			<Route path="/skyamg" element={<Main name={'Main'} />} />
		</Routes>
	);
}

export default App;
