import { Box, Container, Typography, Grid, Paper, LinearProgress, Chip, Stack } from '@mui/material';
import { Code, Storage, Build, Language } from '@mui/icons-material';

const Competences = () => {
    const skillCategories = [
        {
            title: 'Front-end',
            icon: <Code />,
            skills: [
                { name: 'React', level: 85 },
                { name: 'TypeScript', level: 80 },
                { name: 'HTML/CSS', level: 90 },
                { name: 'Material-UI', level: 75 },
            ]
        },
        {
            title: 'Back-end',
            icon: <Storage />,
            skills: [
                { name: 'Java / Spring Boot', level: 70 },
                { name: 'Symfony', level: 65 },
                { name: 'Node.js', level: 60 },
                { name: 'PostgreSQL', level: 70 },
            ]
        },
        {
            title: 'Outils',
            icon: <Build />,
            skills: [
                { name: 'Git / GitLab', level: 80 },
                { name: 'Docker', level: 60 },
                { name: 'VS Code', level: 90 },
                { name: 'Postman', level: 75 },
            ]
        },
    ];

    const softSkills = [
        'Travail en équipe',
        'Résolution de problèmes',
        'Autonomie',
        'Curiosité',
        'Communication',
        'Adaptabilité'
    ];

    return (
        <Box sx={{ py: 8, minHeight: 'calc(100vh - 64px)', bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" sx={{ mb: 6, textAlign: 'center' }}>
                    Mes Compétences
                </Typography>

                <Grid container spacing={4} sx={{ mb: 6 }}>
                    {skillCategories.map((category, index) => (
                        <Grid size={12} sx={{md: 4}}  key={index}>
                            <Paper sx={{ p: 3, height: '100%' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                    {category.icon}
                                    <Typography variant="h5" sx={{ ml: 1 }}>
                                        {category.title}
                                    </Typography>
                                </Box>

                                {category.skills.map((skill) => (
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
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                <Paper sx={{ p: 4 }}>
                    <Typography variant="h5" sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Language /> Soft Skills
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        {softSkills.map((skill) => (
                            <Chip key={skill} label={skill} color="primary" variant="outlined" />
                        ))}
                    </Stack>
                </Paper>
            </Container>
        </Box>
    );
};

export default Competences;