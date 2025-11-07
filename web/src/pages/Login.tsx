import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VideoBackground from '../components/VideoBackground';
// Import assets directly for Vite to process them
import logoPath from '../assets/images/logo7030.png';
import {
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  Tabs,
  Tab
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  Email,
  Lock,
  Person
} from '@mui/icons-material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function Login() {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login bypassed');
    navigate('/areas');
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup with:', { signupName, signupEmail, signupPassword });
    navigate('/areas');
  };

  const videoUrl = `${import.meta.env.BASE_URL}video.mp4`;

  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <VideoBackground videoSrc={videoUrl} opacity={0.5} />
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          backgroundColor: 'transparent',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '500px',
          padding: '20px',
          boxSizing: 'border-box',
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            width: '126px', /* 30% smaller than 180px */
            height: 'auto',
            zIndex: 1,
            mb: 4,
          }}
        >
          <img
            src={logoPath}
            alt="70/30 Logo"
            style={{ 
              width: '100%', 
              height: 'auto',
              filter: 'brightness(0) invert(1)', // Make logo white
            }}
          />
        </Box>

        {/* Login/Signup Container */}
        <Box
          sx={{
            width: '90%',
            maxWidth: 400,
            mt: 8,
            p: 3,
            '@media (min-width: 1024px)': {
              mt: 0,
            },
          }}
        >
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="fullWidth"
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: '#FFFFFF',
              },
              '& .Mui-selected': {
                color: '#FFFFFF',
                fontWeight: 'bold',
              },
              '& .MuiTab-root': {
                color: 'rgba(255, 255, 255, 0.7)',
              },
            }}
          >
            <Tab label="Login" />
            <Tab label="Sign Up" />
          </Tabs>

          {/* Login Form */}
          <TabPanel value={tabValue} index={0}>
            <Box component="form" onSubmit={handleLogin}>
              <TextField
                fullWidth
                margin="normal"
                placeholder="Email"
                variant="outlined"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                autoFocus
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email sx={{ color: '#000000' }} />
                    </InputAdornment>
                  ),
                  sx: {
                    '& .MuiInputBase-input': {
                      color: '#000000',
                      fontWeight: 'bold',
                    },
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                      color: '#000000',
                      fontWeight: 'bold',
                      '& input': {
                        fontWeight: 'bold',
                      },
                      '&.Mui-focused': {
                        fontWeight: 'normal',
                        color: '#000000 !important',
                        '& input': {
                          fontWeight: 'normal',
                          color: '#000000 !important'
                        },
                        '& fieldset': {
                          borderColor: '#000000 !important'
                        }
                      }
                    }
                  }
                }}
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '8px',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                    color: '#000000',
                    fontWeight: 'bold',
                    '& input': {
                      fontWeight: 'bold',
                    },
                    '&.Mui-focused': {
                      fontWeight: 'normal',
                      color: '#000000 !important',
                      '& input': {
                        fontWeight: 'normal',
                        color: '#000000 !important'
                      },
                      '& fieldset': {
                        borderColor: '#000000 !important'
                      }
                    }
                  }
                }}
              />
              <TextField
                fullWidth
                margin="normal"
                placeholder="Password"
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock sx={{ color: '#000000' }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleTogglePasswordVisibility}
                        edge="end"
                        sx={{ color: '#000000' }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                  sx: {
                    '& .MuiInputBase-input': {
                      color: '#000000',
                      fontWeight: 'bold',
                    },
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                      color: '#000000',
                      fontWeight: 'bold',
                      '& input': {
                        fontWeight: 'bold',
                      },
                      '&.Mui-focused': {
                        fontWeight: 'normal',
                        color: '#000000 !important',
                        '& input': {
                          fontWeight: 'normal',
                          color: '#000000 !important'
                        },
                        '& fieldset': {
                          borderColor: '#000000 !important'
                        }
                      }
                    }
                  }
                }}
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '8px',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                    color: '#000000',
                    fontWeight: 'bold',
                    '& input': {
                      fontWeight: 'bold',
                    },
                    '&.Mui-focused': {
                      fontWeight: 'normal',
                      color: '#000000 !important',
                      '& input': {
                        fontWeight: 'normal',
                        color: '#000000 !important'
                      },
                      '& fieldset': {
                        borderColor: '#000000 !important'
                      }
                    }
                  }
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: '#295D4A',
                  color: 'white',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: '#C6FF00',
                    color: '#000000',
                  },
                  '&:active': {
                    backgroundColor: '#C6FF00',
                    color: '#000000',
                  },
                  py: 1.5,
                }}
              >
                Enter
              </Button>
              <Typography
                variant="body2"
                align="center"
                sx={{ mt: 1, cursor: 'pointer', color: 'white' }}
              >
                Forgot password?
              </Typography>
            </Box>
          </TabPanel>

          {/* Signup Form */}
          <TabPanel value={tabValue} index={1}>
            <Box component="form" onSubmit={handleSignup}>
              <TextField
                fullWidth
                margin="normal"
                placeholder="Full Name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person sx={{ color: '#000000' }} />
                    </InputAdornment>
                  ),
                  sx: {
                    '& .MuiInputBase-input': {
                      color: '#000000',
                      fontWeight: 'bold',
                    },
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                      color: '#000000',
                      fontWeight: 'bold',
                      '& input': {
                        fontWeight: 'bold',
                      },
                      '&.Mui-focused': {
                        fontWeight: 'normal',
                        color: '#000000 !important',
                        '& input': {
                          fontWeight: 'normal',
                          color: '#000000 !important'
                        },
                        '& fieldset': {
                          borderColor: '#000000 !important'
                        }
                      }
                    }
                  }
                }}
                variant="outlined"
                value={signupName}
                onChange={(e) => setSignupName(e.target.value)}
                required
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '8px',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                    color: '#000000',
                    fontWeight: 'bold',
                    '& input': {
                      fontWeight: 'bold',
                    },
                    '&.Mui-focused': {
                      fontWeight: 'normal',
                      color: '#000000 !important',
                      '& input': {
                        fontWeight: 'normal',
                        color: '#000000 !important'
                      },
                      '& fieldset': {
                        borderColor: '#000000 !important'
                      }
                    }
                  }
                }}
              />
              <TextField
                fullWidth
                margin="normal"
                placeholder="Email"
                variant="outlined"
                type="email"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email sx={{ color: '#000000' }} />
                    </InputAdornment>
                  ),
                  sx: {
                    '& .MuiInputBase-input': {
                      color: '#000000',
                      fontWeight: 'bold',
                    },
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                      color: '#000000',
                      fontWeight: 'bold',
                      '& input': {
                        fontWeight: 'bold',
                      },
                      '&.Mui-focused': {
                        fontWeight: 'normal',
                        color: '#000000 !important',
                        '& input': {
                          fontWeight: 'normal',
                          color: '#000000 !important'
                        },
                        '& fieldset': {
                          borderColor: '#000000 !important'
                        }
                      }
                    }
                  }
                }}
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '8px',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                    color: '#000000',
                    fontWeight: 'bold',
                    '& input': {
                      fontWeight: 'bold',
                    },
                    '&.Mui-focused': {
                      fontWeight: 'normal',
                      color: '#000000 !important',
                      '& input': {
                        fontWeight: 'normal',
                        color: '#000000 !important'
                      },
                      '& fieldset': {
                        borderColor: '#000000 !important'
                      }
                    }
                  }
                }}
              />
              <TextField
                fullWidth
                margin="normal"
                placeholder="Password"
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock sx={{ color: '#000000' }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleTogglePasswordVisibility}
                        edge="end"
                        sx={{ color: '#000000' }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                  sx: {
                    '& .MuiInputBase-input': {
                      color: '#000000',
                      fontWeight: 'bold',
                    },
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                      color: '#000000',
                      fontWeight: 'bold',
                      '& input': {
                        fontWeight: 'bold',
                      },
                      '&.Mui-focused': {
                        fontWeight: 'normal',
                        color: '#000000 !important',
                        '& input': {
                          fontWeight: 'normal',
                          color: '#000000 !important'
                        },
                        '& fieldset': {
                          borderColor: '#000000 !important'
                        }
                      }
                    }
                  }
                }}
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '8px',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                    color: '#000000',
                    fontWeight: 'bold',
                    '& input': {
                      fontWeight: 'bold',
                    },
                    '&.Mui-focused': {
                      fontWeight: 'normal',
                      color: '#000000 !important',
                      '& input': {
                        fontWeight: 'normal',
                        color: '#000000 !important'
                      },
                      '& fieldset': {
                        borderColor: '#000000 !important'
                      }
                    }
                  }
                }}
              />
              <TextField
                fullWidth
                margin="normal"
                placeholder="Confirm Password"
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock sx={{ color: '#000000' }} />
                    </InputAdornment>
                  ),
                  sx: {
                    '& .MuiInputBase-input': {
                      color: '#000000',
                      fontWeight: 'bold',
                    },
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                      color: '#000000',
                      fontWeight: 'bold',
                      '& input': {
                        fontWeight: 'bold',
                      },
                      '&.Mui-focused': {
                        fontWeight: 'normal',
                        color: '#000000 !important',
                        '& input': {
                          fontWeight: 'normal',
                          color: '#000000 !important'
                        },
                        '& fieldset': {
                          borderColor: '#000000 !important'
                        }
                      }
                    }
                  }
                }}
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '8px',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                    color: '#000000',
                    fontWeight: 'bold',
                    '& input': {
                      fontWeight: 'bold',
                    },
                    '&.Mui-focused': {
                      fontWeight: 'normal',
                      color: '#000000 !important',
                      '& input': {
                        fontWeight: 'normal',
                        color: '#000000 !important'
                      },
                      '& fieldset': {
                        borderColor: '#000000 !important'
                      }
                    }
                  }
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: '#295D4A',
                  color: 'white',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: '#1e4535',
                  },
                  borderRadius: 50, // Capsule shape
                  py: 1.5,
                }}
              >
                Create Account
              </Button>
            </Box>
          </TabPanel>
        </Box>
      </Box>
    </div>
  );
}
