import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Card, Avatar, IconButton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import MicIcon from '@mui/icons-material/Mic';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import BookIcon from '@mui/icons-material/Book';
import { styled } from '@mui/material/styles';
import '../../animations.css';
import FooterMenu from '../../components/Layout/FooterMenu';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom';

const assetBaseUrl = import.meta.env.BASE_URL;
const elderlyAvatarFallback = `${assetBaseUrl}images/mentor.png`;

const Page = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: '#ffffff',
  padding: theme.spacing(2.5),
  paddingTop: 0,
  paddingBottom: theme.spacing(10),
  display: 'flex',
  justifyContent: 'center',
  color: '#000',
  overflowX: 'hidden',
}));

const Container = styled(Box)((_) => ({
  width: '100%',
  maxWidth: 720,
  position: 'relative',
  overflow: 'visible',
}));

// Decorative blob shape
const BlobShape = styled(Box)((_) => ({
  position: 'absolute',
  borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
  background: 'linear-gradient(135deg, #ff4444 0%, #ff6666 100%)',
  opacity: 0.8,
  zIndex: 0,
}));

// Profile section card
const ProfileCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#2a2a2a',
  borderRadius: '0 0 0 48px',
  padding: theme.spacing(3),
  paddingTop: theme.spacing(8),
  paddingLeft: theme.spacing(3),
  marginBottom: theme.spacing(3),
  marginTop: -theme.spacing(6),
  marginLeft: `-${theme.spacing(2.5)}`,
  marginRight: `-${theme.spacing(2.5)}`,
  width: `calc(100% + ${theme.spacing(5)})`,
  position: 'relative',
  zIndex: 1,
  overflow: 'visible',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
}));

// Profile section
const ProfileSection = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  textAlign: 'right',
  width: '100%',
  position: 'relative',
  zIndex: 3,
}));

// Health Report Card
const HealthReportCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#fff',
  borderRadius: 20,
  marginBottom: theme.spacing(3),
  padding: theme.spacing(2),
  paddingLeft: theme.spacing(1.5),
  paddingRight: theme.spacing(1.5),
  position: 'relative',
  zIndex: 1,
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
}));

