"use client"
import { Box, Typography, Container, Paper, Avatar } from '@mui/material';
import { ShoppingBag, Package, Truck, LayoutGrid, Star, MapPin } from 'lucide-react';
import { keyframes } from '@mui/material/styles';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const reasons = [
  {
    icon: <ShoppingBag size={28} />,
    title: 'Best Wholesale Rates',
    desc: 'No inflated margins. You get the best bulk pricing directly from our wholesale store.',
    color: '#ff9800'
  },
  {
    icon: <Package size={28} />,
    title: 'Bulk Order Support',
    desc: 'From 50 to 50,000+ pieces — we handle all order sizes with dedicated support.',
    color: '#FFD700'
  },
  {
    icon: <Truck size={28} />,
    title: 'Fast Delivery',
    desc: 'Pan India shipping with orders delivered within 5–7 business days.',
    color: '#ff9800'
  },
  {
    icon: <LayoutGrid size={28} />,
    title: 'Wide Product Range',
    desc: '12+ keychain categories — acrylic, metal, wooden, photo, name, anime, corporate & more, all available at wholesale.',
    color: '#FFD700'
  },
  {
    icon: <Star size={28} />,
    title: 'Premium Quality',
    desc: 'Every piece undergoes quality check before dispatch. No compromise on finish.',
    color: '#ff9800'
  },
  {
    icon: <MapPin size={28} />,
    title: 'Pan India Shipping',
    desc: 'We deliver to all states across India with safe, insured packaging.',
    color: '#FFD700'
  },
];

const AboutSection = () => (
  <Box id="about" sx={{ py: 10, bgcolor: '#111111' }}>
    <Container maxWidth="xl">
      <Box sx={{ textAlign: 'center', mb: 7 }}>
        <Typography variant="overline" sx={{ color: '#ff9800', fontWeight: 700, letterSpacing: 3 }}>
          WHY CHOOSE US
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 2 }}>
          Why Buy From Mahadev Keychain?
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 560, mx: 'auto' }}>
          Trusted by 1000+ resellers, gift shops, and corporate clients across India
        </Typography>
      </Box>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)', md: 'repeat(3,1fr)' },
        gap: 3
      }}>
        {reasons.map((item, i) => (
          <Paper
            key={i}
            sx={{
              p: 3.5,
              background: 'linear-gradient(135deg, #1a1a1a 0%, #141414 100%)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 3,
              display: 'flex', alignItems: 'flex-start', gap: 2.5,
              animation: `${fadeUp} 0.5s ease ${i * 0.08}s both`,
              transition: 'all 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                border: '1px solid rgba(255,152,0,0.35)',
                boxShadow: '0 10px 28px rgba(255,152,0,0.1)'
              }
            }}
          >
            <Avatar
              sx={{
                background: `linear-gradient(135deg, ${item.color}30, ${item.color}60)`,
                border: `1px solid ${item.color}50`,
                color: item.color,
                width: 52, height: 52, flexShrink: 0
              }}
            >
              {item.icon}
            </Avatar>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.8, fontSize: '1rem' }}>
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65 }}>
                {item.desc}
              </Typography>
            </Box>
          </Paper>
        ))}
      </Box>
    </Container>
  </Box>
);

export default AboutSection;
