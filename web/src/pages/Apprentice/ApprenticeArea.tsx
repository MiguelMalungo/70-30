import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Card, CardContent, Avatar, IconButton } from '@mui/material';
import SafetyCheckIcon from '@mui/icons-material/SafetyCheck';
import BuildIcon from '@mui/icons-material/Build';
import HandymanIcon from '@mui/icons-material/Handyman';
import LockIcon from '@mui/icons-material/Lock';
import ChatIcon from '@mui/icons-material/Chat';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { styled } from '@mui/material/styles';
import FooterMenu from '../../components/Layout/FooterMenu';
import { useNavigate } from 'react-router-dom';

const assetBaseUrl = import.meta.env.BASE_URL;
const apprenticeHeaderBackground = `url(${assetBaseUrl}images/aprentice.png)`;
const apprenticeAvatarFallback = `${assetBaseUrl}images/aprentice2.png`;
const mentorAvatarFallback = `${assetBaseUrl}images/mentor.png`;

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
  color: '#fff',
  borderRadius: 16,
  marginBottom: theme.spacing(3),
  backgroundImage: apprenticeHeaderBackground,
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
}));


const ProgressBar = styled(Box)(({ theme }) => ({
  height: 10,
  width: '100%',
  backgroundColor: theme.palette.grey[200],
  borderRadius: 999,
  overflow: 'hidden',
}));

const ProgressFill = styled(Box)(({ theme }) => ({
  height: '100%',
  backgroundColor: theme.palette.secondary.main,
}));

const StatCard = styled(Card)((_) => ({
  borderRadius: 12,
  textAlign: 'center',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  margin: theme.spacing(3, 0, 1.5),
}));

interface ApprenticeAreaProps {
  userData?: any;
}

