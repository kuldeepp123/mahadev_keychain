"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import { styled, keyframes } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const borderAnimation = keyframes`
  0% { width: 0; left: 0; }
  50% { width: 100%; left: 0; }
  100% { width: 0; left: 100%; }
`;

const GradientButton = styled(Button)(({ theme }) => ({
    background: 'linear-gradient(to right, #ff9800, #f44336)',
    color: 'white',
    borderRadius: '9999px',
    padding: '8px 24px',
    fontWeight: 600,
    textTransform: 'none',
    boxShadow: 'none',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: theme.shadows[5],
        background: 'linear-gradient(to right, #fb8c00, #e53935)',
    },
    transition: 'all 0.2s ease',
}));

const GradientText = styled('span')({
    background: 'linear-gradient(to right, #ff9800, #f44336)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bold',
    fontSize: '1.5rem',
});

const NavButton = styled(Button)(({ theme }) => ({
    color: '#e2e8f0',
    fontWeight: 500,
    fontSize: '1rem',
    textTransform: 'none',
    minWidth: 'auto',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
        color: '#f97316',
        backgroundColor: 'transparent',
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '2px',
            backgroundColor: '#f97316',
            animation: `${borderAnimation} 1.5s infinite`,
        }
    },
}));

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        handleMenuClose();
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: '#141414',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 2px 20px rgba(0,0,0,0.6)',
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
        >
            <Container maxWidth="xl">
                <Toolbar sx={{
                    justifyContent: { xs: 'space-between', md: 'flex-start' },
                    py: 2,
                    px: { xs: 0, sm: 0 },
                    gap: { md: 2 }
                }}>
                    {/* Logo */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box sx={{
                            width: 40, height: 40, borderRadius: '50%',
                            background: 'linear-gradient(to bottom right, #ff9800, #f44336)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: 'white', fontWeight: 'bold', fontSize: '1rem',
                        }}>
                            MK
                        </Box>
                        <GradientText>Mahadev Keychains</GradientText>
                    </Box>

                    {/* Desktop Navigation */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'center', gap: 3 }}>
                        <NavButton onClick={() => scrollToSection('home')}>Home</NavButton>
                        <NavButton onClick={() => scrollToSection('categories')}>Categories</NavButton>
                        <NavButton onClick={() => scrollToSection('gallery')}>Gallery</NavButton>
                        <NavButton onClick={() => scrollToSection('about')}>Why Us</NavButton>
                        <NavButton onClick={() => scrollToSection('reviews')}>Reviews</NavButton>
                        <NavButton onClick={() => scrollToSection('faq')}>FAQ</NavButton>
                        <NavButton onClick={() => scrollToSection('contact')}>Contact</NavButton>
                    </Box>

                    {/* Shop Now + Mobile Menu */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: 'auto' }}>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <GradientButton variant="contained" onClick={() => scrollToSection('contact')}>
                                Get Quote
                            </GradientButton>
                        </Box>
                        <IconButton
                            size="large"
                            aria-label="menu"
                            sx={{
                                display: { md: 'none' },
                                color: '#e2e8f0',
                                '&:hover': { backgroundColor: 'rgba(255,255,255,0.06)' }
                            }}
                            onClick={handleMenuOpen}
                        >
                            {open ? <CloseIcon /> : <MenuIcon />}
                        </IconButton>
                    </Box>

                    {/* Mobile Menu */}
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleMenuClose}
                        sx={{
                            display: { md: 'none' },
                            '& .MuiPaper-root': {
                                width: '100%',
                                maxWidth: '100%',
                                left: '0 !important',
                                right: 0,
                                borderRadius: 0,
                                boxShadow: 'none',
                                borderTop: '1px solid rgba(255,255,255,0.08)',
                                mt: 0,
                                bgcolor: '#141414',
                            }
                        }}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                    >
                        {[{id:'home',label:'Home'},{id:'categories',label:'Categories'},{id:'gallery',label:'Gallery'},{id:'about',label:'Why Us'},{id:'reviews',label:'Reviews'},{id:'faq',label:'FAQ'},{id:'contact',label:'Contact'}].map(({ id, label }, i, arr) => (
                            <MenuItem
                                key={id}
                                onClick={() => scrollToSection(id)}
                                sx={{
                                    py: 1.5,
                                    color: '#e2e8f0',
                                    borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                                    textTransform: 'capitalize',
                                    '&:hover': { backgroundColor: 'rgba(249,115,22,0.1)', color: '#f97316' }
                                }}
                            >
                                {label}
                            </MenuItem>
                        ))}
                        <Box sx={{ display: { sm: 'none' }, p: 2, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                            <GradientButton variant="contained" fullWidth sx={{ py: 1.5 }}
                                onClick={() => scrollToSection('contact')}>
                                Get Quote
                            </GradientButton>
                        </Box>
                    </Menu>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
