import { Box, Container, Typography, Stack, IconButton, Divider } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { FaGitlab } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
                        <Link to="/activite" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Typography variant="body2" sx={{ '&:hover': { color: 'primary.main' } }}>
                                Activité
                            </Typography>
                        </Link>
                        <Link to="/competences" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Typography variant="body2" sx={{ '&:hover': { color: 'primary.main' } }}>
                                Compétences
                            </Typography>
                        </Link>
                        <Link to="/projets" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Typography variant="body2" sx={{ '&:hover': { color: 'primary.main' } }}>
                                Projets
                            </Typography>
                        </Link>
                    </Stack>

                    <Divider />

                    {/* Réseaux sociaux */}
                    <Stack direction="row" spacing={1} justifyContent="center">
                        <IconButton
                            component="a"
                            href="https://github.com/TON_USERNAME"
                            target="_blank"
                            rel="noopener noreferrer"
                            size="small"
                            sx={{
                                '&:hover': {
                                    color: 'primary.main',
                                    transform: 'scale(1.1)',
                                    transition: 'all 0.3s'
                                }
                            }}
                        >
                            <GitHub />
                        </IconButton>

                        <IconButton
                            component="a"
                            href="https://gitlab.com/TON_USERNAME"
                            target="_blank"
                            rel="noopener noreferrer"
                            size="small"
                            sx={{
                                color: '#FC6D26',
                                '&:hover': {
                                    color: '#E24329',
                                    transform: 'scale(1.1)',
                                    transition: 'all 0.3s'
                                }
                            }}
                        >
                            <FaGitlab />
                        </IconButton>

                        <IconButton
                            component="a"
                            href="https://linkedin.com/in/TON_USERNAME"
                            target="_blank"
                            rel="noopener noreferrer"
                            size="small"
                            sx={{
                                '&:hover': {
                                    color: '#0077b5',
                                    transform: 'scale(1.1)',
                                    transition: 'all 0.3s'
                                }
                            }}
                        >
                            <LinkedIn />
                        </IconButton>

                        <IconButton
                            component="a"
                            href="mailto:ton.email@example.com"
                            size="small"
                            sx={{
                                '&:hover': {
                                    color: 'primary.main',
                                    transform: 'scale(1.1)',
                                    transition: 'all 0.3s'
                                }
                            }}
                        >
                            <Email />
                        </IconButton>
                    </Stack>

                    {/* Copyright */}
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        align="center"
                    >
                        © {currentYear} Votre Nom. Tous droits réservés.
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