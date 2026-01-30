import { Box, Container, Typography, Button, Stack, Avatar, Paper, Grid, LinearProgress } from '@mui/material';
import { Code, School } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import profileImage from '../assets/ME.png';
import SocialLinks from "../components/SocialLinks.tsx";

const MotionBox = motion(Box);

const Profil = () => {
    // Aperçu des compétences principales
    const mainSkills = [
        { name: 'React + TypeScript', level: 50 },
        { name: 'Java', level: 30 },
        { name: 'Symfony', level: 15 },
        { name: 'C#', level: 5 },
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
                            alt="DEGUIL Matéo"
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
                            Étudiant BTS SIO SLAM | Développeur Full Stack
                        </Typography>

                        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 4 }}>
                           <SocialLinks size="large" />
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
                        Actuellement étudiant en BTS SIO option SLAM (Solutions Logicielles et Applications Métiers),
                        je me spécialise dans le développement d’applications web et la conception de solutions logicielles.
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                        Au cours de ma formation, j’ai acquis des compétences en développement Front-End et Back-End,
                        notamment avec React, TypeScript, Java et Symfony, à travers des projets scolaires et personnels.
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Mon objectif est de continuer à développer mes compétences techniques
                        et de concevoir des applications fiables, performantes et adaptées aux besoins des utilisateurs.
                    </Typography>
                </Paper>

                {/* Aperçu des compétences */}
                <Grid container spacing={4} sx={{ mb: 6 }}>
                    <Grid size={12} sx={{ md: 6}}>
                        <Paper sx={{ p: 3, height: '100%' }}>
                            <Typography variant="h5" gutterBottom fontWeight={600}>
                                Répartition des technologies utilisées dans mes projets (scolaires et personnels)
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
                        Mes projets personnels
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                        Projets réalisés en autonomie afin de renforcer mes compétences
                        et d’explorer de nouvelles technologies du développement d'application.
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