import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Divider,
  Button,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField
} from '@mui/material';
import { 
  CreditCard as PaymentsIcon,
  CardGiftcard as PromotionsIcon,
  HelpOutline as HelpIcon,
  AccountBalance as BillingIcon,
  Subscriptions as SubscriptionsIcon,
  Share as ShareIcon,
  Translate as LanguageIcon,
  Logout as LogoutIcon
} from '@mui/icons-material';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [showShareDialog, setShowShareDialog] = useState(false);
  
  const handleCardClick = (section: string) => {
    switch (section) {
      case 'payments':
        navigate('/payments');
        break;
      case 'promotions':
        navigate('/promotions');
        break;
      case 'help':
        navigate('/help');
        break;
      default:
        console.log(`Navigating to ${section}`);
    }
  };
  
  const handleShareCode = () => setShowShareDialog(true);
  const handleCloseDialog = () => setShowShareDialog(false);
  
  const handleSettingsClick = (setting: string) => {
    switch (setting) {
      case 'billing':
        navigate('/billing');
        break;
      case 'subscriptions':
        navigate('/subscriptions');
        break;
      case 'share':
        handleShareCode();
        break;
      case 'language':
        navigate('/language');
        break;
      case 'logout':
        alert('Logging out...');
        navigate('/');
        break;
      default:
        console.log(`Navigating to ${setting}`);
    }
  };

  return (
    <Box sx={{ pb: 2, backgroundColor: '#F5F7FA', minHeight: '100vh' }}>
      <Dialog open={showShareDialog} onClose={handleCloseDialog}>
        <DialogTitle>Partilhar o Seu Código de Referência</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Partilhe este código com os seus amigos e ganhe 50% de desconto na sua próxima reserva quando eles se registarem!
          </DialogContentText>
          <TextField autoFocus margin="dense" id="referral-code" label="O Seu Código de Referência" type="text" fullWidth variant="outlined" value="70-30-FRIEND" InputProps={{ readOnly: true }} sx={{ mt: 2 }} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} sx={{ color: '#295D4A' }}>Cancelar</Button>
          <Button onClick={() => { navigator.clipboard.writeText('70-30-FRIEND'); handleCloseDialog(); alert('Código copiado para a área de transferência!'); }} variant="contained" sx={{ backgroundColor: '#295D4A', '&:hover': { backgroundColor: '#1e4535' }, color: '#FFFFFF' }}>Copiar e Partilhar</Button>
        </DialogActions>
      </Dialog>
      
      <Container maxWidth="sm" sx={{ px: 2, py: 2 }}>
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <Card sx={{ flex: 1, textAlign: 'center', py: 1.5, cursor: 'pointer' }} onClick={() => handleCardClick('payments')}>
            <CardContent sx={{ p: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
                <PaymentsIcon sx={{ fontSize: 32 }} />
              </Box>
              <Typography variant="body2">Pagamentos</Typography>
            </CardContent>
          </Card>
          <Card sx={{ flex: 1, textAlign: 'center', py: 1.5, cursor: 'pointer' }} onClick={() => handleCardClick('promotions')}>
            <CardContent sx={{ p: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
                <PromotionsIcon sx={{ fontSize: 32 }} />
              </Box>
              <Typography variant="body2">Promoções</Typography>
            </CardContent>
          </Card>
          <Card sx={{ flex: 1, textAlign: 'center', py: 1.5, cursor: 'pointer' }} onClick={() => handleCardClick('help')}>
            <CardContent sx={{ p: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
                <HelpIcon sx={{ fontSize: 32 }} />
              </Box>
              <Typography variant="body2">Ajuda</Typography>
            </CardContent>
          </Card>
        </Box>
        
        <List sx={{ bgcolor: 'background.paper', borderRadius: 3, mb: 2 }}>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleSettingsClick('billing')}>
              <ListItemIcon>
                <BillingIcon sx={{ color: '#000' }} />
              </ListItemIcon>
              <ListItemText primary="Faturação" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleSettingsClick('subscriptions')}>
              <ListItemIcon>
                <SubscriptionsIcon sx={{ color: '#000' }} />
              </ListItemIcon>
              <ListItemText primary="Subscrições" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleSettingsClick('share')}>
              <ListItemIcon>
                <ShareIcon sx={{ color: '#000' }} />
              </ListItemIcon>
              <ListItemText primary="Partilhar" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleSettingsClick('language')}>
              <ListItemIcon>
                <LanguageIcon sx={{ color: '#000' }} />
              </ListItemIcon>
              <ListItemText primary="Idioma" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleSettingsClick('logout')}>
              <ListItemIcon>
                <LogoutIcon sx={{ color: '#000' }} />
              </ListItemIcon>
              <ListItemText primary="Terminar Sessão" />
            </ListItemButton>
          </ListItem>
        </List>
        
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Legal
          </Typography>
          <Typography variant="caption" color="text.secondary">
            1.10.27
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Profile;


