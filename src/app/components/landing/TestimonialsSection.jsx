"use client"
import { Box, Typography, Container, Paper, Avatar } from '@mui/material';
import { FormatQuote } from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
  {
    name: 'Rahul Sharma',
    location: 'Delhi – Gift Shop Owner',
    comment: 'Ordered 500 acrylic keychains with our shop branding. Print quality is superb, delivery was on time. Pricing is the best in market — will repeat order monthly!'
  },
  {
    name: 'Priya Patel',
    location: 'Mumbai – Retail Store',
    comment: 'The photo keychains are a hit! Customers love personalized gifts. Mahadev Keychain delivered exactly what we ordered. Zero complaints in 3 months of selling.'
  },
  {
    name: 'Vikram Singh',
    location: 'Bangalore – Event Organizer',
    comment: 'Used them for a 2000-piece corporate event order. Custom logo printing was flawless. Quick turnaround, GST invoice provided. Highly professional team!'
  },
  {
    name: 'Anjali Mehta',
    location: 'Chennai – Promotional Products',
    comment: 'Great quality metal keychains for trade show giveaways. The wholesale pricing makes it very profitable for resale. Will definitely order for next quarter.'
  },
  {
    name: 'Suresh Reddy',
    location: 'Hyderabad – Wholesale Reseller',
    comment: "Best wholesale supplier I've worked with. Transparent pricing, fast shipping, and responsive customer support on WhatsApp. My go-to for all keychain orders."
  },
  {
    name: 'Meena Iyer',
    location: 'Coimbatore – Wedding Planner',
    comment: 'Ordered couple keychains as wedding favors — absolutely gorgeous! All 300 pieces were consistent in quality. Guests loved them. Thank you Mahadev Keychain!'
  },
  {
    name: 'Arjun Nair',
    location: 'Kochi – Corporate Gifts',
    comment: 'Excellent bulk order experience. 1000 branded metal keychains for our annual conference. Delivered 2 days early with perfect finishing. Truly professional!'
  },
  {
    name: 'Sneha Gupta',
    location: 'Jaipur – Souvenir Shop',
    comment: 'Our go-to keychain supplier for tourist souvenirs. Custom designs, fast restocking, and very competitive wholesale rates. Highly recommended for resellers!'
  },
];

const TestimonialCard = ({ t }) => (
  <Paper sx={{
    p: 3.5, height: '100%',
    background: 'linear-gradient(135deg, #1e1e1e 0%, #161616 100%)',
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: 3,
    position: 'relative',
    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    mx: 1,
  }}>
    <FormatQuote sx={{
      color: 'rgba(255,152,0,0.2)', fontSize: '4rem',
      position: 'absolute', top: 10, right: 14,
    }} />
    <Box>
      <Typography sx={{
        fontStyle: 'italic', mb: 3,
        color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, fontSize: '0.93rem'
      }}>
        "{t.comment}"
      </Typography>
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
      <Avatar sx={{
        background: 'linear-gradient(135deg, #ff9800, #FFD700)',
        width: 42, height: 42, fontWeight: 700, fontSize: '1rem', color: '#000'
      }}>
        {t.name[0]}
      </Avatar>
      <Box>
        <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>{t.name}</Typography>
        <Typography variant="caption" color="text.secondary">{t.location}</Typography>
      </Box>
    </Box>
  </Paper>
);

const TestimonialsSection = () => (
  <Box id="reviews" sx={{ py: 10, bgcolor: '#111111', overflow: 'hidden' }}>
    <Container maxWidth="xl">
      <Box sx={{ textAlign: 'center', mb: 7 }}>
        <Typography variant="overline" sx={{ color: '#ff9800', fontWeight: 700, letterSpacing: 3 }}>
          TESTIMONIALS
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 2 }}>
          What Our Clients Say
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Real feedback from wholesale buyers across India
        </Typography>
      </Box>

      <Box sx={{
        '.swiper-pagination-bullet': {
          bgcolor: 'rgba(255,255,255,0.3)',
          opacity: 1,
        },
        '.swiper-pagination-bullet-active': {
          bgcolor: '#ff9800',
          width: '24px',
          borderRadius: '9999px',
          transition: 'all 0.3s',
        },
        '.swiper-button-next, .swiper-button-prev': {
          color: '#ff9800',
          '&::after': { fontSize: '1.2rem', fontWeight: 'bold' },
        },
        '.swiper': { pb: '52px' },
      }}>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          spaceBetween={24}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            600: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i} style={{ height: 'auto' }}>
              <TestimonialCard t={t} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  </Box>
);

export default TestimonialsSection;
