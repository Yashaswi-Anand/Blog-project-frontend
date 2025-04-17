import React from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const page_not_found = require('../assets/Images/page_not_found.png');

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 2,
        padding: '50px 0',
        bgcolor: '#fff',
      }}
    >
      {/* <Typography variant="h2" fontWeight="bold" color="text.primary">
        404
      </Typography>
      <Typography variant="h6" color="text.secondary" mb={3}>
        Page not found
      </Typography> */}

      <Box
        component="img"
        src={page_not_found}
        alt="404 Illustration"
        sx={{
          maxWidth: 500,
          width: '100%',
          maxHeight: 500,
          height: 'auto',
          mb: 4,
          marginTop: '3%',
          borderRadius: 2,
        }}
      />

      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={() => navigate('/')}
        sx={{ textTransform: 'none', borderRadius: 4 }}
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default PageNotFound;
