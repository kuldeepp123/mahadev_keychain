"use client"
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { keyframes } from '@mui/material/styles';

const countUp = keyframes`
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
`;

const stats = [
  { value: 50000, suffix: '+', label: 'Orders Completed', emoji: '📦' },
  { value: 1200, suffix: '+', label: 'Happy Customers', emoji: '😊' },
  { value: 500, suffix: '+', label: 'Product Designs', emoji: '🎨' },
  { value: 28, suffix: '+', label: 'Cities Served', emoji: '🌏' },
];

function AnimatedCount({ target, suffix, active }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      setCount(Math.floor(current));
      if (current >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [active, target]);

  return <>{count.toLocaleString('en-IN')}{suffix}</>;
}

const WholesalePricing = () => {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setActive(true);
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box id="stats" sx={{ py: 10, bgcolor: '#111111' }} ref={ref}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 7 }}>
          <Typography variant="overline" sx={{ color: '#ff9800', fontWeight: 700, letterSpacing: 3 }}>
            OUR ACHIEVEMENTS
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 2 }}>
            Business Statistics
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Numbers that prove our commitment to quality and scale
          </Typography>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {stats.map((stat, i) => (
            <Grid item xs={6} md={3} key={i}>
              <Paper sx={{
                p: 4, textAlign: 'center',
                background: 'linear-gradient(135deg, #1a1a1a, #141414)',
                border: '1px solid rgba(255,152,0,0.2)',
                borderRadius: 3,
                animation: `${countUp} 0.6s ease ${i * 0.1}s both`,
                transition: 'all 0.3s',
                '&:hover': {
                  border: '1px solid rgba(255,152,0,0.5)',
                  boxShadow: '0 8px 30px rgba(255,152,0,0.15)',
                  transform: 'translateY(-4px)'
                }
              }}>
                <Typography sx={{ fontSize: '2.5rem', mb: 0.5 }}>{stat.emoji}</Typography>
                <Typography variant="h3" sx={{
                  fontWeight: 900,
                  background: 'linear-gradient(135deg, #ff9800, #FFD700)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  <AnimatedCount target={stat.value} suffix={stat.suffix} active={active} />
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 1, fontWeight: 600 }}>
                  {stat.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WholesalePricing;
