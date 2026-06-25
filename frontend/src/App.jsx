import { Routes, Route } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Portfolio from './pages/Portfolio';
import Transactions from './pages/Transactions';
import Watchlist from './pages/Watchlist';
import Stock from './pages/Stock';
import About from './pages/About';
import Docs from './pages/Docs';
import NotFound from './pages/NotFound';

import Notification from './components/Notification';
// import ProtectedRoute from './components/ProtectedRoute'; // Use when auth is ready

function App() {
  return (
    <>
      <Notification />
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/stock/:symbol" element={<Stock />} />
          <Route path="/about" element={<About />} />
          <Route path="/docs" element={<Docs />} />
          
          {/* Catch all */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
