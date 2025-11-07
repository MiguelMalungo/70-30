import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  styled,
  Divider,
  IconButton,
  Slide
} from '@mui/material';
import { 
  ChevronRight as ChevronRightIcon,
  ArrowBack as ArrowBackIcon
} from '@mui/icons-material';

const PageHeader = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  padding: '16px',
  backgroundColor: '#fff',
  position: 'sticky',
  top: 0,
  zIndex: 10,
}));

const ServiceListItem = styled(ListItem)(() => ({
  padding: '16px',
  cursor: 'pointer',
}));

const PriceDisplay = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
}));

const OriginalPrice = styled(Typography)(() => ({
  textDecoration: 'line-through',
  color: '#666666',
  fontSize: '0.9rem',
}));

const DiscountPrice = styled(Typography)(() => ({
  color: '#295D4A',
  fontWeight: 600,
  fontSize: '1.1rem',
}));

const categoryServicesData = {
  assemble: [
    { id: 1, title: 'Montar cama (com arrumação)', originalPrice: '€52.50', discountPrice: '€36.75', image: 'https://via.placeholder.com/60x60?text=Bed' },
    { id: 2, title: 'Montar cama (articulada)', originalPrice: '€71.50', discountPrice: '€50.05', image: 'https://via.placeholder.com/60x60?text=Bed2' },
    { id: 3, title: 'Fixar móveis à parede', originalPrice: '€32.90', discountPrice: '€23.03', image: 'https://via.placeholder.com/60x60?text=Fix' },
    { id: 4, title: 'Montar roupeiro (simples)', originalPrice: '€39.50', discountPrice: '€27.65', image: 'https://via.placeholder.com/60x60?text=Wardrobe' },
    { id: 5, title: 'Montar mesa de apoio (com gavetas)', originalPrice: '€39.50', discountPrice: '€27.65', image: 'https://via.placeholder.com/60x60?text=Table' },
    { id: 6, title: 'Montar berço', originalPrice: '€32.90', discountPrice: '€23.03', image: 'https://via.placeholder.com/60x60?text=Crib' },
  ],
  cleaning: [
    { id: 101, title: 'Limpeza doméstica (3h)', originalPrice: '€29.90', discountPrice: '€26.91', image: 'https://via.placeholder.com/60x60?text=Clean' },
    { id: 102, title: 'Limpeza profunda (5h)', originalPrice: '€49.90', discountPrice: '€44.91', image: 'https://via.placeholder.com/60x60?text=Deep' },
  ],
  auto: [
    { id: 201, title: 'Lavagem e aspiração de carro', originalPrice: '€25.00', discountPrice: '€22.50', image: 'https://via.placeholder.com/60x60?text=Car' },
    { id: 202, title: 'Mudança de óleo', originalPrice: '€45.00', discountPrice: '€40.50', image: 'https://via.placeholder.com/60x60?text=Oil' },
  ],
};

const categoryNames: Record<string, string> = {
  assemble: 'Montagem',
  cleaning: 'Limpeza',
  auto: 'Automóvel',
  beauty: 'Beleza',
  custom: 'Personalizado',
  decoration: 'Decoração',
  energy: 'Eficiência energética',
  homefix: 'Reparações',
  installation: 'Instalação',
};

const CategoryServices: React.FC = () => {
  const navigate = useNavigate();
  const { category } = useParams<{ category: string }>();
  const [slideIn, setSlideIn] = useState(true);
  
  useEffect(() => {
    setSlideIn(true);
  }, []);

  const handleServiceClick = (serviceId: number) => {
    navigate(`/service/${serviceId}`);
  };

  const handleBackClick = () => {
    setSlideIn(false);
    setTimeout(() => {
      navigate('/');
    }, 300);
  };

  const services = category && (categoryServicesData as any)[category] ? (categoryServicesData as any)[category] : [];
  const categoryDisplayName = category ? categoryNames[category] || category : '';

  return (
    <Slide direction="right" in={slideIn} timeout={300}>
      <Box sx={{ pb: 7, bgcolor: '#fff', width: '100%' }}>
        <PageHeader>
          <IconButton onClick={handleBackClick} edge="start" aria-label="back">
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" sx={{ ml: 1 }}>
            {categoryDisplayName}
          </Typography>
        </PageHeader>
        
        <List sx={{ pb: 7 }}>
          {services.length > 0 ? (
            services.map((service: any, index: number) => (
              <React.Fragment key={service.id}>
                <ServiceListItem alignItems="flex-start" onClick={() => handleServiceClick(service.id)}>
                  <ListItemAvatar>
                    <Avatar variant="rounded" src={service.image} alt={service.title} sx={{ width: 60, height: 60, borderRadius: 1 }} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={<Typography variant="body1" sx={{ fontWeight: 500, ml: 1 }}>{service.title}</Typography>}
                    secondary={
                      <PriceDisplay sx={{ ml: 1, mt: 0.5 }}>
                        <OriginalPrice variant="body2">{service.originalPrice}</OriginalPrice>
                        <DiscountPrice variant="body1">{service.discountPrice}</DiscountPrice>
                      </PriceDisplay>
                    }
                    sx={{ my: 0.5 }}
                  />
                  <ListItemSecondaryAction>
                    <ChevronRightIcon sx={{ color: '#999' }} />
                  </ListItemSecondaryAction>
                </ServiceListItem>
                {index < services.length - 1 && (
                  <Divider variant="inset" component="li" />
                )}
              </React.Fragment>
            ))
          ) : (
            <Box sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="body1" color="text.secondary">
                Nenhum serviço disponível para esta categoria.
              </Typography>
            </Box>
          )}
        </List>
      </Box>
    </Slide>
  );
};

export default CategoryServices;


