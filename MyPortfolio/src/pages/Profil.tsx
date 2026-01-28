import { Box, Container, Typography, Button, Stack, IconButton, Avatar, Paper, Grid, LinearProgress } from '@mui/material';
import { GitHub, LinkedIn, Email, Code, School } from '@mui/icons-material';
import { FaGitlab } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import profileImage from '../assets/ME.png';

const MotionBox = motion(Box);

const Profil = () => {
    // Aperçu des compétences principales
    const mainSkills = [
        { name: 'React', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Java', level: 70 },
        { name: 'Symfony', level: 65 },
    ];

    // Aperçu des activités récentes
    const recentActivities = [
        {
            date: '2024 - Présent',
            title: 'Formation Développement Web',
            description: 'Formation intensive en développement Full Stack',
            icon: <School />,
            color: 'primary' as const,
        },
        {
            date: '2023',
            title: 'Projet Portfolio',
            description: 'Création d\'un portfolio avec React et TypeScript',
            icon: <Code />,
            color: 'secondary' as const,
        },
    ];

    return (
        <Box sx={{ bgcolor: 'background.default' }}>
            {/* Section Hero */}
            <Box
                sx={{
                    minHeight: '70vh',
                    display: 'flex',
                    alignItems: 'center',
                    background: 'linear-gradient(135deg, #0a1929 0%, #1e3a5f 100%)',
                    py: 8,
                }}
            >
                <Container maxWidth="lg">
                    <MotionBox
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        textAlign="center"
                    >
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
                            Votre Nom
                        </Typography>

                        <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
                            Étudiant BTS SIO SLAM | Développeur Full Stack
                        </Typography>

                        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 4 }}>
                            <IconButton
                                component="a"
                                href="https://github.com/TON_USERNAME"
                                target="_blank"
                                rel="noopener noreferrer"
                                color="primary"
                                size="large"
                            >
                                <GitHub fontSize="large" />
                            </IconButton>

                            <IconButton
                                component="a"
                                href="https://gitlab.com/TON_USERNAME"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ color: '#FC6D26', fontSize: '2.5rem' }}
                                size="large"
                            >
                                <FaGitlab />
                            </IconButton>

                            <IconButton
                                component="a"
                                href="https://linkedin.com/in/TON_USERNAME"
                                target="_blank"
                                rel="noopener noreferrer"
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
                                to="/competences"
                                variant="contained"
                                size="large"
                                sx={{ px: 4 }}
                            >
                                Tableau des compétences BTS
                            </Button>
                            <Button
                                component={Link}
                                to="/activite"
                                variant="outlined"
                                size="large"
                                sx={{ px: 4 }}
                            >
                                Mes réalisations
                            </Button>
                        </Stack>
                    </MotionBox>
                </Container>
            </Box>

            {/* Section À propos */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Paper sx={{ p: 4, mb: 6 }}>
                    <Typography variant="h4" gutterBottom fontWeight={600}>
                        À propos de moi
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                        Actuellement en BTS SIO option SLAM (Solutions Logicielles et Applications Métiers),
                        je suis passionné par le développement web et la création d'applications modernes.
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Mon objectif est de maîtriser les technologies Full Stack (React, TypeScript, Java, Symfony)
                        et de développer des solutions innovantes répondant aux besoins des utilisateurs.
                    </Typography>
                </Paper>

                {/* Aperçu des compétences */}
                <Grid container spacing={4} sx={{ mb: 6 }}>
                    <Grid size={12} sx={{ md: 6}}>
                        <Paper sx={{ p: 3, height: '100%' }}>
                            <Typography variant="h5" gutterBottom fontWeight={600}>
                                Compétences principales
                            </Typography>
                            {mainSkills.map((skill) => (
                                <Box key={skill.name} sx={{ mb: 2 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                        <Typography variant="body2">{skill.name}</Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {skill.level}%
                                        </Typography>
                                    </Box>
                                    <LinearProgress
                                        variant="determinate"
                                        value={skill.level}
                                        sx={{ height: 8, borderRadius: 4 }}
                                    />
                                </Box>
                            ))}
                            <Button
                                component={Link}
                                to="/competences"
                                variant="outlined"
                                fullWidth
                                sx={{ mt: 2 }}
                            >
                                Voir le tableau complet BTS
                            </Button>
                        </Paper>
                    </Grid>

                    <Grid  size={12} sx={{ md: 4}}>
                        <Paper sx={{ p: 3, height: '100%' }}>
                            <Typography variant="h5" gutterBottom fontWeight={600}>
                                Mes projets scolaire
                            </Typography>
                            <Stack spacing={2}>
                                {recentActivities.map((activity, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            display: 'flex',
                                            gap: 2,
                                            alignItems: 'flex-start',
                                            p: 2,
                                            bgcolor: 'background.default',
                                            borderRadius: 2
                                        }}
                                    >
                                        <Avatar sx={{ bgcolor: activity.color === 'primary' ? 'primary.main' : 'secondary.main' }}>
                                            {activity.icon}
                                        </Avatar>
                                        <Box>
                                            <Typography variant="caption" color="text.secondary">
                                                {activity.date}
                                            </Typography>
                                            <Typography variant="subtitle1" fontWeight={600}>
                                                {activity.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {activity.description}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </Stack>
                            <Button
                                component={Link}
                                to="/activite"
                                variant="outlined"
                                fullWidth
                                sx={{ mt: 2 }}
                            >
                                Voir toutes mes réalisations
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>

                {/* Section Projets */}
                <Paper sx={{ p: 4 }}>
                    <Typography variant="h5" gutterBottom fontWeight={600}>
                        Mes projets personelle
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                        Découvrez mes dernières réalisations et projets de développement
                    </Typography>
                    <Button
                        component={Link}
                        to="/projets"
                        variant="contained"
                        size="large"
                    >
                        Voir mes projets
                    </Button>
                </Paper>
            </Container>
        </Box>
    );
};

export default Profil;