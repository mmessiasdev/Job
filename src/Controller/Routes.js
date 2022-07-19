import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import history from "../Model/History";
import HomePage from '../View/HomePage';
import InstaScreen from '../View/InstaScreen';


// ---------- PART RESPONSIBLE FOR MANAGING THE APP'S PAGES ---------- // 

function RoutesPage() {

    return (
        <Router history={history}>
            <Routes>
                <Route path="/" element={<InstaScreen />} />
                <Route path="/homepage" element={<HomePage />} />
            </Routes>

        </Router>

    )
}

export default RoutesPage;