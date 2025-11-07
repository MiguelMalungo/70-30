import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import VideoBackground from '../components/VideoBackground';
import HomeIcon from '@mui/icons-material/Home';
import ElderlyIcon from '@mui/icons-material/AccessibilityNew';
import MentorIcon from '@mui/icons-material/School';
import ApprenticeIcon from '@mui/icons-material/WorkspacePremium';
import { styled } from '@mui/material/styles';

const Page = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  padding: theme.spacing(2.5),
  display: 'block',
}));

const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: 720,
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  bottom: '20vh',
  paddingLeft: theme.spacing(2.5),
  paddingRight: theme.spacing(2.5),
}));

const AreaCard = styled(Card)(() => ({
  borderRadius: 16,
  height: 60,
  backgroundColor: 'rgba(41, 93, 74, 0.8)', // #295D4A at 80% opacity
  color: '#FFFFFF',
  boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
  overflow: 'hidden',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)',
  '& .MuiCardActionArea-root': {
    backgroundColor: 'transparent',
    height: '100%'
  },
  '& .MuiCardContent-root': {
    backgroundColor: 'transparent',
    height: '100%'
  }
}));

const Areas: React.FC = () => {
  const navigate = useNavigate();

  const items = [
    { label: 'Cliente', icon: <HomeIcon />, to: '/app' },
    { label: 'Mentor', icon: <MentorIcon />, to: '/mentor' },
    { label: 'Aprendiz', icon: <ApprenticeIcon />, to: '/apprentice' },
    { label: 'Acompanhado', icon: <ElderlyIcon />, to: '/elderly' },
  ];

  return (
    <Page>
      <VideoBackground videoSrc="/video.mp4" opacity={0.5} />
      <Container>
        <Box textAlign="center" mb={3} sx={{ color: '#FFFFFF', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
          <Typography variant="h2" fontWeight={700} sx={{ fontSize: 'calc(1.25rem + 5px)' }}>Escolha a sua área</Typography>
          <Typography variant="body2">Selecione para continuar</Typography>
        </Box>
        <Box display="grid" gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr' }} gap={2}>
          {items.map((item) => (
            <AreaCard key={item.label}>
              <CardActionArea onClick={() => navigate(item.to)} sx={{ height: '100%', backgroundColor: 'transparent' }}>
                <CardContent sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }}>{item.icon}</Box>
                  <Typography variant="h6" fontWeight={700} sx={{ color: '#FFFFFF' }}>{item.label}</Typography>
                </CardContent>
              </CardActionArea>
            </AreaCard>
          ))}
        </Box>
      </Container>
    </Page>
  );
};

export default Areas;


