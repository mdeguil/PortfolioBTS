import { Box, Container, Typography, Button, Stack, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MotionBox = motion(Box);

const Home = () => {
    return (
        <Box
            sx={{
                minHeight: 'calc(100vh - 64px)',
                display: 'flex',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #0a1929 0%, #1e3a5f 100%)',
            }}
        >
            <Container maxWidth="lg">
                <MotionBox
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    textAlign="center"
                >
                    <Typography
                        variant="h1"
                        sx={{
                            mb: 2,
                            background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Bienvenue sur mon Portfolio
                    </Typography>

                    <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
                        Développeur Full Stack | React • TypeScript • Java
                    </Typography>

                    <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 4 }}>
                        <IconButton
                            component="a"
                            href="https://github.com/TON_USERNAME"
                            target="_blank"
                            color="primary"
                            size="large"
                        >
                            <GitHub fontSize="large" />
                        </IconButton>
                        <IconButton
                            component="a"
                            href="https://linkedin.com/in/TON_USERNAME"
                            target="_blank"
                            color="primary"
                            size="large"
                        >
                            <LinkedIn fontSize="large" />
                        </IconButton>
                        <IconButton
                            component={Link}
                            to="/contact"
                            color="primary"
                            size="large"
                        >
                            <Email fontSize="large" />
                        </IconButton>
                    </Stack>

                    <Stack direction="row" spacing={2} justifyContent="center">
                        <Button
                            component={Link}
                            to="/projects"
                            variant="contained"
                            size="large"
                            sx={{ px: 4 }}
                        >
                            Voir mes projets
                        </Button>
                        <Button
                            component={Link}
                            to="/contact"
                            variant="outlined"
                            size="large"
                            sx={{ px: 4 }}
                        >
                            Me contacter
                        </Button>
                    </Stack>
                </MotionBox>
            </Container>
        </Box>
    );
};

export default Home;