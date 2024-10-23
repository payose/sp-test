import './index.css';
import Home from './components/Home';
import Form from './components/Form';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/form" element={<Form />} />
                </Routes>
            </div>
        </Router>
	);
}

export default App;
