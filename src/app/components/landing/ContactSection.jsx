"use client"
import { Box, Typography, Container, Button, Stack, TextField, Avatar, MenuItem, Divider } from '@mui/material';
import { Phone, Mail, MapPin } from 'lucide-react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useState } from 'react';
import toast from 'react-hot-toast';

const categories = [
  'Acrylic Keychains', 'Photo Keychains', 'Name Keychains', 'Anime Keychains',
  'Cartoon Keychains', 'Corporate Logo Keychains', 'Metal Keychains', 'Wooden Keychains',
  'Religious Keychains', 'Couple Keychains', 'Promotional Keychains', 'Custom Design Keychains', 'Other'
];

const quantityOptions = ['50–100 pcs', '100–500 pcs', '500–1000 pcs', '1000–5000 pcs', '5000+ pcs'];

const contactInfo = [
  { icon: <Phone size={22} />, title: 'Phone / WhatsApp', info: '+91 9791109568', href: 'tel:+919791109568' },
  { icon: <Mail size={22} />, title: 'Email', info: 'info@mahadevkeychain.com', href: 'mailto:info@mahadevkeychain.com' },
  { icon: <MapPin size={22} />, title: 'Location', info: '11/40/27, Bheema Complex, Shop No-4, Pulipativari Street, One Town, Vijayawada - 520001 (AP)', href: null },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', mobile: '', business: '', category: '', quantity: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.mobile) return toast.error('Please fill in Name and Mobile Number.');
    const text = `Hi, I am ${form.name} from ${form.business || 'N/A'}.\nMobile: ${form.mobile}\nProduct: ${form.category}\nQuantity: ${form.quantity}\nMessage: ${form.message}`;
    window.open(`https://wa.me/919791109568?text=${encodeURIComponent(text)}`, '_blank');
    toast.success('Opening WhatsApp with your inquiry!');
  };

  const fieldSx = {
    '& .MuiOutlinedInput-root': {
      '& fieldset': { borderColor: 'rgba(255,255,255,0.12)' },
      '&:hover fieldset': { borderColor: 'rgba(255,152,0,0.5)' },
      '&.Mui-focused fieldset': { borderColor: '#ff9800' }
    },
    '& .MuiInputLabel-root.Mui-focused': { color: '#ff9800' }
  };

  return (
    <Box id="contact" sx={{ py: 10, bgcolor: '#111111' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 7 }}>
          <Typography variant="overline" sx={{ color: '#ff9800', fontWeight: 700, letterSpacing: 3 }}>
            GET IN TOUCH
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 2 }}>
            Wholesale Inquiry Form
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Fill the form and we'll respond within 2 hours on WhatsApp
          </Typography>
        </Box>

        <Stack direction={{ xs: 'column', md: 'row' }} spacing={6} divider={<Divider orientation="vertical" flexItem sx={{ borderColor: 'rgba(255,255,255,0.08)' }} />}>
          {/* Contact Info */}
          <Box sx={{ width: { xs: '100%', md: '35%' } }}>
            <Stack spacing={3.5} sx={{ mb: 4 }}>
              {contactInfo.map((item, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <Avatar sx={{
                    background: 'linear-gradient(135deg, #ff9800, #FFD700)',
                    color: 'black', width: 44, height: 44, flexShrink: 0
                  }}>
                    {item.icon}
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.3 }}>{item.title}</Typography>
                    <Typography
                      variant="body2" color="text.secondary"
                      component={item.href ? 'a' : 'p'}
                      href={item.href || undefined}
                      sx={{ textDecoration: 'none', '&:hover': item.href ? { color: '#ff9800' } : {}, transition: 'color 0.2s' }}
                    >
                      {item.info}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>

            <Button
              variant="contained"
              fullWidth
              size="large"
              startIcon={<WhatsAppIcon />}
              href="https://wa.me/919791109568?text=Hi%2C%20I%20am%20interested%20in%20wholesale%20keychains."
              target="_blank"
              sx={{
                bgcolor: '#25d366', color: 'white', fontWeight: 700,
                textTransform: 'none', borderRadius: 2, py: 1.5, fontSize: '1rem',
                '&:hover': { bgcolor: '#1da851' }
              }}
            >
              Chat on WhatsApp
            </Button>

            <Box sx={{ mt: 4, p: 3, bgcolor: 'rgba(255,152,0,0.06)', border: '1px solid rgba(255,152,0,0.2)', borderRadius: 2 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#ff9800', mb: 1 }}>🕐 Business Hours</Typography>
              <Typography variant="body2" color="text.secondary">Mon – Sat: 9:00 AM – 8:00 PM</Typography>
              <Typography variant="body2" color="text.secondary">Sunday: 10:00 AM – 5:00 PM</Typography>
            </Box>
          </Box>

          {/* Form */}
          <Box sx={{ width: { xs: '100%', md: '65%' } }}>
            <form onSubmit={handleSubmit}>
              <Stack spacing={2.5}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <TextField fullWidth label="Full Name *" name="name" value={form.name} onChange={handleChange} required sx={fieldSx} />
                  <TextField fullWidth label="Mobile Number *" name="mobile" value={form.mobile} onChange={handleChange} required inputProps={{ inputMode: 'tel' }} sx={fieldSx} />
                </Stack>
                <TextField fullWidth label="Business Name" name="business" value={form.business} onChange={handleChange} placeholder="Your shop / company name" sx={fieldSx} />
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <TextField fullWidth select label="Product Category *" name="category" value={form.category} onChange={handleChange} required sx={fieldSx}>
                    {categories.map(c => <MenuItem key={c} value={c}>{c}</MenuItem>)}
                  </TextField>
                  <TextField fullWidth select label="Quantity Required *" name="quantity" value={form.quantity} onChange={handleChange} required sx={fieldSx}>
                    {quantityOptions.map(q => <MenuItem key={q} value={q}>{q}</MenuItem>)}
                  </TextField>
                </Stack>
                <TextField
                  fullWidth label="Message / Additional Details"
                  name="message" value={form.message}
                  onChange={handleChange} multiline rows={4}
                  placeholder="Describe your requirements, design ideas, timeline, etc."
                  sx={fieldSx}
                />
                <Button
                  type="submit" variant="contained" size="large" startIcon={<WhatsAppIcon />}
                  sx={{
                    background: 'linear-gradient(135deg, #ff9800, #f44336)',
                    fontWeight: 700, fontSize: '1rem', py: 1.7,
                    textTransform: 'none', borderRadius: 2,
                    boxShadow: '0 4px 20px rgba(255,152,0,0.35)',
                    '&:hover': { background: 'linear-gradient(135deg, #fb8c00, #e53935)', boxShadow: '0 6px 28px rgba(255,152,0,0.5)' }
                  }}
                >
                  Send Wholesale Inquiry via WhatsApp
                </Button>
                <Typography variant="caption" color="text.secondary" textAlign="center">
                  We respond within 2 hours during business hours. No spam, no cold calls.
                </Typography>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default ContactSection;
