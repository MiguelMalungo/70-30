import React from 'react';
import { 
  Box, 
  Typography, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  ListItemButton,
  Divider,
  Container,
  InputBase,
  Paper,
  IconButton
} from '@mui/material';
import { 
  Build as AssembleIcon,
  DirectionsCar as AutoIcon,
  Face as BeautyIcon,
  CleaningServices as CleaningIcon,
  Handyman as CustomIcon,
  Deck as DecorationIcon,
  BoltOutlined as EnergyIcon,
  HomeRepairService as HomefixIcon,
  Construction as InstallationIcon,
  ChevronRight as ChevronRightIcon,
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon
} from '@mui/icons-material';

const Categories: React.FC = () => {
  // Sample data for categories
  const categories = [
    { id: 'assemble', name: 'Assemble', icon: <AssembleIcon sx={{ color: '#0099CC' }} /> },
    { id: 'auto', name: 'Auto', icon: <AutoIcon sx={{ color: '#0099CC' }} /> },
    { id: 'beauty', name: 'Beauty', icon: <BeautyIcon sx={{ color: '#0099CC' }} /> },
    { id: 'cleaning', name: 'Cleaning', icon: <CleaningIcon sx={{ color: '#0099CC' }} /> },
    { id: 'custom', name: 'Custom', icon: <CustomIcon sx={{ color: '#0099CC' }} /> },
    { id: 'decoration', name: 'Decoration', icon: <DecorationIcon sx={{ color: '#0099CC' }} /> },
    { id: 'energy', name: 'Energy efficiency', icon: <EnergyIcon sx={{ color: '#0099CC' }} /> },
    { id: 'homefix', name: 'Homefix', icon: <HomefixIcon sx={{ color: '#0099CC' }} /> },
    { id: 'installation', name: 'Installation', icon: <InstallationIcon sx={{ color: '#0099CC' }} /> },
  ];

  return (
    <Box sx={{ pb: 7 }}>
      {/* Header */}
      <Box sx={{ 
        p: 2, 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" component="h1" sx={{ mr: 1 }}>
            Rua Doutor Manuel
          </Typography>
          <KeyboardArrowDownIcon />
        </Box>
        <Box>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Search Bar */}
      <Box sx={{ px: 2, mb: 3 }}>
        <Paper
          component="form"
          sx={{ 
            p: '2px 4px', 
            display: 'flex', 
            alignItems: 'center', 
            borderRadius: 28,
            backgroundColor: '#f5f5f5'
          }}
          elevation={0}
        >
          <IconButton sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="How can we help?"
            inputProps={{ 'aria-label': 'search services' }}
          />
        </Paper>
      </Box>
      
      <Container>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
          Browse by category
        </Typography>
        
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {categories.map((category, index) => (
            <React.Fragment key={category.id}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {category.icon}
                  </ListItemIcon>
                  <ListItemText 
                    primary={category.name} 
                    primaryTypographyProps={{ 
                      sx: { 
                        color: '#000000', 
                        fontWeight: 500,
                        fontSize: '1rem'
                      } 
                    }} 
                  />
                  <ChevronRightIcon sx={{ color: '#0099CC' }} />
                </ListItemButton>
              </ListItem>
              {index < categories.length - 1 && (
                <Divider component="li" />
              )}
            </React.Fragment>
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default Categories;
