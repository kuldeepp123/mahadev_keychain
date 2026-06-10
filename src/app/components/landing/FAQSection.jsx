"use client"
import { Box, Typography, Container, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    q: 'What is the minimum order quantity (MOQ) for wholesale keychains?',
    a: 'Our MOQ is 50 pieces for standard designs. For custom-printed or branded keychains, the MOQ is 200 pieces. Larger quantities get better pricing per piece.'
  },
  {
    q: 'Do you offer custom logo or design printing on keychains?',
    a: 'Yes! We offer custom-printed keychains — share your logo, artwork, or concept via WhatsApp and we\'ll arrange a sample before bulk supply. Available from 200 pcs.'
  },
  {
    q: 'What types of keychains do you supply?',
    a: 'We supply acrylic, metal, wooden, photo, name, anime, cartoon, religious, couple, corporate logo, and promotional keychains — 12+ categories in total.'
  },
  {
    q: 'Do you provide a GST invoice for bulk orders?',
    a: 'Yes, we provide a proper GST invoice for all wholesale orders. Our GST No: 37XXXXXXXXXXXXX. This makes it easy for resellers and businesses to claim input tax credit.'
  },
  {
    q: 'How long does delivery take for bulk orders?',
    a: 'Standard orders are dispatched within 5–7 business days. Custom/printed orders take 7–10 business days. Express delivery is available for urgent requirements at extra cost.'
  },
  {
    q: 'Do you ship Pan India?',
    a: 'Yes, we ship to all states across India. We are based in Vijayawada, Andhra Pradesh, and regularly fulfill orders from Delhi, Mumbai, Bangalore, Hyderabad, Chennai, and more.'
  },
  {
    q: 'What are your payment terms?',
    a: 'For orders up to ₹10,000 — 100% advance. For orders above ₹10,000 — 50% advance, balance before dispatch. We accept UPI, NEFT/RTGS, and bank transfers.'
  },
  {
    q: 'Who are your target customers?',
    a: 'We serve gift shops, resellers, corporate clients, event organizers, promotional product businesses, retail stores, wedding planners, and anyone who needs keychains in bulk.'
  },
];

const FAQSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box id="faq" sx={{ py: 10, bgcolor: '#0d0d0d' }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 7 }}>
          <Typography variant="overline" sx={{ color: '#ff9800', fontWeight: 700, letterSpacing: 3 }}>
            FAQ
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 2 }}>
            Frequently Asked Questions
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Everything you need to know about our wholesale keychain business
          </Typography>
        </Box>

        {faqs.map((faq, i) => (
          <Accordion
            key={i}
            expanded={expanded === i}
            onChange={() => setExpanded(expanded === i ? false : i)}
            sx={{
              mb: 1.5,
              background: 'linear-gradient(135deg, #1a1a1a, #141414)',
              border: expanded === i ? '1px solid rgba(255,152,0,0.4)' : '1px solid rgba(255,255,255,0.07)',
              borderRadius: '12px !important',
              '&:before': { display: 'none' },
              boxShadow: expanded === i ? '0 4px 20px rgba(255,152,0,0.12)' : 'none',
              transition: 'all 0.3s'
            }}
          >
            <AccordionSummary
              expandIcon={
                <ChevronDown
                  size={20}
                  style={{ color: expanded === i ? '#ff9800' : 'rgba(255,255,255,0.5)', transition: 'color 0.3s' }}
                />
              }
              sx={{ '& .MuiAccordionSummary-content': { my: 1.5 } }}
            >
              <Typography sx={{ fontWeight: 600, color: expanded === i ? '#ff9800' : 'inherit', transition: 'color 0.3s' }}>
                {faq.q}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ pt: 0 }}>
              <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>{faq.a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

export default FAQSection;
