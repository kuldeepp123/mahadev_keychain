"use client"
import React from 'react';
import Image from 'next/image';
import { Typography, Button, Box, Container, Stack, Divider } from '@mui/material';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const GradientText = ({ children, sx }) => (
  <Box component="span" sx={{
    background: 'linear-gradient(135deg, #ff9800, #FFD700)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 800,
    ...sx
  }}>
    {children}
  </Box>
);

const navLinks = [
  { text: 'Home', id: 'home' },
  { text: 'Categories', id: 'categories' },
  { text: 'Gallery', id: 'gallery' },
  { text: 'Why Us', id: 'about' },
  { text: 'Custom', id: 'custom' },
  { text: 'Reviews', id: 'reviews' },
  { text: 'FAQ', id: 'faq' },
  { text: 'Contact', id: 'contact' },
];

const Footer = () => (
  <Box sx={{ bgcolor: '#080808', color: 'white', pt: 8, pb: 3, borderTop: '1px solid rgba(255,152,0,0.2)' }}>
    <Container maxWidth="xl">
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)', md: 'repeat(4,1fr)' },
        gap: { xs: 5, md: 4 },
        mb: 6
      }}>
        {/* Brand */}
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
            <Image src="/assets/images/brand-logo.png" alt="Mahadev Keychain Logo" width={42} height={42} style={{ borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
            <GradientText sx={{ fontSize: '1.3rem' }}>Mahadev Keychain</GradientText>
          </Box>
          <Typography variant="body2" color="grey.400" sx={{ lineHeight: 1.7, mb: 2 }}>
            Wholesale keychain supplier. Custom, promotional, corporate & personalized keychains at wholesale prices.
          </Typography>
          <Typography variant="caption" sx={{ color: 'rgba(255,152,0,0.8)', fontWeight: 600 }}>
            🏭 Factory Direct | 📦 MOQ: 50 pcs | 🚚 Pan India
          </Typography>
        </Box>

        {/* Quick Links */}
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2.5, color: '#ff9800' }}>
            Quick Links
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0.5 }}>
            {navLinks.map(link => (
              <Button
                key={link.text}
                onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                sx={{
                  color: 'grey.400', justifyContent: 'flex-start',
                  textTransform: 'none', fontSize: '0.85rem',
                  p: '4px 8px', minHeight: 'auto',
                  '&:hover': { color: '#ff9800', bgcolor: 'transparent' }
                }}
              >
                {link.text}
              </Button>
            ))}
          </Box>
        </Box>

        {/* Contact */}
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2.5, color: '#ff9800' }}>
            Contact Info
          </Typography>
          <Stack spacing={2}>
            {[
              { icon: <Phone size={15} />, text: '+91 9791109568', href: 'tel:+919791109568' },
              { icon: <Mail size={15} />, text: 'info@mahadevkeychain.com', href: 'mailto:info@mahadevkeychain.com' },
              { icon: <MapPin size={15} />, text: '11/40/27, Bheema Complex, Shop No-4, Pulipativari Street, One Town, Vijayawada - 520001 (AP)', href: null },
            ].map((item, i) => (
              <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, color: 'grey.400' }}>
                <Box sx={{ flexShrink: 0, mt: '2px', color: '#ff9800' }}>{item.icon}</Box>
                <Typography
                  variant="body2" sx={{ lineHeight: 1.5 }}
                  component={item.href ? 'a' : 'span'}
                  href={item.href || undefined}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        {/* Social & CTA */}
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2.5, color: '#ff9800' }}>
            Connect With Us
          </Typography>
          <Button
            fullWidth
            variant="contained"
            startIcon={<WhatsAppIcon />}
            href="https://wa.me/919791109568?text=Hi%2C%20I%20need%20wholesale%20keychain%20pricing."
            target="_blank"
            sx={{
              bgcolor: '#25d366', color: 'white', fontWeight: 700,
              textTransform: 'none', borderRadius: 2, py: 1.2, mb: 2,
              '&:hover': { bgcolor: '#1da851' }
            }}
          >
            WhatsApp Us
          </Button>
          <Stack direction="row" spacing={1.5} mb={3}>
            {[
              { icon: <Instagram size={18} />, label: 'Instagram', href: 'https://www.instagram.com/the_fancy_unique_keychain', color: '#E1306C' },
            ].map(s => (
              <Button
                key={s.label}
                href={s.href}
                target="_blank"
                size="small"
                sx={{
                  minWidth: 0, width: 36, height: 36, borderRadius: '50%', p: 0,
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'grey.400',
                  '&:hover': { bgcolor: s.color, color: 'white', border: `1px solid ${s.color}` }
                }}
              >
                {s.icon}
              </Button>
            ))}
          </Stack>
          <Box sx={{ p: 2, bgcolor: 'rgba(255,152,0,0.07)', borderRadius: 2, border: '1px solid rgba(255,152,0,0.15)' }}>
            <Typography variant="caption" sx={{ color: 'grey.400', lineHeight: 1.6 }}>
              GST No: <strong style={{ color: '#d1d5db' }}>37XXXXXXXXXXXXX</strong><br />
              Mon–Sat: 9AM–8PM | Sun: 10AM–5PM
            </Typography>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ borderColor: 'rgba(255,255,255,0.07)', mb: 3 }} />

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 1.5 }}>
        <Typography variant="body2" color="grey.600">
          © {new Date().getFullYear()} Mahadev Keychain. All rights reserved. Made with ❤️ in India.
        </Typography>
        <Typography variant="body2" color="grey.600">
          Wholesale Keychain Supplier | Vijayawada, AP
        </Typography>
      </Box>
    </Container>
  </Box>
);

export default Footer;
