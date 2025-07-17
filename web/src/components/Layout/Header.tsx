import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Box,
  InputBase,
  Paper,
  styled
} from '@mui/material';
import { 
  KeyboardArrowDown as ArrowDownIcon,
  Notifications as NotificationsIcon,
  Search as SearchIcon
} from '@mui/icons-material';

const SearchBar = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  borderRadius: 25,
  backgroundColor: '#F5F5F5',
  padding: '4px 12px',
  width: '100%',
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1)
}));

interface HeaderProps {
  showSearch?: boolean;
  location?: string;
}

const Header: React.FC<HeaderProps> = ({ showSearch = true, location = 'Rua Doutor Manuel' }) => {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ backgroundColor: 'white' }}>
      <Toolbar sx={{ flexDirection: 'column', alignItems: 'stretch', px: 2, pt: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          {/* Location selector */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="subtitle1" component="div" sx={{ fontWeight: 500 }}>
              {location}
            </Typography>
            <IconButton size="small" edge="end">
              <ArrowDownIcon />
            </IconButton>
          </Box>
          
          {/* Notification and account icons */}
          <Box>
            <IconButton size="large" color="inherit">
              <NotificationsIcon />
            </IconButton>
          </Box>
        </Box>
        
        {/* Search bar */}
        {showSearch && (
          <SearchBar>
            <SearchIcon sx={{ color: 'text.secondary', mr: 1 }} />
            <InputBase
              placeholder="How can we help?"
              fullWidth
              sx={{ fontSize: '0.95rem' }}
            />
          </SearchBar>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
