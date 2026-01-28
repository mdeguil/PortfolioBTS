import { Box, Container, Typography, Grid, Card, CardContent, Chip, Stack } from '@mui/material';
import { Business, CalendarToday, LocationOn } from '@mui/icons-material';

interface Stage {
    id: number;
    entreprise: string;
    poste: string;
    periode: string;
    lieu: string;
    description: string;
    technologies: string[];
}

const Stages = () => {
    const stages: Stage[] = [
        {
            id: 1,
            entreprise: 'Nom de l\'entreprise',
            poste: 'Développeur Full Stack',
            periode: 'Juin 2024 - Août 2024',
            lieu: 'Paris, France',
            description: 'Développement d\'une application web avec React et Spring Boot...',
            technologies: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL']
        },
        // Ajoute tes stages
    ];

    return (
        <Box sx={{ py: 8, minHeight: 'calc(100vh - 64px)', bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" sx={{ mb: 6, textAlign: 'center' }}>
                    Mes Stages
                </Typography>

                <Grid container spacing={4}>
                    {stages.map((stage) => (
                        <Grid size={12} sx={{md: 6}} key={stage.id}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography variant="h5" gutterBottom fontWeight={600}>
                                        {stage.poste}
                                    </Typography>

                                    <Stack spacing={1} sx={{ mb: 2 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <Business fontSize="small" color="action" />
                                            <Typography variant="body2" color="text.secondary">
                                                {stage.entreprise}
                                            </Typography>
                                        </Box>

                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <CalendarToday fontSize="small" color="action" />
                                            <Typography variant="body2" color="text.secondary">
                                                {stage.periode}
                                            </Typography>
                                        </Box>

                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <LocationOn fontSize="small" color="action" />
                                            <Typography variant="body2" color="text.secondary">
                                                {stage.lieu}
                                            </Typography>
                                        </Box>
                                    </Stack>

                                    <Typography variant="body2" paragraph>
                                        {stage.description}
                                    </Typography>

                                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                        {stage.technologies.map((tech) => (
                                            <Chip key={tech} label={tech} size="small" color="primary" variant="outlined" />
                                        ))}
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Stages;