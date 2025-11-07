import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Card, CardContent, Avatar, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { styled } from '@mui/material/styles';
import FooterMenu from '../../components/Layout/FooterMenu';
import { useNavigate } from 'react-router-dom';

const Page = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(2.5),
  paddingBottom: theme.spacing(10),
  display: 'flex',
  justifyContent: 'center',
}));

const Container = styled(Box)((_) => ({
  width: '100%',
  maxWidth: 720,
}));

const Header = styled(Card)(({ theme }) => ({
  position: 'relative',
  borderRadius: 16,
  marginBottom: theme.spacing(3),
  color: '#fff',
  backgroundImage: `url(/images/aprentice.png)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  overflow: 'hidden',
  minHeight: 160,
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.75)'
  }
}));

const StatBar = styled(Card)(({ theme }) => ({
  borderRadius: 12,
  marginBottom: theme.spacing(3),
}));

const JobCard = styled(Card)(({ theme }) => ({
  borderRadius: 12,
  marginBottom: theme.spacing(3),
}));

interface MentorAreaProps {
  userData?: any;
}

const MentorArea: React.FC<MentorAreaProps> = ({ userData }) => {
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState<number>(100);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const savedContrast = localStorage.getItem('highContrast');
      const savedFont = localStorage.getItem('fontSize');
      if (savedContrast === 'true') setHighContrast(true);
      if (savedFont) setFontSize(parseInt(savedFont));
    } catch {}
  }, []);

  const toggleContrast = () => {
    const next = !highContrast;
    setHighContrast(next);
    try { localStorage.setItem('highContrast', String(next)); } catch {}
  };

  const increaseFontSize = () => {
    setFontSize(prev => {
      const n = Math.min(150, prev + 10);
      try { localStorage.setItem('fontSize', String(n)); } catch {}
      return n;
    });
  };

  const decreaseFontSize = () => {
    setFontSize(prev => {
      const n = Math.max(80, prev - 10);
      try { localStorage.setItem('fontSize', String(n)); } catch {}
      return n;
    });
  };

  const contactPartner = () => {
    alert('A contactar o aprendiz...');
  };

  const startJob = () => {
    if (window.confirm('Iniciar trabalho agora?\n\nVai registar a sua chegada ao local.\n\nConfirma?')) {
      alert('Trabalho iniciado!\n\nTimer começou\nLocalização registada');
    }
  };

  const acceptJob = (_jobId: string | number) => {
    if (window.confirm('Aceitar este trabalho?')) {
      alert('✅ Trabalho Aceite!');
    }
  };

  return (
    <Page sx={{
      fontSize: `${fontSize}%`,
      ...(highContrast ? { bgcolor: '#000', color: '#fff', '*': { color: 'inherit' } } : {}),
    }}>
      {/* Removed inline control buttons (Contraste / A+ / A-) */}
      <Container>
        <Box sx={{ paddingTop: '5px', paddingLeft: '5px', mb: 1 }}>
          <IconButton
            aria-label="Voltar"
            onClick={() => navigate(-1)}
            size="small"
            sx={{
              width: 24,
              height: 24,
              bgcolor: 'transparent',
              '&:hover': {
                bgcolor: 'rgba(0,0,0,0.08)',
              },
            }}
          >
            <ArrowBackIosNewIcon sx={{ color: '#000', fontSize: 16 }} />
          </IconButton>
        </Box>
        <Header>
          <CardContent sx={{ position: 'relative', zIndex: 1, textAlign: 'right' }}>
            <Box display="flex" alignItems="center" gap={2} mb={1.5} justifyContent="flex-end">
              <Avatar src={userData?.photo || '/images/mentor.png'} alt={userData?.name || 'Sr. Manuel'} sx={{ width: 56, height: 56, border: '2px solid #fff' }} />
              <Box sx={{ textAlign: 'right' }}>
                <Typography variant="h3" fontWeight={700}>70/30</Typography>
                <Typography variant="body2">Olá,</Typography>
                <Typography variant="h5" fontWeight={700}>{userData?.name || 'Sr. Manuel'}</Typography>
              </Box>
            </Box>
            <Typography variant="body1" mt={1} sx={{ textAlign: 'right' }}>
              {userData?.specialty || 'Canalizador'} | {userData?.rating || '4.9'} ({userData?.completedJobs || 47} serviços)
            </Typography>
          </CardContent>
        </Header>

        <StatBar>
          <CardContent>
            <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2}>
              <Box textAlign="center" sx={{ bgcolor: '#26A69A', color: '#FFFFFF', borderRadius: 2, py: 1.5 }}>
                <Typography variant="h6" fontWeight={700} sx={{ color: '#FFFFFF' }}>{userData?.newRequests || 3}</Typography>
                <Typography variant="caption" sx={{ color: '#FFFFFF' }}>Pedidos Novos</Typography>
              </Box>
              <Box textAlign="center" sx={{ bgcolor: '#F4B23E', color: '#FFFFFF', borderRadius: 2, py: 1.5 }}>
                <Typography variant="h6" fontWeight={700} sx={{ color: '#FFFFFF' }}>{userData?.scheduled || 2}</Typography>
                <Typography variant="caption" sx={{ color: '#FFFFFF' }}>Agendados</Typography>
              </Box>
              <Box textAlign="center" sx={{ bgcolor: '#ff4444', color: '#FFFFFF', borderRadius: 2, py: 1.5 }}>
                <Typography variant="h6" fontWeight={700} sx={{ color: '#FFFFFF' }}>{userData?.completed || 47}</Typography>
                <Typography variant="caption" sx={{ color: '#FFFFFF' }}>Concluídos</Typography>
              </Box>
            </Box>
          </CardContent>
        </StatBar>

        <Card sx={{
          borderRadius: 2,
          mb: 3,
          position: 'relative',
          color: '#fff',
          backgroundImage: 'url(/images/aprentice.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden',
          minHeight: 140,
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.75)'
          }
        }}>
          <CardContent sx={{ position: 'relative' }}>
            <Typography fontWeight={600} mb={1.5}>A Sua Equipa</Typography>
            <Box display="flex" alignItems="center" gap={2} mb={1.5}>
              <Avatar src={userData?.partner?.photo || 'https://randomuser.me/api/portraits/men/15.jpg'} alt={userData?.partner?.name || 'Aprendiz'} sx={{ width: 48, height: 48, border: '2px solid #fff' }} />
              <Box>
                <Typography fontWeight={700}>{userData?.partner?.name || 'João Silva'}</Typography>
                <Typography variant="body2" color="text.secondary">Aprendiz ({userData?.partner?.months || 3} meses)</Typography>
              </Box>
            </Box>
            <Button 
              variant="contained" 
              onClick={contactPartner} 
              fullWidth 
              startIcon={<ChatIcon />}
              sx={{
                '&:hover': { bgcolor: '#C6FF00', color: '#000000' },
                '&:active': { bgcolor: '#C6FF00', color: '#000000' }
              }}
            >
              Falar com o {userData?.partner?.name || 'João'}
            </Button>
          </CardContent>
        </Card>

        <Typography variant="h6" fontWeight={600} mb={1}>Próximo Trabalho Agendado</Typography>
        <JobCard sx={{
          position: 'relative',
          color: '#fff',
          backgroundImage: 'url(/images/aprentice.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.75)'
          }
        }}>
          <CardContent sx={{ position: 'relative' }}>
            {userData?.nextJob ? (
              <>
                <Typography>{userData.nextJob.time}</Typography>
                <Typography><WorkOutlineIcon sx={{ verticalAlign: 'middle', mr: 0.5 }} /> {userData.nextJob.type}</Typography>
                <Typography>{userData.nextJob.client}</Typography>
                <Typography>{userData.nextJob.address}</Typography>
                {userData.nextJob.description && (
                  <Typography mt={1}><strong>Descrição:</strong> {userData.nextJob.description}</Typography>
                )}
              </>
            ) : (
              <>
                <Typography>Hoje, 15h00</Typography>
                <Typography><WorkOutlineIcon sx={{ verticalAlign: 'middle', mr: 0.5 }} /> Reparação de Canalização</Typography>
                <Typography>D. Maria Costa</Typography>
                <Typography>Rua da Igreja, 45 - Lavra</Typography>
                <Typography mt={1}><strong>Descrição:</strong> Torneira da cozinha a pingar constantemente.</Typography>
              </>
            )}
            <Box display="flex" gap={1} mt={2}>
              <Button variant="contained" onClick={startJob} startIcon={<PlayArrowIcon />}>Iniciar Trabalho</Button>
              <Button 
                variant="outlined" 
                onClick={() => alert('Ver Detalhes')} 
                startIcon={<InfoOutlinedIcon />}
                sx={{
                  color: '#FFFFFF',
                  borderColor: '#FFFFFF',
                  '&:hover': { borderColor: '#FFFFFF', color: '#FFFFFF' },
                  '& .MuiSvgIcon-root': { color: '#FFFFFF' }
                }}
              >
                Ver Detalhes
              </Button>
            </Box>
          </CardContent>
        </JobCard>

        <Typography variant="h6" fontWeight={600} mb={1}>Novos Pedidos ({userData?.pendingJobs?.length || 3})</Typography>
        <Box display="grid" gridTemplateColumns="1fr" gap={2}>
          {(userData?.pendingJobs || [
            { id: 1, type: 'Reparação Elétrica', time: 'Amanhã, 10h', client: 'Sr. António Pereira', location: 'Lavra' },
            { id: 2, type: 'Instalação Torneira', time: 'Sexta, 14h', client: 'Família Rodrigues', location: 'Lavra' },
          ]).map((job: any) => (
            <Card key={job.id} onClick={() => acceptJob(job.id)} sx={{ cursor: 'pointer' }}>
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography fontWeight={600}><WorkOutlineIcon sx={{ verticalAlign: 'middle', mr: 0.5 }} /> {job.type}</Typography>
                  <Typography variant="body2" color="text.secondary">{job.time}</Typography>
                </Box>
                <Typography variant="body2">{job.client} - {job.location}</Typography>
                  <Box mt={1}><Typography variant="caption">NOVO</Typography></Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Card sx={{ borderRadius: 2, my: 3 }}>
          <CardContent>
            <Typography fontWeight={600}>Rendimentos deste Mês</Typography>
            <Typography variant="h4" fontWeight={700}>€{userData?.earnings?.total || 630}</Typography>
            <Typography variant="body2" color="text.secondary">
              {userData?.earnings?.month || 'Novembro 2025'} (70% de €{userData?.earnings?.totalPair || 900})
            </Typography>
            <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2} mt={1}>
              <Card>
                <CardContent>
                  <Typography variant="h6" fontWeight={700}>{userData?.earnings?.services || 18}</Typography>
                  <Typography variant="caption" color="text.secondary">Serviços</Typography>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <Typography variant="h6" fontWeight={700}>{userData?.earnings?.hours || 54}h</Typography>
                  <Typography variant="caption" color="text.secondary">Horas</Typography>
                </CardContent>
              </Card>
            </Box>
          </CardContent>
        </Card>
      </Container>
      <FooterMenu context="mentor" />
    </Page>
  );
};

export default MentorArea;


