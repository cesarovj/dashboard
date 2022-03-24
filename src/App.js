import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/navbars/TopBar';
import SideBar from './components/navbars/SideBar';
import Dashboard from './pages/home/Dashboard';
import CustomersTable from './pages/customers/CustomersTable';

function App() {
    return (
        <Router>
            <TopBar />
            <div className='container'>
                <SideBar />
                <Routes>
                    <Route exact path='/' element={<Dashboard />} />
                    <Route
                        exact
                        path='/customers'
                        element={<CustomersTable />}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
