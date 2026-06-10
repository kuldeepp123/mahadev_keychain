"use client"
import { Box, Typography, Container, Card, CardContent } from '@mui/material';
import { keyframes } from '@mui/material/styles';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const categories = [
  { name: 'Acrylic Keychains', emoji: '🔷', desc: 'Crystal clear, vibrant prints' },
  { name: 'Photo Keychains', emoji: '📸', desc: 'Personalized photo prints' },
  { name: 'Name Keychains', emoji: '✏️', desc: 'Custom name engraving' },
  { name: 'Anime Keychains', emoji: '🎌', desc: 'Popular anime characters' },
  { name: 'Cartoon Keychains', emoji: '🎨', desc: 'Fun cartoon designs' },
  { name: 'Corporate Logo', emoji: '🏢', desc: 'Brand & logo keychains' },
  { name: 'Metal Keychains', emoji: '🔩', desc: 'Premium metal finish' },
  { name: 'Wooden Keychains', emoji: '🪵', desc: 'Eco-friendly wood' },
  { name: 'Religious Keychains', emoji: '🙏', desc: 'Devotional designs' },
  { name: 'Couple Keychains', emoji: '💑', desc: 'Matching pair designs' },
  { name: 'Promotional', emoji: '📢', desc: 'Event & promo giveaways' },
  { name: 'Custom Design', emoji: '✨', desc: 'Your design, we supply' },
];

const ProductCategories = () => (
  <Box id="categories" sx={{ py: 10, bgcolor: '#0d0d0d' }}>
    <Container maxWidth="xl">
      <Box sx={{ textAlign: 'center', mb: 7 }}>
        <Typography variant="overline" sx={{ color: '#ff9800', fontWeight: 700, letterSpacing: 3 }}>
          WHAT WE OFFER
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 2 }}>
          Product Categories
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 520, mx: 'auto' }}>
          12+ keychain types for every business need — all available at wholesale
        </Typography>
      </Box>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: 'repeat(2,1fr)', sm: 'repeat(3,1fr)', md: 'repeat(4,1fr)', lg: 'repeat(6,1fr)' },
        gap: 2.5
      }}>
        {categories.map((cat, i) => (
          <Card
            key={i}
            sx={{
              cursor: 'pointer',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #111111 100%)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 3,
              transition: 'all 0.3s ease',
              animation: `${fadeUp} 0.5s ease ${i * 0.05}s both`,
              '&:hover': {
                transform: 'translateY(-8px)',
                border: '1px solid rgba(255,152,0,0.5)',
                boxShadow: '0 12px 32px rgba(255,152,0,0.18)',
                '& .cat-emoji': { transform: 'scale(1.2)' }
              }
            }}
          >
            <CardContent sx={{ textAlign: 'center', p: 3 }}>
              <Box className="cat-emoji" sx={{ fontSize: '2.5rem', mb: 1.5, transition: 'transform 0.3s' }}>
                {cat.emoji}
              </Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5, fontSize: '0.85rem' }}>
                {cat.name}
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.4 }}>
                {cat.desc}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  </Box>
);

export default ProductCategories;
