import { Box, Container, Typography, Paper } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import { School, Work, Code } from '@mui/icons-material';

const Activite = () => {
    const activities = [
        {
            date: '2024 - Présent',
            title: 'Formation Développement Web',
            description: 'Formation intensive en développement Full Stack',
            icon: <School />,
            color: 'primary'
        },
        {
            date: '2023',
            title: 'Projet Personnel',
            description: 'Création d\'un portfolio avec React et TypeScript',
            icon: <Code />,
            color: 'secondary'
        },
        {
            date: '2022',
            title: 'Stage en développement',
            description: 'Stage de développement web',
            icon: <Work />,
            color: 'success'
        },
        // Ajoute tes activités
    ];

    return (
        <Box sx={{ py: 8, minHeight: 'calc(100vh - 64px)', bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" sx={{ mb: 6, textAlign: 'center' }}>
                    Mon Activité
                </Typography>

                <Timeline position="alternate">
                    {activities.map((activity, index) => (
                        <TimelineItem key={index}>
                            <TimelineOppositeContent color="text.secondary">
                                {activity.date}
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color={activity.color as any}>
                                    {activity.icon}
                                </TimelineDot>
                                {index < activities.length - 1 && <TimelineConnector />}
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} sx={{ p: 2 }}>
                                    <Typography variant="h6" component="h3">
                                        {activity.title}
                                    </Typography>
                                    <Typography color="text.secondary">
                                        {activity.description}
                                    </Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Container>
        </Box>
    );
};

export default Activite;