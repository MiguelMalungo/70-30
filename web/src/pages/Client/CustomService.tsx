import React from 'react';
import { 
  Box, 
  Typography, 
  Button,
  Container,
  IconButton
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const CustomService: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ backgroundColor: '#B8FFD2', minHeight: '100vh', pb: 7 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
        <IconButton onClick={() => navigate(-1)}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" component="h1" sx={{ fontWeight: 500 }}>
          Serviço Personalizado
        </Typography>
        <Box sx={{ width: 40 }} />
      </Box>

      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 700, textAlign: 'center', mb: 6 }}>
          Procura um serviço feito à sua medida?
        </Typography>

        <Box sx={{ display: 'flex', mb: 5, alignItems: 'flex-start' }}>
          <Box sx={{ width: { xs: 50, sm: 60 }, height: { xs: 50, sm: 60 }, borderRadius: '50%', backgroundColor: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 2, fontSize: { xs: '20px', sm: '24px' }, fontWeight: 600, color: '#FFFFFF', aspectRatio: '1/1' }}>
            1
          </Box>
          <Box>
            <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
              Diga-nos o que precisa
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Descreva o problema ou as tarefas com que precisa de ajuda.
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', mb: 5, alignItems: 'flex-start' }}>
          <Box sx={{ width: { xs: 50, sm: 60 }, height: { xs: 50, sm: 60 }, borderRadius: '50%', backgroundColor: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 2, fontSize: { xs: '20px', sm: '24px' }, fontWeight: 600, color: '#FFFFFF', aspectRatio: '1/1' }}>
            2
          </Box>
          <Box>
            <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
              Vamos encontrar o profissional certo
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Com base na sua descrição, vamos atribuir o melhor profissional ou equipa para o trabalho.
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', mb: 5, alignItems: 'flex-start' }}>
          <Box sx={{ width: { xs: 50, sm: 60 }, height: { xs: 50, sm: 60 }, borderRadius: '50%', backgroundColor: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 2, fontSize: { xs: '20px', sm: '24px' }, fontWeight: 600, color: '#FFFFFF', aspectRatio: '1/1' }}>
            3
          </Box>
          <Box>
            <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
              O que está incluído
            </Typography>
            <Typography variant="body1" color="text.secondary">
              A reserva mínima é de uma hora. Precisa de mais tempo? São apenas €49.90/hora adicional.
            </Typography>
          </Box>
        </Box>

        <Button variant="contained" fullWidth sx={{ mt: 4, py: 1.5, borderRadius: 50, backgroundColor: '#295D4A', color: '#FFFFFF', '&:hover': { backgroundColor: '#1e4435' } }}>
          CONTINUAR
        </Button>
        <Box sx={{ mt: 3, width: '33%', height: 4, backgroundColor: '#000', borderRadius: 2, mx: 'auto' }} />
      </Container>
    </Box>
  );
};

export default CustomService;


