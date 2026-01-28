import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Box, useMediaQuery, useTheme, Avatar } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import profileImage from '../assets/ME.png';

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const location = useLocation();

    const menuItems = [
        { label: 'Mon Profil', path: '/' },
        { label: 'Activité', path: '/activite' },
        { label: 'Compétences', path: '/competences' },
        { label: 'Stages', path: '/stages' },
        { label: 'Mes Projets', path: '/projets' },
        { label: 'Veille Technologique', path: '/veille' },
    ];

    const drawer = (
        <Box sx={{ width: 250 }} role="presentation" onClick={() => setDrawerOpen(false)}>
            <List>
                {menuItems.map((item) => (
                    <ListItem key={item.path} disablePadding>
                        <ListItemButton
                            component={Link}
                            to={item.path}
                            selected={location.pathname === item.path}
                        >
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <AppBar position="fixed" elevation={4}>
                <Toolbar>
                    {/* Logo + Titre */}
                    <Box
                        component={Link}
                        to="/"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.5,
                            flexGrow: 1,
                            textDecoration: 'none',
                            color: 'inherit'
                        }}
                    >
                        <Avatar
                            alt="Photo de profil"
                            src={profileImage}
                            sx={{
                                width: 40,
                                height: 40,
                                border: '2px solid white',
                                transition: 'transform 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.1)'
                                }
                            }}
                        />

                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 700,
                                display: { xs: 'none', sm: 'block' }
                            }}
                        >
                            Mon Portfolio
                        </Typography>
                    </Box>

                    {isMobile ? (
                        <IconButton
                            color="inherit"
                            edge="end"
                            onClick={() => setDrawerOpen(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <Box sx={{ display: 'flex', gap: 1.5 }}>
                            {menuItems.map((item) => (
                                <Button
                                    key={item.path}
                                    component={Link}
                                    to={item.path}
                                    color="inherit"
                                    size="small"
                                    sx={{
                                        fontWeight: location.pathname === item.path ? 700 : 400,
                                        borderBottom: location.pathname === item.path ? '2px solid white' : 'none',
                                        borderRadius: 0,
                                        '&:hover': {
                                            borderBottom: '2px solid rgba(255,255,255,0.5)',
                                        }
                                    }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </Box>
                    )}
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                {drawer}
            </Drawer>

            <Toolbar />
        </>
    );
};

export default Header;