// Today's Task Item
const TaskItem = styled(Card)(({ theme }) => ({
  borderRadius: 16,
  padding: theme.spacing(2),
  marginBottom: theme.spacing(1.5),
  color: '#fff',
  position: 'relative',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

interface ElderlyAssistedAreaProps {
  userData?: any;
}

const ElderlyAssistedArea: React.FC<ElderlyAssistedAreaProps> = ({ userData }) => {
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState<number>(100);
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Caminhada Matinal', time: '6:30 - 7:00', completed: false, color: '#26A69A' },
    { id: 2, title: 'Verificar Pressão Arterial', time: '11:00', completed: true, color: '#F4B23E' },
    { id: 3, title: 'Ligar aos Netos', time: '15:00', completed: false, color: '#0E79B2' },
    { id: 4, title: 'Tomar Medicação', time: '20:00', completed: false, color: '#26A69A' },
    { id: 5, title: 'Exercício da Tarde', time: '18:00', completed: false, color: '#F4B23E' },
  ]);

  useEffect(() => {
    try {
      const savedContrast = localStorage.getItem('highContrast');
      const savedFont = localStorage.getItem('fontSize');
      if (savedContrast === 'true') setHighContrast(true);
      if (savedFont) setFontSize(parseInt(savedFont));
    } catch {}
  }, []);

  // Sample data
  const profileData = {
    name: userData?.name || 'José Silva',
  age: userData?.age || 84,
    location: userData?.location || 'Porto',
    avatar: userData?.avatar || elderlyAvatarFallback,
  };

  const activateSOS = () => {
    if (window.confirm('⚠️ ATENÇÃO!\n\nVai contactar os serviços de emergência e a sua família.\n\nConfirma que necessita de ajuda urgente?')) {
      alert('🚨 EMERGÊNCIA ATIVADA!\n\n✅ Família contactada\n✅ Serviços de emergência notificados\n✅ Assistente foi alertado\n\nAjuda a caminho!');
    }
  };

  const contactAssistant = () => {
    alert('💬 A chamar assistente...\n\n📞 O assistente vai ligar-lhe dentro de instantes.');
  };

  const toggleTask = (taskId: number) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const completedTasks = tasks.filter(t => t.completed).length;

  return (
    <Page sx={{
      fontSize: `${fontSize}%`,
      ...(highContrast ? { bgcolor: '#000', color: '#fff', '*': { color: 'inherit' } } : {}),
    }}>
      <Container>
        <Box
          sx={{
            position: 'absolute',
            top: 16,
            left: 16,
            zIndex: 10,
          }}
        >
          <IconButton
            aria-label="Voltar"
            onClick={() => navigate(-1)}
            size="small"
            sx={{
              width: 24,
              height: 24,
              bgcolor: 'rgba(255,255,255,0.1)',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.2)',
              },
            }}
          >
            <ArrowBackIosNewIcon sx={{ color: '#FFFFFF', fontSize: 16 }} />
          </IconButton>
        </Box>
        {/* Decorative blob shapes */}
        <BlobShape
          className="blob-animation"
          sx={{
            top: 50,
            left: -20,
            width: 120,
            height: 120,
            zIndex: 2,
          }}
        />
        <BlobShape
          className="blob-animation"
          sx={{
            top: 110,
            left: 40,
            width: 100,
            height: 100,
            background: 'linear-gradient(135deg, #F9A825 0%, #F57F17 100%)',
            animationDelay: '2s',
            zIndex: 2,
          }}
        />

        {/* Profile Section */}
        <ProfileCard>
          <ProfileSection>
            <Avatar
              src={profileData.avatar}
              alt={profileData.name}
              sx={{
                width: 100,
                height: 100,
                border: '4px solid #fff',
                mb: 2,
              }}
            />
            <Typography variant="h6" fontWeight={700} sx={{ color: '#fff', mb: 0.5 }}>
              {profileData.name}
            </Typography>
            <Typography variant="body1" sx={{ color: '#fff', opacity: 0.9 }}>
              {profileData.age} anos . {profileData.location}
            </Typography>
          </ProfileSection>
        </ProfileCard>

        {/* Health Report Card with Action Buttons */}
        <HealthReportCard>
          <Box display="flex" flexDirection="column" gap={2}>
            <Box display="grid" gridTemplateColumns="1fr 1fr 1fr" gap={1} sx={{ overflow: 'visible' }}>
              <Button
                variant="contained"
                onClick={() => alert('Ver Agenda')}
            sx={{
                  bgcolor: '#26A69A',
                  color: '#fff',
                  borderRadius: 2,
                  py: 2,
                  textTransform: 'none',
                  fontWeight: 600,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                  width: '105%',
                  justifySelf: 'center',
                  '&:hover': {
                    bgcolor: '#1e8f84',
                  },
                }}
              >
                <BookIcon sx={{ fontSize: 32, color: '#fff' }} />
                <Typography variant="body2" fontWeight={600} sx={{ color: '#fff' }}>
                  Agenda
                </Typography>
              </Button>
              <Button
                variant="contained"
                onClick={contactAssistant}
                sx={{
                  bgcolor: '#F4B23E',
                  color: '#fff',
                  borderRadius: 2,
                  py: 2,
                  textTransform: 'none',
                  fontWeight: 600,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                  width: '105%',
                  justifySelf: 'center',
                  '&:hover': {
                    bgcolor: '#D99930',
                  },
                }}
              >
                <MicIcon sx={{ fontSize: 32, color: '#fff' }} />
                <Typography variant="body2" fontWeight={600} sx={{ color: '#fff' }}>
                  Conversar
                </Typography>
              </Button>
              <Button
                variant="contained"
                onClick={activateSOS}
                sx={{
                  bgcolor: '#ff4444',
                  color: '#fff',
                  borderRadius: 2,
                  py: 2,
                  textTransform: 'none',
                  fontWeight: 600,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                  width: '105%',
                  justifySelf: 'center',
                  '&:hover': {
                    bgcolor: '#cc0000',
                  },
                }}
              >
                <LocalHospitalIcon sx={{ fontSize: 32, color: '#fff' }} />
                <Typography variant="body2" fontWeight={600} sx={{ color: '#fff' }}>
                  Emergência
                </Typography>
              </Button>
            </Box>
          </Box>
        </HealthReportCard>

        {/* My Tasks Section */}
        <Box sx={{ mb: 3, position: 'relative', zIndex: 1 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6" fontWeight={700} sx={{ color: '#000', width: '100%' }}>
              Já fez o seu passeio hoje?
            </Typography>
          </Box>
          <Box display="flex" gap={1.5} mb={3} sx={{ width: '100%' }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#8B0000',
                color: '#fff',
                borderRadius: 2,
                px: 2.5,
                py: 1,
                textTransform: 'none',
                fontWeight: 700,
                flex: 1,
                minWidth: 0,
                '&:hover': { bgcolor: '#6A0000' },
              }}
            >
              Sim, fiz
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#9E9E9E',
                color: '#fff',
                borderRadius: 2,
                px: 2.5,
                py: 1,
                textTransform: 'none',
                fontWeight: 700,
                flex: 1,
                minWidth: 0,
                '&:hover': { bgcolor: '#7E7E7E' },
              }}
            >
              Ainda não
            </Button>
          </Box>

          {/* Category summary cards removed as requested */}
        </Box>

        {/* Today's Tasks Section */}
        <Box sx={{ mb: 6, position: 'relative', zIndex: 1 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6" fontWeight={700} sx={{ color: '#000' }}>
              Tarefas de Hoje
            </Typography>
            <Typography variant="body2" sx={{ color: '#000', opacity: 0.8 }}>
              {completedTasks}/{tasks.length} Concluídas
            </Typography>
          </Box>

          <Box>
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                onClick={() => toggleTask(task.id)}
                sx={{
                  bgcolor: task.color,
                  cursor: 'pointer',
                  transition: 'transform 0.2s, opacity 0.2s',
                  '&:hover': {
                    transform: 'translateX(4px)',
                  },
                  opacity: task.completed ? 0.8 : 1,
                }}
              >
                <Box display="flex" alignItems="center" gap={2} flex={1}>
                  <Box
                    sx={{
                      width: 4,
                      height: 40,
                      bgcolor: '#fff',
                      borderRadius: 2,
                    }}
                  />
                  <Box>
                    <Typography variant="h6" fontWeight={600} sx={{ color: '#fff', mb: 0.5 }}>
                      {task.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#fff', opacity: 0.9 }}>
                      {task.time}
                    </Typography>
                  </Box>
                </Box>
                {task.completed ? (
                  <CheckCircleIcon sx={{ color: '#fff', fontSize: 28 }} />
                ) : (
                  <RadioButtonUncheckedIcon sx={{ color: '#fff', fontSize: 28 }} />
                )}
              </TaskItem>
          ))}
          </Box>
        </Box>
      </Container>
      <FooterMenu context="elderly" />
    </Page>
  );
};

export default ElderlyAssistedArea;


