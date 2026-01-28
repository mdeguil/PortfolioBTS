import { Box, Container, Typography, Paper, Grid, Chip, Stack } from '@mui/material';
import { Code, School } from '@mui/icons-material';

const About = () => {
    const skills = ["React", "TypeScript", "Java", "Spring Boot", "Symfony", "Node.js", "MongoDB", "PostgreSQL"];

    return (
        <Box sx={{ py: 8, minHeight: 'calc(100vh - 64px)', bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" sx={{ mb: 6, textAlign: 'center' }}>
                    À propos de moi
                </Typography>

                <Grid container spacing={4}>
                    <Grid size={12} sx={{ md: 8 }}>
                        <Paper sx={{ p: 4, mb: 4 }}>
                            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Code /> Développeur Full Stack
                            </Typography>
                            <Typography variant="body1" color="text.secondary" paragraph>
                                Passionné par le développement web et les nouvelles technologies,
                                je crée des applications modernes et performantes avec React, TypeScript et Java.
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Mon objectif est de concevoir des solutions élégantes et efficaces
                                qui répondent aux besoins des utilisateurs.
                            </Typography>
                        </Paper>

                        <Paper sx={{ p: 4 }}>
                            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <School /> Formation
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                {/* Ajoute ta formation ici */}
                                Formation en développement web...
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid size={12} sx={{ md: 4 }}>
                        <Paper sx={{ p: 4 }}>
                            <Typography variant="h5" gutterBottom>
                                Compétences
                            </Typography>
                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                {skills.map((skill) => (
                                    <Chip key={skill} label={skill} color="primary" sx={{ mb: 1 }} />
                                ))}
                            </Stack>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default About;