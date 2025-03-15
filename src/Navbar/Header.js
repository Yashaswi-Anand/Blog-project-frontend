import React from 'react';
import { Box } from '@mui/material';
import HeaderTitle from './HeaderTitle';

const Header = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '1vh',
        // backgroundColor: '#fff', 
        overflow: 'hidden',
        overflowX: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        // padding: '10px'
      }}
    >
      {/* Abstract Shapes */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '250px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.7), rgba(0,0,255,0.3))',
          filter: 'blur(60px)',
          borderRadius: '50%',
        }}
      />
      {/* <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '200px',
          height: '200px',
          background: 'linear-gradient(135deg, rgba(0,0,255,0.4), rgba(255,255,255,0.2))',
          filter: 'blur(50px)',
          borderRadius: '20%',
        }}
      /> */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '15%',
          left: '20%',
          width: '300px',
          height: '300px',
          background: 'linear-gradient(135deg, rgba(0,0,255,0.3), rgba(255,255,255,0.3))',
          filter: 'blur(70px)',
          borderRadius: '30%',
        }}
      />
      {/* <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '250px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(0,0,255,0.2), rgba(255,255,255,0.4))',
          filter: 'blur(60px)',
          borderRadius: '50%',
        }}
      /> */}

      {/* Title Section */}
      <HeaderTitle/>
    </Box>
  );
};
export default Header