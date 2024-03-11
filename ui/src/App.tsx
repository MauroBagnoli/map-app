import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Devices from './pages/devices';
import { NavBar } from './components/layout/nav-bar';
import { ThemeProvider } from './components/layout/theme-provider';
import { DeviceProvider } from './context/device-context';
import { DeviceDetails } from './pages/device-details';

function App() {
    return (
        <Router>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <DeviceProvider>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/devices" element={<Devices />} />
                        <Route path="/details/:id" Component={DeviceDetails} />
                    </Routes>
                </DeviceProvider>
            </ThemeProvider>
        </Router>
    );
}

export default App;
