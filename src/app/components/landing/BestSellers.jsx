"use client"
import { Box, Typography, Container, Card, CardContent, Button, Chip, keyframes } from '@mui/material';
import Image from 'next/image';
import toast from 'react-hot-toast';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const products = [
  { id: 1, name: 'Acrylic Photo Keychain', tag: 'Trending', image: '/assets/images/slider1.jpg', minQty: '100 pcs', price: '₹35/pc' },
  { id: 2, name: 'Metal Corporate Keychain', tag: 'Corporate', image: '/assets/images/slider2.jpg', minQty: '50 pcs', price: '₹55/pc' },
  { id: 3, name: 'Wooden Name Keychain', tag: 'Eco-Friendly', image: '/assets/images/slider3.jpg', minQty: '100 pcs', price: '₹40/pc' },
  { id: 4, name: 'Anime Character Keychain', tag: 'Popular', image: '/assets/images/slider4.jpg', minQty: '200 pcs', price: '₹30/pc' },
  { id: 5, name: 'Couple Keychain Set', tag: 'Gifting', image: '/assets/images/slider5.jpg', minQty: '50 pcs', price: '₹60/pair' },
  { id: 6, name: 'Custom Logo Keychain', tag: 'Branding', image: '/assets/images/slider6.jpg', minQty: '200 pcs', price: '₹45/pc' },
  { id: 7, name: 'Promotional Event Keychain', tag: 'Events', image: '/assets/images/slider7.jpg', minQty: '500 pcs', price: '₹25/pc' },
  { id: 8, name: 'Religious Keychain', tag: 'Devotional', image: '/assets/images/slider1.jpg', minQty: '100 pcs', price: '₹38/pc' },
];

const tagColors = {
  Trending: '#f97316', Corporate: '#3b82f6', 'Eco-Friendly': '#22c55e',
  Popular: '#a855f7', Gifting: '#ec4899', Branding: '#ff9800',
  Events: '#06b6d4', Devotional: '#FFD700'
};

const BestSellers = () => (
  <Box id="gallery" sx={{ py: 10, bgcolor: '#0d0d0d' }}>
    <Container maxWidth="xl">
      <Box sx={{ textAlign: 'center', mb: 7 }}>
        <Typography variant="overline" sx={{ color: '#ff9800', fontWeight: 700, letterSpacing: 3 }}>
          PRODUCT GALLERY
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 2 }}>
          Our Product Range
        </Typography>
        <Typography variant="h6" color="text.secondary">
          All products available for wholesale bulk orders
        </Typography>
      </Box>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: 'repeat(1,1fr)', sm: 'repeat(2,1fr)', md: 'repeat(3,1fr)', lg: 'repeat(4,1fr)' },
        gap: 3
      }}>
        {products.map((product, i) => (
          <Card key={product.id} sx={{
            background: '#1a1a1a',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 3,
            overflow: 'hidden',
            display: 'flex', flexDirection: 'column',
            animation: `${fadeUp} 0.5s ease ${i * 0.07}s both`,
            transition: 'all 0.35s ease',
            '&:hover': {
              transform: 'translateY(-8px)',
              border: '1px solid rgba(255,152,0,0.4)',
              boxShadow: '0 16px 40px rgba(0,0,0,0.6)',
              '& .product-overlay': { opacity: 1 }
            }
          }}>
            <Box sx={{ position: 'relative', width: '100%', height: 220, overflow: 'hidden' }}>
              <Image src={product.image} alt={product.name} fill sizes="(max-width:600px) 100vw, (max-width:900px) 50vw, 25vw" style={{ objectFit: 'cover', transition: 'transform 0.4s' }} />
              <Box
                className="product-overlay"
                sx={{
                  position: 'absolute', inset: 0,
                  background: 'rgba(255,152,0,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  opacity: 0, transition: 'opacity 0.3s'
                }}
              >
                <Button
                  variant="contained"
                  onClick={() => toast.success(`Inquiry sent for ${product.name}! We'll contact you soon.`)}
                  sx={{
                    bgcolor: '#ff9800', color: 'black', fontWeight: 700,
                    borderRadius: '9999px', textTransform: 'none',
                    '&:hover': { bgcolor: '#FFD700' }
                  }}
                >
                  Quick Inquiry
                </Button>
              </Box>
              <Chip
                label={product.tag}
                size="small"
                sx={{
                  position: 'absolute', top: 10, left: 10,
                  bgcolor: tagColors[product.tag] || '#ff9800',
                  color: 'white', fontWeight: 700, fontSize: '0.7rem'
                }}
              />
            </Box>
            <CardContent sx={{ flex: 1, p: 2.5 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '0.95rem', mb: 1 }}>
                {product.name}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                <Typography variant="body2" sx={{ color: '#ff9800', fontWeight: 700, fontSize: '1rem' }}>
                  {product.price}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Min: {product.minQty}
                </Typography>
              </Box>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                sx={{
                  borderColor: '#ff9800', color: '#ff9800',
                  fontWeight: 600, textTransform: 'none', borderRadius: 2,
                  '&:hover': { bgcolor: 'rgba(255,152,0,0.1)', borderColor: '#FFD700', color: '#FFD700' }
                }}
              >
                Get Bulk Price
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  </Box>
);

export default BestSellers;
