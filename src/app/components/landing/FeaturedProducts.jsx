"use client"
import { Box, Typography, Container, Grid, Paper, Button } from '@mui/material';
import { Brush, Building, Calendar, Gift, Tag, Printer } from 'lucide-react';
import { keyframes } from '@mui/material/styles';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const services = [
  {
    icon: <Printer size={26} />,
    title: 'Custom Logo Printing',
    desc: 'High-resolution UV printing of your brand logo on any keychain — metal, acrylic, or wood. We supply as per your spec.',
  },
  {
    icon: <Brush size={26} />,
    title: 'Personalized Designs',
    desc: 'Send us your artwork and we\'ll supply keychains exactly as you need — consistent quality across every piece.',
  },
  {
    icon: <Building size={26} />,
    title: 'Corporate Gifting',
    desc: 'Branded keychains for employee gifts, client giveaways, and company events. Bulk pricing with GST invoice.',
  },
  {
    icon: <Calendar size={26} />,
    title: 'Event Merchandise',
    desc: 'Weddings, conferences, festivals, product launches — custom keychains make memorable event souvenirs.',
  },
  {
    icon: <Tag size={26} />,
    title: 'Promotional Products',
    desc: 'Cost-effective branded keychains for marketing campaigns, trade shows, and customer acquisition.',
  },
  {
    icon: <Gift size={26} />,
    title: 'Retail Branding',
    desc: 'Exclusive designs for your retail store with custom packaging and branded inserts on request.',
  },
];

const FeaturedProducts = () => (
  <Box id="custom" sx={{ py: 10, bgcolor: '#0d0d0d' }}>
    <Container maxWidth="xl">
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={5}>
          <Typography variant="overline" sx={{ color: '#ff9800', fontWeight: 700, letterSpacing: 3 }}>
            CUSTOM KEYCHAINS
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 2 }}>
            Your Design,<br />We Supply It
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.85, mb: 4 }}>
            Whether you need 50 pieces or 50,000 — we source and supply custom keychains exactly to your requirements. Share your logo, design, or concept and we coordinate everything from sampling to bulk delivery.
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 4 }}>
            {['✅ Minimum 50 pieces for custom orders', '✅ Free design assistance available', '✅ Sample available before placing bulk order', '✅ 7–10 days standard delivery time'].map(point => (
              <Typography key={point} variant="body2" sx={{ color: 'rgba(255,255,255,0.75)' }}>{point}</Typography>
            ))}
          </Box>
          <Button
            variant="contained"
            size="large"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            sx={{
              background: 'linear-gradient(135deg, #ff9800, #f44336)',
              fontWeight: 700, textTransform: 'none',
              borderRadius: '9999px', px: 4, py: 1.5,
              '&:hover': { background: 'linear-gradient(135deg, #fb8c00, #e53935)' }
            }}
          >
            Start Custom Inquiry
          </Button>
        </Grid>

        <Grid item xs={12} md={7}>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)', md: 'repeat(3,1fr)' },
            gap: 2
          }}>
            {services.map((svc, i) => (
              <Paper key={i} sx={{
                p: 2.8,
                background: 'linear-gradient(135deg, #1a1a1a, #141414)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 3,
                animation: `${fadeUp} 0.5s ease ${i * 0.08}s both`,
                transition: 'all 0.3s',
                '&:hover': {
                  border: '1px solid rgba(255,152,0,0.4)',
                  boxShadow: '0 8px 24px rgba(255,152,0,0.12)',
                  transform: 'translateY(-4px)'
                }
              }}>
                <Box sx={{
                  color: '#ff9800', mb: 1.5,
                  p: 1, display: 'inline-flex',
                  bgcolor: 'rgba(255,152,0,0.1)', borderRadius: 2
                }}>
                  {svc.icon}
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.8 }}>{svc.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: '0.82rem' }}>
                  {svc.desc}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default FeaturedProducts;
