import { Box, Container, Typography, Paper, Grid, Chip, Stack, Avatar, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore, CheckCircle, Code, School, Work, Build } from '@mui/icons-material';

interface Realisations {
    id: number;
    titre: string;
    type: 'projet' | 'stage' | 'formation' | 'perso';
    date: string;
    description: string;
    technologies: string[];
    competencesValidees: string[]; // Codes des compétences BTS validées
    livrables: string[];
    contexte: string;
}

const Activite = () => {
    const activites: Realisations[] = [
        {
            id: 1,
            titre: 'Développement d\'un Portfolio avec React & TypeScript',
            type: 'perso',
            date: 'Janvier 2025',
            description: 'Création d\'un portfolio professionnel pour présenter mes compétences et projets dans le cadre du BTS SIO.',
            technologies: ['React', 'TypeScript', 'Material-UI', 'Vite', 'Git'],
            competencesValidees: ['B1.3', 'B1.6', 'B2.1'],
            livrables: [
                'Site web responsive',
                'Code source sur GitLab',
                'Documentation technique',
            ],
            contexte: 'Projet personnel réalisé pour valider les compétences de développement web et de mise en ligne.'
        },
        {
            id: 2,
            titre: 'Application de gestion de parc informatique',
            type: 'projet',
            date: 'Novembre 2024',
            description: 'Développement d\'une application web permettant de gérer l\'inventaire du matériel informatique d\'une entreprise.',
            technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'Docker'],
            competencesValidees: ['B1.1', 'B2.1', 'B2.3'],
            livrables: [
                'Application web fonctionnelle',
                'Base de données relationnelle',
                'API REST',
                'Documentation utilisateur'
            ],
            contexte: 'Projet réalisé en groupe dans le cadre du BTS pour une entreprise fictive.'
        },
        {
            id: 3,
            titre: 'Stage - Développement d\'une plateforme e-commerce',
            type: 'stage',
            date: 'Mai 2024 - Juillet 2024',
            description: 'Participation au développement d\'une plateforme e-commerce pour une PME locale.',
            technologies: ['Symfony', 'MySQL', 'JavaScript', 'Bootstrap', 'Stripe'],
            competencesValidees: ['B1.2', 'B1.4', 'B1.5', 'B2.1', 'B2.2'],
            livrables: [
                'Module de paiement en ligne',
                'Système de gestion des commandes',
                'Interface d\'administration',
                'Tests unitaires'
            ],
            contexte: 'Stage de 8 semaines dans une entreprise de développement web.'
        },
        {
            id: 4,
            titre: 'Système de ticketing pour support technique',
            type: 'projet',
            date: 'Septembre 2024',
            description: 'Création d\'un système de gestion des tickets pour le support technique d\'une organisation.',
            technologies: ['Node.js', 'Express', 'MongoDB', 'React', 'Socket.io'],
            competencesValidees: ['B1.2', 'B2.1', 'B2.3'],
            livrables: [
                'Application de ticketing',
                'Notifications en temps réel',
                'Tableau de bord statistiques'
            ],
            contexte: 'Projet de groupe visant à améliorer la gestion des incidents informatiques.'
        },
        {
            id: 5,
            titre: 'Formation TypeScript et React avancé',
            type: 'formation',
            date: 'Octobre 2024',
            description: 'Formation approfondie sur TypeScript et les concepts avancés de React.',
            technologies: ['TypeScript', 'React', 'Redux', 'Jest'],
            competencesValidees: ['B1.6'],
            livrables: [
                'Certification de formation',
                'Projets d\'application',
                'Documentation de veille'
            ],
            contexte: 'Formation en ligne suivie dans le cadre de la veille technologique.'
        },
    ];

    const getTypeIcon = (type: string) => {
        switch (type) {
            case 'projet':
                return <Code />;
            case 'stage':
                return <Work />;
            case 'formation':
                return <School />;
            case 'perso':
                return <Build />;
            default:
                return <Code />;
        }
    };

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'projet':
                return 'primary';
            case 'stage':
                return 'success';
            case 'formation':
                return 'info';
            case 'perso':
                return 'secondary';
            default:
                return 'default';
        }
    };

    const getTypeLabel = (type: string) => {
        switch (type) {
            case 'projet':
                return 'Projet';
            case 'stage':
                return 'Stage';
            case 'formation':
                return 'Formation';
            case 'perso':
                return 'Personnel';
            default:
                return type;
        }
    };

    return (
        <Box sx={{ py: 8, minHeight: 'calc(100vh - 64px)', bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" sx={{ mb: 2, textAlign: 'center' }}>
                    Mes Réalisations & Activités
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 6, textAlign: 'center' }}>
                    Ensemble des projets et activités validant les compétences du BTS SIO SLAM
                </Typography>

                <Stack spacing={3}>
                    {activites.map((activite) => (
                        <Accordion key={activite.id} elevation={3}>
                            <AccordionSummary expandIcon={<ExpandMore />}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%', pr: 2 }}>
                                    <Avatar sx={{ bgcolor: `${getTypeColor(activite.type)}.main` }}>
                                        {getTypeIcon(activite.type)}
                                    </Avatar>
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Typography variant="h6" fontWeight={600}>
                                            {activite.titre}
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            {activite.date}
                                        </Typography>
                                    </Box>
                                    <Chip
                                        label={getTypeLabel(activite.type)}
                                        color={getTypeColor(activite.type) as never}
                                        size="small"
                                    />
                                </Box>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Grid container spacing={3}>
                                    {/* Description */}
                                    <Grid size={12}>
                                        <Paper sx={{ p: 2, bgcolor: 'background.default' }}>
                                            <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                                                Contexte
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {activite.contexte}
                                            </Typography>
                                        </Paper>
                                    </Grid>

                                    <Grid size={12}>
                                        <Typography variant="body1" paragraph>
                                            {activite.description}
                                        </Typography>
                                    </Grid>

                                    {/* Compétences validées */}
                                    <Grid size={12} sx={{ md: 6}}>
                                        <Card variant="outlined">
                                            <CardContent>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                                                    <CheckCircle color="success" />
                                                    <Typography variant="subtitle1" fontWeight={600}>
                                                        Compétences BTS validées
                                                    </Typography>
                                                </Box>
                                                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                                    {activite.competencesValidees.map((comp) => (
                                                        <Chip
                                                            key={comp}
                                                            label={comp}
                                                            color="success"
                                                            size="small"
                                                            variant="outlined"
                                                        />
                                                    ))}
                                                </Stack>
                                            </CardContent>
                                        </Card>
                                    </Grid>

                                    {/* Technologies */}
                                    <Grid size={12} sx={{ md: 6}}>
                                        <Card variant="outlined">
                                            <CardContent>
                                                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                                                    Technologies utilisées
                                                </Typography>
                                                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                                    {activite.technologies.map((tech) => (
                                                        <Chip
                                                            key={tech}
                                                            label={tech}
                                                            color="primary"
                                                            size="small"
                                                            variant="outlined"
                                                        />
                                                    ))}
                                                </Stack>
                                            </CardContent>
                                        </Card>
                                    </Grid>

                                    {/* Livrables */}
                                    <Grid size={12}>
                                        <Card variant="outlined">
                                            <CardContent>
                                                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                                                    Livrables et réalisations
                                                </Typography>
                                                <Stack spacing={1}>
                                                    {activite.livrables.map((livrable, idx) => (
                                                        <Typography key={idx} variant="body2" color="text.secondary">
                                                            ✓ {livrable}
                                                        </Typography>
                                                    ))}
                                                </Stack>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
};

export default Activite;