const ApprenticeArea: React.FC<ApprenticeAreaProps> = ({ userData }) => {
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

  const contactMentor = () => {
    alert('💬 A contactar o mentor...\n\n📞 O seu mentor vai ligar-lhe dentro de instantes.');
  };

  const startJob = () => {
    if (window.confirm('▶️ Iniciar trabalho agora?\n\nVai registar a sua chegada ao local.\n\nConfirma?')) {
      alert('✅ Trabalho Iniciado!\n\n⏱️ Timer começou\n📍 Localização registada');
    }
  };

  const viewTrainingModule = (module: string) => {
    alert(`📚 MÓDULO DE FORMAÇÃO\n\n${module}\n\nConteúdo em desenvolvimento...\n\nEm breve terá acesso a vídeos e tutoriais práticos!`);
  };

  const progress = userData?.learningProgress ?? 45;

  return (
    <Page sx={{
      fontSize: `${fontSize}%`,
      ...(highContrast ? {
        bgcolor: '#000',
        color: '#fff',
        '*': { color: 'inherit' }
      } : {}),
    }}>
      {/* Removed floating control buttons (contraste / A+ / A-) */}
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
          <CardContent sx={{ position: 'relative', zIndex: 1 }}>
            <Box display="flex" alignItems="center" gap={2} mb={1.5}>
              <Avatar src={userData?.photo || apprenticeAvatarFallback} alt={userData?.name || 'João Silva'} sx={{ width: 56, height: 56, border: '2px solid #fff' }} />
              <Box>
                <Typography variant="h3" fontWeight={700}>70/30</Typography>
                <Typography variant="body2">Olá,</Typography>
                <Typography variant="h5" fontWeight={700}>{userData?.name || 'João Silva'}</Typography>
              </Box>
            </Box>
            <Typography variant="body1" mt={1}>
              A Aprender: {userData?.learning || 'Canalização'} | {userData?.monthsLearning || 3} meses
            </Typography>
          </CardContent>
        </Header>

        <Card sx={{ borderRadius: 2, mb: 3 }}>
          <CardContent>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
              <Typography className="progress-label" fontWeight={600}>Progresso de Aprendizagem</Typography>
              <Typography fontWeight={700}>{progress}%</Typography>
            </Box>
            <ProgressBar>
              <ProgressFill sx={{ width: `${progress}%` }} />
            </ProgressBar>
            <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2} mt={1.5}>
              <StatCard sx={{ bgcolor: '#26A69A', color: '#FFFFFF' }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" fontWeight={700} sx={{ color: '#FFFFFF' }}>{userData?.jobsCompleted || 18}</Typography>
                  <Typography variant="caption" sx={{ color: '#FFFFFF' }}>Trabalhos</Typography>
                </CardContent>
              </StatCard>
              <StatCard sx={{ bgcolor: '#F4B23E', color: '#FFFFFF' }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" fontWeight={700} sx={{ color: '#FFFFFF' }}>{userData?.hoursLearned || 54}h</Typography>
                  <Typography variant="caption" sx={{ color: '#FFFFFF' }}>Horas</Typography>
                </CardContent>
              </StatCard>
              <StatCard sx={{ bgcolor: '#ff4444', color: '#FFFFFF' }}>
                <CardContent sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography align="center" variant="h6" fontWeight={700} sx={{ color: '#FFFFFF', width: '100%' }}>{userData?.skillsLearned || 12}</Typography>
                  <Typography align="center" variant="caption" sx={{ color: '#FFFFFF', width: '100%' }}>Competências</Typography>
                </CardContent>
              </StatCard>
            </Box>
          </CardContent>
        </Card>

        <Card sx={{
          borderRadius: 2,
          mb: 3,
          position: 'relative',
          color: '#fff',
          backgroundImage: apprenticeHeaderBackground,
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
            <Typography fontWeight={600} mb={1.5}>O Seu Mentor</Typography>
            <Box display="flex" alignItems="center" gap={2} mb={1.5}>
              <Avatar src={userData?.mentor?.photo || mentorAvatarFallback} alt={userData?.mentor?.name || 'Mentor'} sx={{ width: 48, height: 48, border: '2px solid #fff' }} />
              <Box>
                <Typography fontWeight={700}>{userData?.mentor?.name || 'Sr. Manuel'}</Typography>
                <Typography variant="body2" color="inherit">{userData?.mentor?.years || 40} anos de experiência | {userData?.mentor?.rating || '4.9'}</Typography>
              </Box>
            </Box>
            <Button 
              variant="contained" 
              onClick={contactMentor} 
              fullWidth 
              startIcon={<ChatIcon />}
              sx={{
                '&:hover': { bgcolor: '#C6FF00', color: '#000000' },
                '&:active': { bgcolor: '#C6FF00', color: '#000000' }
              }}
            >
              Falar com o Sr. {userData?.mentor?.name || 'Manuel'}
            </Button>
          </CardContent>
        </Card>

        <SectionTitle variant="h6">Próximo Trabalho</SectionTitle>
        <Card sx={{ borderRadius: 2, mb: 3 }}>
          <CardContent>
            <Typography>Hoje, 15h00</Typography>
            <Typography>Reparação de Canalização</Typography>
            <Typography>D. Maria Costa</Typography>
            <Typography>Rua da Igreja, 45 - Lavra</Typography>
            <Box mt={2}>
              <Typography fontWeight={600}>O Que Vai Aprender:</Typography>
              <Box component="ul" sx={{ pl: 3, mt: 1 }}>
                <li>Substituição de juntas em torneiras</li>
                <li>Identificação de tipos de válvulas</li>
                <li>Uso correto de chave inglesa</li>
              </Box>
            </Box>
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
        </Card>

        <SectionTitle variant="h6">Formação Disponível</SectionTitle>
        <Box display="grid" gridTemplateColumns="1fr" gap={2}>
            <Card onClick={() => viewTrainingModule('Segurança no Trabalho')} sx={{ cursor: 'pointer' }}>
              <CardContent>
                <Box display="flex" gap={2} alignItems="center">
                  <SafetyCheckIcon />
                  <Box flex={1}>
                    <Typography fontWeight={600}>Segurança no Trabalho</Typography>
                    <ProgressBar sx={{ mt: 1 }}><ProgressFill sx={{ width: '100%' }} /></ProgressBar>
                  <Typography variant="caption">Concluído</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          <Card onClick={() => viewTrainingModule('Canalização Básica')} sx={{ cursor: 'pointer', outline: '2px solid', outlineColor: 'divider' }}>
            <CardContent>
              <Box display="flex" gap={2} alignItems="center">
                <BuildIcon />
                <Box flex={1}>
                  <Typography fontWeight={600}>Canalização Básica</Typography>
                  <ProgressBar sx={{ mt: 1 }}><ProgressFill sx={{ width: '65%' }} /></ProgressBar>
                  <Typography variant="caption">65% - Em curso</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
          <Card onClick={() => viewTrainingModule('Ferramentas e Equipamentos')} sx={{ cursor: 'pointer' }}>
            <CardContent>
              <Box display="flex" gap={2} alignItems="center">
                <HandymanIcon />
                <Box flex={1}>
                  <Typography fontWeight={600}>Ferramentas e Equipamentos</Typography>
                  <ProgressBar sx={{ mt: 1 }}><ProgressFill sx={{ width: '30%' }} /></ProgressBar>
                  <Typography variant="caption">30% - Iniciado</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
          <Card sx={{ bgcolor: 'grey.100' }}>
            <CardContent>
              <Box display="flex" gap={2} alignItems="center">
                <LockIcon />
                <Box flex={1}>
                  <Typography fontWeight={600}>Instalações Avançadas</Typography>
                  <Typography variant="caption">Bloqueado - Complete módulo anterior</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>

        <Card sx={{ borderRadius: 2, my: 3 }}>
          <CardContent>
            <Typography fontWeight={600}>Rendimentos deste Mês</Typography>
            <Typography variant="h4" fontWeight={700}>€{userData?.earnings?.total || 270}</Typography>
            <Typography variant="body2" color="text.secondary">
              {userData?.earnings?.month || 'Novembro 2025'} (30% de €{userData?.earnings?.totalPair || 900})
            </Typography>
            <Typography variant="body2" mt={1}>💡 À medida que aprende, a sua percentagem aumenta!</Typography>
          </CardContent>
        </Card>

        <SectionTitle variant="h6">Aprendizagens Recentes</SectionTitle>
        <Box display="grid" gridTemplateColumns="1fr" gap={2}>
          {[1,2,3].map((i) => (
            <Card key={i}>
              <CardContent>
                <Box display="flex" gap={2}>
                  <CheckCircleIcon color="success" />
                  <Box>
                    <Typography variant="body2" color="text.secondary">{i === 1 ? 'Ontem' : i === 2 ? '3 dias atrás' : 'Semana passada'}</Typography>
                    <Typography fontWeight={600}>{i === 1 ? 'Substituição de torneira' : i === 2 ? 'Leitura de esquemas' : 'Uso de ferramentas'}</Typography>
                    <Typography variant="body2">{i === 1 ? 'Aprendi a identificar diferentes tipos de torneiras e a substituir juntas danificadas.' : i === 2 ? 'Aprendi a ler esquemas de canalização e a identificar componentes no diagrama.' : 'Pratiquei o uso correto de chaves inglesas, alicates e vedantes.'}</Typography>
                    <Typography variant="body2">Com: {userData?.mentor?.name || 'Sr. Manuel'}</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
      <FooterMenu context="apprentice" />
    </Page>
  );
};

export default ApprenticeArea;


