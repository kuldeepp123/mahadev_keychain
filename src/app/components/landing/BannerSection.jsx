"use client"
import { Box, Typography, Container, Button, Chip, keyframes, IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const slides = [
  {
    title: "Wholesale Keychain Supplier",
    subtitle: "Custom, Promotional, Corporate & Personalized Keychains at Wholesale Prices",
    image: "/assets/images/slider1.jpg",
    badge: "🛒 Wholesale Prices"
  },
  {
    title: "Bulk Orders Welcome — 50 to 50,000+ Pieces",
    subtitle: "Acrylic, Metal, Photo, Name, Anime, Corporate & Custom Keychains",
    image: "/assets/images/slider3.jpg",
    badge: "⚡ Fast Delivery"
  },
  {
    title: "Custom Keychains for Events & Corporates",
    subtitle: "Your Logo. Your Brand. Your Design. Minimum 50 Pieces.",
    image: "/assets/images/slider5.jpg",
    badge: "✨ Premium Quality"
  }
];

const BannerSection = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setCurrent(p => (p - 1 + slides.length) % slides.length);
  const next = () => setCurrent(p => (p + 1) % slides.length);

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        mt: { xs: 7, md: 8 }
      }}
    >
      {/* Background */}
      <Box sx={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${slides[current].image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.8s ease',
        '&::after': {
          content: '""',
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(0,0,0,0.82) 0%, rgba(20,10,0,0.75) 50%, rgba(0,0,0,0.7) 100%)'
        }
      }} />

      {/* Gold accent line */}
      <Box sx={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: 3,
        background: 'linear-gradient(90deg, transparent, #FFD700, #ff9800, #FFD700, transparent)'
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center', py: { xs: 8, md: 4 } }}>
        <Box sx={{ animation: `${fadeUp} 0.7s ease both` }}>
          <Chip
            label={slides[current].badge}
            sx={{
              mb: 3,
              bgcolor: 'rgba(255,152,0,0.15)',
              border: '1px solid rgba(255,152,0,0.4)',
              color: '#FFB74D',
              fontWeight: 700,
              fontSize: '0.85rem',
              letterSpacing: 0.5,
            }}
          />
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: '1.75rem', md: '3.75rem' },
              fontWeight: 900,
              mb: 2,
              lineHeight: 1.2,
              background: 'linear-gradient(135deg, #ffffff 30%, #FFD700 60%, #ff9800 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: `${shimmer} 4s linear infinite`,
            }}
          >
            {slides[current].title}
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, color: 'rgba(255,255,255,0.82)', mb: 5, maxWidth: 680, mx: 'auto', lineHeight: 1.7 }}
          >
            {slides[current].subtitle}
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              sx={{
                background: 'linear-gradient(135deg, #ff9800, #f44336)',
                color: 'white', fontWeight: 700, fontSize: '1rem',
                borderRadius: '9999px', px: 4, py: 1.6,
                textTransform: 'none', boxShadow: '0 4px 20px rgba(255,152,0,0.4)',
                '&:hover': { background: 'linear-gradient(135deg, #fb8c00, #e53935)', transform: 'scale(1.05)', boxShadow: '0 6px 28px rgba(255,152,0,0.55)' },
                transition: 'all 0.25s'
              }}
            >
              📋 Get Wholesale Price List
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<WhatsAppIcon />}
              href="https://wa.me/919791109568?text=Hi%2C%20I%20need%20wholesale%20keychain%20pricing."
              target="_blank"
              sx={{
                border: '2px solid #25d366', color: '#25d366',
                fontWeight: 700, fontSize: '1rem',
                borderRadius: '9999px', px: 4, py: 1.5,
                textTransform: 'none',
                '&:hover': { bgcolor: 'rgba(37,211,102,0.1)', border: '2px solid #25d366', transform: 'scale(1.05)' },
                transition: 'all 0.25s'
              }}
            >
              Contact on WhatsApp
            </Button>
          </Box>

          {/* Trust badges */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2, mt: 5 }}>
            {['💰 Best Wholesale Rates', '🚚 Pan India Shipping', '📦 MOQ: 50 Pcs', '🧾 GST Invoice', '⭐ 1000+ Happy Clients'].map((badge) => (
              <Box key={badge} sx={{
                bgcolor: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '9999px', px: 2.5, py: 0.6,
                color: 'rgba(255,255,255,0.75)', fontSize: '0.78rem', fontWeight: 600
              }}>
                {badge}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>

      {/* Slider Controls */}
      <IconButton onClick={prev} sx={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', bgcolor: 'rgba(255,255,255,0.1)', color: 'white', '&:hover': { bgcolor: 'rgba(255,152,0,0.3)' } }}>
        <ChevronLeft />
      </IconButton>
      <IconButton onClick={next} sx={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', bgcolor: 'rgba(255,255,255,0.1)', color: 'white', '&:hover': { bgcolor: 'rgba(255,152,0,0.3)' } }}>
        <ChevronRight />
      </IconButton>

      {/* Dots */}
      <Box sx={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 1 }}>
        {slides.map((_, i) => (
          <Box
            key={i}
            onClick={() => setCurrent(i)}
            sx={{
              width: i === current ? 24 : 8, height: 8,
              borderRadius: '9999px',
              bgcolor: i === current ? '#ff9800' : 'rgba(255,255,255,0.4)',
              cursor: 'pointer', transition: 'all 0.3s'
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default BannerSection;
