import { Box, Fab } from '@mui/material';
import React from 'react';
import Header from './components/Header/Header';
import BannerSection from './components/landing/BannerSection';
import ProductCategories from './components/landing/ProductCategories';
import BestSellers from './components/landing/BestSellers';
import AboutSection from './components/landing/AboutUsSction';



import FAQSection from './components/landing/FAQSection';
import ContactSection from './components/landing/ContactSection';
import Footer from './components/Footer/Footer';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const HomePage = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Header />

      {/* 1. Hero */}
      <BannerSection />

      {/* 2. Product Categories */}
      <ProductCategories />

      {/* 3. Product Gallery */}
      <BestSellers />

      {/* 4. Why Choose Us */}
      <AboutSection />







      {/* 8. FAQ */}
      <FAQSection />

      {/* 9. Inquiry Form */}
      <ContactSection />

      {/* 10. Footer */}
      <Footer />

      {/* Sticky WhatsApp Button */}
      <Fab
        href="https://wa.me/919791109568?text=Hi%2C%20I%20need%20wholesale%20keychain%20pricing."
        target="_blank"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          bgcolor: '#25d366',
          color: 'white',
          zIndex: 9999,
          '&:hover': { bgcolor: '#1da851', transform: 'scale(1.1)' },
          transition: 'all 0.25s',
          boxShadow: '0 4px 20px rgba(37,211,102,0.5)'
        }}
      >
        <WhatsAppIcon />
      </Fab>
    </Box>
  );
};

export default HomePage;
