import { Box, Container, Typography, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import profileImage from '../assets/ME.png';

const MotionBox = motion(Box);

const Profil = () => {
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
                    {/* Avatar en grand */}
                    <Avatar
                        alt="Votre Nom"
                        src={profileImage}
                        sx={{
                            width: 150,
                            height: 150,
                            margin: '0 auto 2rem',
                            border: '4px solid white',
                            boxShadow: 4
                        }}
                    />

                    <Typography
                        variant="h1"
                        sx={{
                            mb: 2,
                            background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        DEGUIL Matéo
                    </Typography>

                    <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
                        Développeur Full Stack | React • TypeScript • Java • Symfony
                    </Typography>

                </MotionBox>
            </Container>
        </Box>
    );
};

export default Profil;