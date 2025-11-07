import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
  Mic as MicIcon,
  WorkOutline as WorkIcon,
  School as SchoolIcon,
  WorkspacePremium as ApprenticeIcon,
  CardMembership as CertificatesIcon,
  AccessibilityNew as ElderlyIcon,
  CalendarMonth as CalendarIcon,
  DirectionsWalk as ActivitiesIcon,
  Assessment as ReportsIcon,
  Chat as ChatIcon,
  HelpOutline as HelpIcon,
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
  '&.recording': {
    backgroundColor: '#ff4444',
    animation: 'pulse 1.5s ease-in-out infinite',
  },
  width: 56,
  height: 56,
  boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
  '@keyframes pulse': {
    '0%, 100%': {
      transform: 'translateX(-50%) scale(1)',
    },
    '50%': {
      transform: 'translateX(-50%) scale(1.1)',
    },
  },
}));

interface FooterMenuProps {
  context?: 'client' | 'apprentice' | 'mentor' | 'elderly';
}

const FooterMenu: React.FC<FooterMenuProps> = ({ context = 'client' }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isRecording, setIsRecording] = useState(false);

  // Get navigation items based on context
  const getNavigationItems = () => {
    switch (context) {
      case 'client':
        return [
          { label: 'Home', icon: <HomeIcon />, path: '/app', value: 0 },
          { label: 'Search', icon: <SearchIcon />, path: '/app/search', value: 1 },
          { label: 'Orders', icon: <OrdersIcon />, path: '/app/orders', value: 2 },
          { label: 'Profile', icon: <ProfileIcon />, path: '/app/profile', value: 3 },
        ];
      case 'apprentice':
        return [
          { label: 'Início', icon: <HomeIcon />, path: '/apprentice', value: 0 },
          { label: 'Formação', icon: <SchoolIcon />, path: '/apprentice/training', value: 1 },
          { label: 'Certificados', icon: <CertificatesIcon />, path: '/apprentice/certificates', value: 2 },
          { label: 'Perfil', icon: <ProfileIcon />, path: '/apprentice/profile', value: 3 },
        ];
      case 'mentor':
        return [
          { label: 'Início', icon: <HomeIcon />, path: '/mentor', value: 0 },
          { label: 'Trabalhos', icon: <WorkIcon />, path: '/mentor/jobs', value: 1 },
          { label: 'Certificados', icon: <CertificatesIcon />, path: '/mentor/certificates', value: 2 },
          { label: 'Perfil', icon: <ProfileIcon />, path: '/mentor/profile', value: 3 },
        ];
      case 'elderly':
        return [
          { label: 'Início', icon: <HomeIcon />, path: '/elderly', value: 0 },
          { label: 'Agenda', icon: <CalendarIcon />, path: '/elderly/calendar', value: 1 },
          { label: 'Actividades', icon: <ActivitiesIcon />, path: '/elderly/activities', value: 2 },
          { label: 'Perfil', icon: <ProfileIcon />, path: '/elderly/profile', value: 3 },
        ];
      default:
        return [];
    }
  };

  const navigationItems = getNavigationItems();

  // Determine current value based on pathname
  const getCurrentValue = () => {
    const path = location.pathname;
    const item = navigationItems.find(item => path.startsWith(item.path));
    return item ? item.value : 0;
  };

  const [value, setValue] = React.useState(getCurrentValue());

  // Update value when location changes
  React.useEffect(() => {
    setValue(getCurrentValue());
  }, [location.pathname]);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    const item = navigationItems.find(item => item.value === newValue);
    if (item) {
      navigate(item.path);
    }
  };

  const handleMicClick = () => {
    if (!isRecording) {
      setIsRecording(true);
      // Start voice recognition
      if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.lang = 'pt-PT';
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript.toLowerCase();
          handleVoiceCommand(transcript);
          setIsRecording(false);
        };

        recognition.onerror = () => {
          setIsRecording(false);
          alert('Erro ao reconhecer voz. Por favor, tente novamente.');
        };

        recognition.onend = () => {
          setIsRecording(false);
        };

        recognition.start();
      } else {
        setIsRecording(false);
        alert('O seu navegador não suporta reconhecimento de voz.');
      }
    } else {
      setIsRecording(false);
    }
  };

  const handleVoiceCommand = (command: string) => {
    // Voice commands based on context
    const lowerCommand = command.toLowerCase();

    if (context === 'client') {
      if (lowerCommand.includes('início') || lowerCommand.includes('home')) {
        navigate('/app');
      } else if (lowerCommand.includes('pesquisar') || lowerCommand.includes('procurar') || lowerCommand.includes('search')) {
        navigate('/app/search');
      } else if (lowerCommand.includes('encomendas') || lowerCommand.includes('pedidos') || lowerCommand.includes('orders')) {
        navigate('/app/orders');
      } else if (lowerCommand.includes('perfil') || lowerCommand.includes('conta') || lowerCommand.includes('profile')) {
        navigate('/app/profile');
      } else if (lowerCommand.includes('categoria') || lowerCommand.includes('categorias') || lowerCommand.includes('category')) {
        navigate('/app/categories');
      } else if (lowerCommand.includes('serviço') || lowerCommand.includes('service')) {
        navigate('/app/services');
      }
    } else if (context === 'apprentice') {
      if (lowerCommand.includes('início') || lowerCommand.includes('home')) {
        navigate('/apprentice');
      } else if (lowerCommand.includes('formação') || lowerCommand.includes('treino')) {
        navigate('/apprentice/training');
      } else if (lowerCommand.includes('certificados') || lowerCommand.includes('certificado')) {
        navigate('/apprentice/certificates');
      } else if (lowerCommand.includes('perfil')) {
        navigate('/apprentice/profile');
      }
    } else if (context === 'mentor') {
      if (lowerCommand.includes('início') || lowerCommand.includes('home')) {
        navigate('/mentor');
      } else if (lowerCommand.includes('trabalho') || lowerCommand.includes('serviço')) {
        navigate('/mentor/jobs');
      } else if (lowerCommand.includes('certificados') || lowerCommand.includes('certificado')) {
        navigate('/mentor/certificates');
      } else if (lowerCommand.includes('perfil')) {
        navigate('/mentor/profile');
      }
    } else if (context === 'elderly') {
      if (lowerCommand.includes('início') || lowerCommand.includes('home')) {
        navigate('/elderly');
      } else if (lowerCommand.includes('agenda') || lowerCommand.includes('calendário')) {
        navigate('/elderly/calendar');
      } else if (lowerCommand.includes('actividades') || lowerCommand.includes('atividades') || lowerCommand.includes('activities')) {
        navigate('/elderly/activities');
      } else if (lowerCommand.includes('perfil')) {
        navigate('/elderly/profile');
      } else if (lowerCommand.includes('emergência') || lowerCommand.includes('sos')) {
        alert('🚨 EMERGÊNCIA ATIVADA!\n\n✅ Família contactada\n✅ Serviços de emergência notificados');
      }
    }
  };

  return (
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
                  color: '#999',
                  '& .MuiSvgIcon-root': {
                    color: '#295D4A',
                  },
                },
                minWidth: 0,
                padding: 0,
                maxWidth: 'none',
                fontSize: '0.7rem',
                paddingTop: '8px',
                '& .MuiSvgIcon-root': {
                  color: '#999',
                },
              },
              '& .MuiBottomNavigationAction-root:hover': {
                '& .MuiSvgIcon-root': {
                  color: '#295D4A',
                },
              },
              '& .MuiBottomNavigation-indicator': {
                display: 'none',
              },
            }}
          >
            {navigationItems.slice(0, 2).map((item) => (
              <BottomNavigationAction 
                key={item.value}
                label={item.label} 
                icon={item.icon} 
                sx={{ flexGrow: 1 }}
                onClick={() => {
                  setValue(item.value);
                  navigate(item.path);
                }}
              />
            ))}
            <Box sx={{ flexGrow: 1, minWidth: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
            {navigationItems.slice(2, 4).map((item) => (
              <BottomNavigationAction 
                key={item.value}
                label={item.label} 
                icon={item.icon} 
                sx={{ flexGrow: 1 }}
                onClick={() => {
                  setValue(item.value);
                  navigate(item.path);
                }}
              />
            ))}
          </BottomNavigation>
          
          <StyledFab 
            className={isRecording ? 'recording' : ''}
            aria-label="comando de voz" 
            onClick={handleMicClick}
          >
            <MicIcon sx={{ fontSize: 24 }} />
          </StyledFab>
        </Box>
      </Paper>
    </Box>
  );
};

export default FooterMenu;

