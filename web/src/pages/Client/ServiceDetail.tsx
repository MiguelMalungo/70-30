import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Button,
  IconButton,
  Tabs,
  Tab,
  Divider,
  styled,
  Slide
} from '@mui/material';
import { 
  ArrowBack as ArrowBackIcon,
  AccessTime as AccessTimeIcon,
  Star as StarIcon,
  CheckCircle as CheckCircleIcon
} from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceImage = styled(Box)(() => ({
  width: '100%',
  height: 200,
  backgroundColor: '#f0f0f0',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
}));

const BackButton = styled(IconButton)(() => ({
  position: 'absolute',
  top: 16,
  left: 16,
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  }
}));

const TabsContainer = styled(Box)(() => ({
  backgroundColor: '#fff',
  position: 'sticky',
  top: 0,
  zIndex: 10,
  borderBottom: '1px solid rgba(0,0,0,0.1)',
}));

const StyledTabs = styled(Tabs)(() => ({
  '& .MuiTabs-indicator': {
    backgroundColor: '#295D4A',
  },
}));

const StyledTab = styled(Tab)(() => ({
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '0.9rem',
  color: '#000',
  '&.Mui-selected': {
    color: '#295D4A',
  },
}));

const InfoItem = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: 16,
}));

const ServiceDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id: serviceId } = useParams();
  console.log('Service ID:', serviceId);
  const [tabValue, setTabValue] = useState(0);
  const [slideIn, setSlideIn] = useState(true);
  
  useEffect(() => {
    setSlideIn(true);
  }, []);

  const service = {
    id: 1,
    title: 'Montar cama (com arrumação)',
    originalPrice: '€52.50',
    discountPrice: '€36.75',
    image: 'https://via.placeholder.com/600x400?text=Bed+Assembly',
    description: 'Montagem profissional da sua cama com arrumação. A nossa equipa experiente garante que a sua cama é montada correta e seguramente.',
    duration: '45-60 min',
    rating: 4.8,
    reviews: 243,
    includes: [
      'Montagem de todos os componentes da cama',
      'Instalação dos mecanismos de arrumação',
      'Verificação de alinhamento e estabilidade',
      'Remoção de materiais de embalagem'
    ]
  };

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleBookNow = () => {
    console.log('Booking service:', service.title);
  };

  const handleBackClick = () => {
    setSlideIn(false);
    setTimeout(() => {
      navigate(-1);
    }, 300);
  };

  return (
    <Slide direction="right" in={slideIn} timeout={300}>
      <Box sx={{ pb: 10, bgcolor: '#fff', width: '100%' }}>
        <ServiceImage sx={{ backgroundImage: `url(${service.image})`, width: '100%' }}>
          <BackButton onClick={handleBackClick}>
            <ArrowBackIcon />
          </BackButton>
        </ServiceImage>
        <TabsContainer sx={{ width: '100%' }}>
          <StyledTabs value={tabValue} onChange={handleTabChange} variant="fullWidth" aria-label="abas de detalhes do serviço">
            <StyledTab label="Detalhes" />
            <StyledTab label="Avaliações" />
            <StyledTab label="Prestador" />
          </StyledTabs>
        </TabsContainer>
        <Box sx={{ p: 3, width: '100%' }}>
          {tabValue === 0 && (
            <>
              <Typography variant="h5" component="h1" sx={{ fontWeight: 600, mb: 1 }}>
                {service.title}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography variant="body2" component="span" sx={{ textDecoration: 'line-through', color: '#666', mr: 1 }}>
                  {service.originalPrice}
                </Typography>
                <Typography variant="h6" component="span" sx={{ fontWeight: 600, color: '#295D4A' }}>
                  {service.discountPrice}
                </Typography>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body1" sx={{ mb: 3 }}>
                {service.description}
              </Typography>
              <InfoItem>
                <AccessTimeIcon sx={{ mr: 1, color: '#666' }} />
                <Typography variant="body2">Duração: {service.duration}</Typography>
              </InfoItem>
              <InfoItem>
                <StarIcon sx={{ mr: 1, color: '#FFC107' }} />
                <Typography variant="body2">{service.rating} ({service.reviews} avaliações)</Typography>
              </InfoItem>
              <Typography variant="h6" sx={{ fontWeight: 600, mt: 3, mb: 2 }}>
                O que está incluído:
              </Typography>
              {service.includes.map((item, index) => (
                <InfoItem key={index}>
                  <CheckCircleIcon sx={{ mr: 1, color: '#295D4A' }} />
                  <Typography variant="body2">{item}</Typography>
                </InfoItem>
              ))}
            </>
          )}
          {tabValue === 1 && (
            <Box sx={{ py: 4, textAlign: 'center' }}>
              <Typography variant="h6">Avaliações em breve</Typography>
            </Box>
          )}
          {tabValue === 2 && (
            <Box sx={{ py: 4, textAlign: 'center' }}>
              <Typography variant="h6">Informações do prestador em breve</Typography>
            </Box>
          )}
        </Box>
        <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'center', bgcolor: '#fff', borderTop: '1px solid rgba(0,0,0,0.1)', zIndex: 10, mb: 7 }}>
          <Box sx={{ width: '100%', p: 2 }}>
            <Button variant="contained" fullWidth onClick={handleBookNow} sx={{ py: 1.5, borderRadius: 2, backgroundColor: '#295D4A', '&:hover': { backgroundColor: '#1e4435' }, fontSize: '1rem', fontWeight: 600 }}>
              RESERVAR AGORA
            </Button>
          </Box>
        </Box>
      </Box>
    </Slide>
  );
};

export default ServiceDetail;


