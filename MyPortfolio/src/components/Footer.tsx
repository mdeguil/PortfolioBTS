import { Box, Container, Typography, Stack, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import SocialLinks from "./SocialLinks.tsx";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box
            component="footer"
            sx={{
                py: 4,
                px: 2,
                mt: 'auto',
                backgroundColor: 'background.paper',
                borderTop: '1px solid',
                borderColor: 'divider'
            }}
        >
            <Container maxWidth="lg">
                <Stack spacing={3}>
                    {/* Liens de navigation */}
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={2}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Typography variant="body2" sx={{ '&:hover': { color: 'primary.main' } }}>
                                Mon Profil
                            </Typography>
                        </Link>
                        <Link to="/realisations" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Typography variant="body2" sx={{ '&:hover': { color: 'primary.main' } }}>
                                Réalisations
                            </Typography>
                        </Link>
                        <Link to="/competences" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Typography variant="body2" sx={{ '&:hover': { color: 'primary.main' } }}>
                                Compétences
                            </Typography>
                        </Link>
                        <Link to="/stages" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Typography variant="body2" sx={{ '&:hover': { color: 'primary.main' } }}>
                                Stages
                            </Typography>
                        </Link>
                        <Link to="/projets" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Typography variant="body2" sx={{ '&:hover': { color: 'primary.main' } }}>
                                Mes Projets
                            </Typography>
                        </Link>
                        <Link to="/veille" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Typography variant="body2" sx={{ '&:hover': { color: 'primary.main' } }}>
                                Veille Technologique
                            </Typography>
                        </Link>
                    </Stack>

                    <Divider />

                    {/* Réseaux sociaux */}
                    <Stack direction="row" spacing={1} justifyContent="center">
                        <SocialLinks size="small"/>
                    </Stack>

                    {/* Email visible */}
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        align="center"
                    >
                        <a
                            href="mailto:deguil.mateo@gmail.com"
                            style={{
                                color: 'inherit',
                                textDecoration: 'none',
                                transition: 'color 0.3s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#2196f3'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                        >
                            📧 deguil.mateo@gmail.com
                        </a>
                    </Typography>

                    {/* Copyright */}
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        align="center"
                    >
                        © {currentYear} DEGUIL Matéo. Tous droits réservés.
                    </Typography>

                    <Typography
                        variant="caption"
                        color="text.secondary"
                        align="center"
                    >
                        Développé avec React, TypeScript & Material-UI
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;