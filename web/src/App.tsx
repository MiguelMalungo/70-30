// App.tsx - Main routing configuration
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';

// Layout
import MainLayout from './components/Layout/MainLayout';

// Pages
import Login from './pages/Login';
import Home from './pages/Client/Home';
import Categories from './pages/Client/Categories';
import Profile from './pages/Client/Profile';
import CustomService from './pages/Client/CustomService';
import ServiceDetail from './pages/Client/ServiceDetail';
import CategoryServices from './pages/Client/CategoryServices';
import ElderlyAssistedArea from './pages/ElderlyAssisted/ElderlyAssistedArea';
import MentorArea from './pages/Mentor/MentorArea';
import ApprenticeArea from './pages/Apprentice/ApprenticeArea';
import Areas from './pages/Areas';

// Placeholder pages
const Search = () => <div style={{ padding: 20 }}>Search Page</div>;
const Services = () => <div style={{ padding: 20 }}>Services Page</div>;
const Orders = () => <div style={{ padding: 20 }}>Orders Page</div>;
const Payments = () => <div style={{ padding: 20 }}>Payments Page</div>;
const Promotions = () => <div style={{ padding: 20 }}>Promotions Page</div>;
const Help = () => <div style={{ padding: 20 }}>Help Center</div>;
const Billing = () => <div style={{ padding: 20 }}>Billing & Payment Methods</div>;
const Subscriptions = () => <div style={{ padding: 20 }}>Your Subscriptions</div>;
const Language = () => <div style={{ padding: 20 }}>Language Settings</div>;

const SessionRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const pending = sessionStorage.getItem('ghPagesRedirect');
    if (pending) {
      sessionStorage.removeItem('ghPagesRedirect');
      navigate(pending, { replace: true });
    }
  }, [navigate]);

  return null;
};

function App() {
  const basename = import.meta.env.BASE_URL || '/';

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename={basename}>
        <SessionRedirect />
        <Routes>
          {/* Login page as the landing page */}
          <Route path="/login" element={<Login />} />
          <Route index element={<Navigate to="/login" replace />} />
          
          {/* Role/Area selection */}
          <Route path="/areas" element={<Areas />} />

          {/* Standalone user areas */}
          <Route path="/elderly" element={<ElderlyAssistedArea />} />
          <Route path="/mentor" element={<MentorArea />} />
          <Route path="/apprentice" element={<ApprenticeArea />} />

          {/* Main app routes with layout */}
          <Route path="/app" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="categories" element={<Categories />} />
            <Route path="services" element={<Services />} />
            <Route path="orders" element={<Orders />} />
            <Route path="profile" element={<Profile />} />
            <Route path="payments" element={<Payments />} />
            <Route path="promotions" element={<Promotions />} />
            <Route path="help" element={<Help />} />
            <Route path="billing" element={<Billing />} />
            <Route path="subscriptions" element={<Subscriptions />} />
            <Route path="language" element={<Language />} />
          </Route>
          <Route path="custom-service" element={<CustomService />} />
          <Route path="service/:id" element={<ServiceDetail />} />
          <Route path="category/:category" element={<CategoryServices />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App
