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
    <Box sx={{ 
      backgroundColor: '#B8FFD2', 
      minHeight: '100vh',
      pb: 7 
    }}>
      {/* Header */}
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        p: 2,
        borderBottom: '1px solid rgba(0,0,0,0.1)'
      }}>
        <IconButton onClick={() => navigate(-1)}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" component="h1" sx={{ fontWeight: 500 }}>
          Custom Service
        </Typography>
        <Box sx={{ width: 40 }} /> {/* Empty box for alignment */}
      </Box>

      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography variant="h4" component="h2" sx={{ 
          fontWeight: 700, 
          textAlign: 'center',
          mb: 6
        }}>
          Looking for a service tailored to you?
        </Typography>

        {/* Step 1 */}
        <Box sx={{ display: 'flex', mb: 5, alignItems: 'flex-start' }}>
          <Box sx={{ 
            width: { xs: 50, sm: 60 }, 
            height: { xs: 50, sm: 60 }, 
            borderRadius: '50%', 
            backgroundColor: '#000000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mr: 2,
            fontSize: { xs: '20px', sm: '24px' },
            fontWeight: 600,
            color: '#FFFFFF', // White text on black background
            aspectRatio: '1/1'
          }}>
            1
          </Box>
          <Box>
            <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
              Tell us what you need
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Describe the issue or tasks you'd like help with.
            </Typography>
          </Box>
        </Box>

        {/* Step 2 */}
        <Box sx={{ display: 'flex', mb: 5, alignItems: 'flex-start' }}>
          <Box sx={{ 
            width: { xs: 50, sm: 60 }, 
            height: { xs: 50, sm: 60 }, 
            borderRadius: '50%', 
            backgroundColor: '#000000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mr: 2,
            fontSize: { xs: '20px', sm: '24px' },
            fontWeight: 600,
            color: '#FFFFFF', // White text on black background
            aspectRatio: '1/1'
          }}>
            2
          </Box>
          <Box>
            <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
              We'll match you with the right pro
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Based on your description, we'll assign the best pro or team for the job.
            </Typography>
          </Box>
        </Box>

        {/* Step 3 */}
        <Box sx={{ display: 'flex', mb: 5, alignItems: 'flex-start' }}>
          <Box sx={{ 
            width: { xs: 50, sm: 60 }, 
            height: { xs: 50, sm: 60 }, 
            borderRadius: '50%', 
            backgroundColor: '#000000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mr: 2,
            fontSize: { xs: '20px', sm: '24px' },
            fontWeight: 600,
            color: '#FFFFFF', // White text on black background
            aspectRatio: '1/1'
          }}>
            3
          </Box>
          <Box>
            <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
              What's included
            </Typography>
            <Typography variant="body1" color="text.secondary">
              The minimum booking is one hour. Need more time? It's just €49.90/hour after that.
            </Typography>
          </Box>
        </Box>

        {/* Continue Button */}
        <Button 
          variant="contained" 
          fullWidth 
          sx={{ 
            mt: 4, 
            py: 1.5, 
            borderRadius: 50,
            backgroundColor: '#295D4A', // Dark green from the design guidelines
            color: '#FFFFFF',
            '&:hover': {
              backgroundColor: '#1e4435',
            }
          }}
        >
          CONTINUE
        </Button>

        {/* Progress indicator */}
        <Box sx={{ 
          mt: 3, 
          width: '33%', 
          height: 4, 
          backgroundColor: '#000', 
          borderRadius: 2,
          mx: 'auto'
        }} />
      </Container>
    </Box>
  );
};

export default CustomService;
