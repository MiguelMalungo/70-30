// App.tsx - Main routing configuration
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';

// Layout
import MainLayout from './components/Layout/MainLayout';

// Pages
import Login from './pages/Login';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Profile from './pages/Profile';
import CustomService from './pages/CustomService';
import ServiceDetail from './pages/ServiceDetail';
import CategoryServices from './pages/CategoryServices';

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Login page as the landing page */}
          <Route path="/login" element={<Login />} />
          <Route index element={<Navigate to="/login" replace />} />
          
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
