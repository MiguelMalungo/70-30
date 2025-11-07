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
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [slideIn, setSlideIn] = useState(true);
  
  useEffect(() => {
    setSlideIn(true);
  }, []);
  
  const handleCategoryClick = (category: string) => {
    setSlideIn(false);
    setTimeout(() => {
      navigate(`/category/${category.toLowerCase()}`);
    }, 300);
  };
  
  const serviceCategories = [
    { id: 'assemble', title: 'Montagem', icon: <BuildIcon /> },
    { id: 'auto', title: 'Automóvel', icon: <AutoIcon /> },
    { id: 'beauty', title: 'Beleza', icon: <BeautyIcon /> },
    { id: 'cleaning', title: 'Limpeza', icon: <CleaningIcon /> },
    { id: 'custom', title: 'Personalizado', icon: <CustomIcon /> },
    { id: 'decoration', title: 'Decoração', icon: <DecorationIcon /> },
    { id: 'energy', title: 'Eficiência energética', icon: <EnergyIcon /> },
    { id: 'homefix', title: 'Reparações', icon: <HomefixIcon /> },
    { id: 'installation', title: 'Instalação', icon: <InstallationIcon /> },
  ];

  return (
    <Slide direction="left" in={slideIn} timeout={300}>
      <Box sx={{ pb: 7, bgcolor: '#fff', width: '100%' }}>
        <Box sx={{ padding: '16px', backgroundColor: '#fff', position: 'sticky', top: 0, zIndex: 10, width: '100%' }}>
          <Box
            sx={{
              position: 'absolute',
              top: 16,
              left: 16,
              zIndex: 20,
            }}
          >
            <IconButton
              aria-label="Voltar"
              onClick={() => navigate(-1)}
              size="small"
              sx={{
                width: 28,
                height: 28,
                bgcolor: 'rgba(41,93,74,0.12)',
                '&:hover': {
                  bgcolor: 'rgba(41,93,74,0.2)',
                },
              }}
            >
              <ArrowBackIosNewIcon sx={{ color: '#295D4A', fontSize: 18 }} />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginBottom: '16px', gap: 2, textAlign: 'right' }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Rua Doutor Manuel Pereira
            </Typography>
            <IconButton>
              <NotificationsIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#f5f5f5', borderRadius: '24px', padding: '8px 16px', marginBottom: '24px' }}>
            <SearchIcon sx={{ color: '#999', mr: 1 }} />
            <InputBase placeholder="Como podemos ajudar?" fullWidth sx={{ fontSize: '1rem' }} />
          </Box>
        </Box>
        <Box sx={{ px: 3, py: 2 }}>
          <Typography variant="h5" component="h1" sx={{ fontWeight: 700 }}>
            Navegar por categoria
          </Typography>
        </Box>
        <List sx={{ width: '100%', bgcolor: 'background.paper', pt: 0, mb: 7 }}>
          {serviceCategories.map((category, index) => (
            <React.Fragment key={category.id}>
              <ListItem onClick={() => handleCategoryClick(category.id)} sx={{ padding: '16px', cursor: 'pointer' }}>
                <ListItemIcon sx={{ minWidth: '40px', color: '#295D4A' }}>
                  {category.icon}
                </ListItemIcon>
                <ListItemText primary={<Typography variant="body1" sx={{ fontWeight: 500 }}>{category.title}</Typography>} />
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


