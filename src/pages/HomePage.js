import React from 'react'
import  ResponsiveAppBar from '../components/ResponsiveAppBar'
import Cover from '../components/Cover'
import ConstructionIcon from '@mui/icons-material/Construction';
import CalculateIcon from '@mui/icons-material/Calculate';
import Footer from '../components/Footer'
import { Typography, Box, Container } from '@mui/material';
import '../css/styles.css';


import 'react-responsive-carousel/lib/styles/carousel.min.css';

import CarouselComponent from '../components/CarouselComponent';



function HomePage() {
  return (
    <div>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Cover></Cover>
        <Container maxWidth="x1">
      <Box sx={{ textAlign: 'center', marginTop: '3rem', paddingTop: '1rem' }}>
        <Typography variant="h4" color="black" style={{ textTransform: 'capitalize', animation: 'slideUp 1s forwards' }}>
          Some Lorem Ipsum Title
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem' }}>
        <ConstructionIcon sx={{ fontSize: 100, animation: 'slideLeft 1s forwards' }} />
        <Box sx={{ marginLeft: '1rem' }}>
          <Typography variant="h6">Construction</Typography>
          <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
        </Box>
        <CalculateIcon sx={{ fontSize: 100, marginLeft: '2rem', animation: 'slideLeft 1s forwards' }} />
        <Box sx={{ marginLeft: '1rem' }}>
          <Typography variant="h6">Calculation</Typography>
          <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem' }}>
        <ConstructionIcon sx={{ fontSize: 100, animation: 'slideLeft 1s forwards' }} />
        <Box sx={{ marginLeft: '1rem' }}>
          <Typography variant="h6">Construction</Typography>
          <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
        </Box>
        <CalculateIcon sx={{ fontSize: 100, marginLeft: '2rem', animation: 'slideLeft 1s forwards' }} />
        <Box sx={{ marginLeft: '1rem' }}>
          <Typography variant="h6">Calculation</Typography>
          <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
        </Box>
      </Box>
    </Container>

    <Container maxWidth="x1">
      <Box sx={{ textAlign: 'center', marginTop: '6rem', paddingTop: '1rem' }}>
        <Typography variant="h4" color="black" style={{ textTransform: 'capitalize', animation: 'slideUp 1s forwards' }}>
          Some Lorem Ipsum Title
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem' }}>
        <ConstructionIcon sx={{ fontSize: 100, animation: 'slideLeft 1s forwards' }} />
        <Box sx={{ marginLeft: '1rem' }}>
          <Typography variant="h6">Construction</Typography>
          <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
        </Box>
        <CalculateIcon sx={{ fontSize: 100, marginLeft: '2rem', animation: 'slideLeft 1s forwards' }} />
        <Box sx={{ marginLeft: '1rem' }}>
          <Typography variant="h6">Calculation</Typography>
          <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem' }}>
        <ConstructionIcon sx={{ fontSize: 100, animation: 'slideLeft 1s forwards' }} />
        <Box sx={{ marginLeft: '1rem' }}>
          <Typography variant="h6">Construction</Typography>
          <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
        </Box>
        <CalculateIcon sx={{ fontSize: 100, marginLeft: '2rem', animation: 'slideLeft 1s forwards' }} />
        <Box sx={{ marginLeft: '1rem' }}>
          <Typography variant="h6">Calculation</Typography>
          <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
        </Box>
      </Box>
    </Container>

    <Container maxWidth="x1">
    <Box sx={{ textAlign: 'center', marginTop: '6rem', paddingTop: '1rem' }}>
        <Typography variant="h4" color="black" style={{ textTransform: 'capitalize', animation: 'slideUp 1s forwards' }}>
          Some Lorem Ipsum Title
        </Typography>
      </Box>
    </Container>
    <Box >
   <CarouselComponent ></CarouselComponent></Box>
    <Footer ></Footer>
    
    </div>
    
  )
}

export default HomePage