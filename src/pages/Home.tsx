import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
  InputBase,
  Divider,
  IconButton,
  Slide
} from '@mui/material';
import { 
  ChevronRight as ChevronRightIcon,
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  AccountCircle as AccountCircleIcon,
  Build as BuildIcon,
  DirectionsCar as AutoIcon,
  Spa as BeautyIcon,
  CleaningServices as CleaningIcon,
  DesignServices as CustomIcon,
  Brush as DecorationIcon,
  Bolt as EnergyIcon,
  Handyman as HomefixIcon,
  Construction as InstallationIcon
} from '@mui/icons-material';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [slideIn, setSlideIn] = useState(true);
  
  useEffect(() => {
    // Trigger slide-in animation when component mounts
    setSlideIn(true);
  }, []);
  
  const handleCategoryClick = (category: string) => {
    // Trigger slide-out animation before navigating
    setSlideIn(false);
    setTimeout(() => {
      navigate(`/category/${category.toLowerCase()}`);
    }, 300); // Match this with the animation duration
  };
  
  // Sample data for service categories based on the screenshot
  const serviceCategories = [
    { 
      id: 'assemble', 
      title: 'Assemble', 
      icon: <BuildIcon />
    },
    { 
      id: 'auto', 
      title: 'Auto', 
      icon: <AutoIcon />
    },
    { 
      id: 'beauty', 
      title: 'Beauty', 
      icon: <BeautyIcon />
    },
    { 
      id: 'cleaning', 
      title: 'Cleaning', 
      icon: <CleaningIcon />
    },
    { 
      id: 'custom', 
      title: 'Custom', 
      icon: <CustomIcon />
    },
    { 
      id: 'decoration', 
      title: 'Decoration', 
      icon: <DecorationIcon />
    },
    { 
      id: 'energy', 
      title: 'Energy efficiency', 
      icon: <EnergyIcon />
    },
    { 
      id: 'homefix', 
      title: 'Homefix', 
      icon: <HomefixIcon />
    },
    { 
      id: 'installation', 
      title: 'Installation', 
      icon: <InstallationIcon />
    },
  ];

  return (
    <Slide direction="left" in={slideIn} timeout={300}>
      <Box sx={{ 
        pb: 7, 
        bgcolor: '#fff',
        width: '100%'
      }}>
      {/* Header with location selector and icons */}
      <Box sx={{ 
        padding: '16px',
        backgroundColor: '#fff',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        width: '100%'
      }}>
        <Box sx={{ 
          display: 'flex',
          alignItems: 'center',
          marginBottom: '16px'
        }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, flex: 1 }}>
            Rua Doutor Manuel Pereira
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton>
              <AccountCircleIcon />
            </IconButton>
            <IconButton>
              <NotificationsIcon />
            </IconButton>
          </Box>
        </Box>
        
        {/* Search bar */}
        <Box sx={{ 
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#f5f5f5',
          borderRadius: '24px',
          padding: '8px 16px',
          marginBottom: '24px'
        }}>
          <SearchIcon sx={{ color: '#999', mr: 1 }} />
          <InputBase
            placeholder="How can we help?"
            fullWidth
            sx={{ fontSize: '1rem' }}
          />
        </Box>
      </Box>
      
      {/* Category heading */}
      <Box sx={{ px: 3, py: 2 }}>
        <Typography variant="h5" component="h1" sx={{ fontWeight: 700 }}>
          Browse by category
        </Typography>
      </Box>
      
      {/* Categories list */}
      <List sx={{ width: '100%', bgcolor: 'background.paper', pt: 0, mb: 7 }}>
        {serviceCategories.map((category, index) => (
          <React.Fragment key={category.id}>
            <ListItem 
              onClick={() => handleCategoryClick(category.id)}
              sx={{ padding: '16px', cursor: 'pointer' }}
            >
              <ListItemIcon sx={{ minWidth: '40px', color: '#295D4A' }}>
                {category.icon}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {category.title}
                  </Typography>
                }
              />
              <ListItemSecondaryAction>
                <ChevronRightIcon sx={{ color: '#999' }} />
              </ListItemSecondaryAction>
            </ListItem>
            {index < serviceCategories.length - 1 && (
              <Divider component="li" sx={{ ml: 7 }} />
            )}
          </React.Fragment>
        ))}
      </List>
      </Box>
    </Slide>
  );
};

export default Home;
