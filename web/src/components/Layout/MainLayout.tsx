import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { 
  Box, 
  BottomNavigation, 
  BottomNavigationAction, 
  Paper, 
  Fab,
  styled
} from '@mui/material';
import { 
  Home as HomeIcon, 
  Search as SearchIcon, 
  Receipt as OrdersIcon, 
  Person as ProfileIcon,
  Handyman as ServicesIcon
} from '@mui/icons-material';

const StyledFab = styled(Fab)(() => ({
  position: 'absolute',
  zIndex: 1000,
  bottom: 2,
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: '#295D4A',
  color: 'white',
  '&:hover': {
    backgroundColor: '#1e4435',
  },
  width: 56,
  height: 56,
  boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
}));

const MainLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = React.useState(() => {
    const path = location.pathname;
    if (path.startsWith('/app/search')) return 1;
    if (path.startsWith('/app/orders')) return 2;
    if (path.startsWith('/app/profile')) return 3;
    return 0; // Home is default
  });

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate('/app');
        break;
      case 1:
        navigate('/app/search');
        break;
      case 2:
        navigate('/app/orders');
        break;
      case 3:
        navigate('/app/profile');
        break;
      default:
        navigate('/app');
    }
  };

  return (
    <Box sx={{ pb: 7, minHeight: '100vh', backgroundColor: 'background.default' }}>
      {/* Main content */}
      <Box sx={{ 
        width: '100%',
        pb: 8 
      }}>
        <Outlet />
      </Box>
      
      {/* Bottom Navigation */}
      <Box sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        zIndex: 999
      }}>
        <Paper 
          sx={{ 
            width: '100%',
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            overflow: 'hidden',
            height: 60
          }} 
          elevation={3}
        >
        <Box sx={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={handleChange}
            sx={{ 
              height: 60,
              width: '100%',
              '& .MuiBottomNavigationAction-root': {
                color: '#999',
                '&.Mui-selected': {
                  color: '#295D4A',
                },
                minWidth: 0,
                padding: 0,
                maxWidth: 'none',
                fontSize: '0.7rem',
                paddingTop: '8px'
              },
            }}
          >
            <BottomNavigationAction 
              label="Home" 
              icon={<HomeIcon />} 
              sx={{ flexGrow: 1 }}
              onClick={() => {
                setValue(0);
                navigate('/app');
              }}
            />
            <BottomNavigationAction 
              label="Search" 
              icon={<SearchIcon />} 
              sx={{ flexGrow: 1 }}
              onClick={() => {
                setValue(1);
                navigate('/app/search');
              }}
            />
            <Box sx={{ flexGrow: 1, minWidth: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
            <BottomNavigationAction 
              label="Orders" 
              icon={<OrdersIcon />} 
              sx={{ flexGrow: 1 }}
              onClick={() => {
                setValue(2);
                navigate('/app/orders');
              }}
            />
            <BottomNavigationAction 
              label="Profile" 
              icon={<ProfileIcon />} 
              sx={{ flexGrow: 1 }}
              onClick={() => {
                setValue(3);
                navigate('/app/profile');
              }}
            />
          </BottomNavigation>
          
          <StyledFab 
            aria-label="services" 
            onClick={() => navigate('/app/services')}
          >
            <ServicesIcon sx={{ fontSize: 24 }} />
          </StyledFab>
        </Box>
      </Paper>
      </Box>
    </Box>
  );
};

export default MainLayout;
