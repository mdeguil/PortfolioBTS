import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, Chip, Stack } from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';

interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    github?: string;
    demo?: string;
}

const Projets = () => {
    const projects: Project[] = [
        {
            id: 1,
            title: "Projet Portfolio",
            description: "Portfolio personnel développé avec React, TypeScript et Material-UI",
            technologies: ["React", "TypeScript", "Material-UI", "Vite"],
            github: "https://github.com/...",
        },
        // Ajoute tes projets ici
    ];

    return (
        <Box sx={{ py: 8, minHeight: 'calc(100vh - 64px)', bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" sx={{ mb: 6, textAlign: 'center' }}>
                    Mes Projets
                </Typography>

                <Grid container spacing={4}>
                    {projects.map((project) => (
                        <Grid size={12} sx={{ sm:6, md: 4}} key={project.id}>
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: 8,
                                    },
                                }}
                            >
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography variant="h5" gutterBottom fontWeight={600}>
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                        {project.description}
                                    </Typography>
                                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                        {project.technologies.map((tech) => (
                                            <Chip key={tech} label={tech} size="small" color="primary" variant="outlined" />
                                        ))}
                                    </Stack>
                                </CardContent>
                                <CardActions>
                                    {project.github && (
                                        <Button
                                            size="small"
                                            startIcon={<GitHub />}
                                            href={project.github}
                                            target="_blank"
                                        >
                                            GitHub
                                        </Button>
                                    )}
                                    {project.demo && (
                                        <Button
                                            size="small"
                                            startIcon={<Launch />}
                                            href={project.demo}
                                            target="_blank"
                                        >
                                            Demo
                                        </Button>
                                    )}
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Projets;