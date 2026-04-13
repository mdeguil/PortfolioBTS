import { Box, Container, Typography, Grid, Card, CardContent, Button, Chip, Stack, Accordion, AccordionSummary, AccordionDetails, ImageList, ImageListItem, Divider } from '@mui/material';
import { GitHub, ExpandMore, Code, CalendarToday, CheckCircle } from '@mui/icons-material';

interface ProjetScolaire {
    id: number;
    titre: string;
    description: string;
    descriptionLongue?: string;
    images: string[];
    technologies: string[];
    competencesValidees: string[];
    livrables: string[];
    date: string;
    githubUrl?: string;
    statut: 'En cours' | 'Terminé' | 'En pause';
}

const Activite = () => {
    const projets: ProjetScolaire[] = [
        {
            id: 1,
            titre: 'Site Aunis Freeware',
            date: '2024',
            description: "Plateforme de l'association Aunis Freeware permettant de s'initier à la programmation web.",
            descriptionLongue: "Plateforme de l'association Aunis Freeware permettant de s'initier à la programmation web et à la gestion de bases de données. Ce projet a été réalisé pour offrir une interface pédagogique aux membres.",
            technologies: ['Html/Css', 'Bootstrap', 'MySql', 'JavaScript'],
            competencesValidees: ['B1.3'],
            livrables: ['Site Aunis Freeware'],
            statut: 'Terminé',
            images: [
                '/projet_scolaire/aunis_freeware/accueil.png',
                '/projet_scolaire/aunis_freeware/applications.png',
                '/projet_scolaire/aunis_freeware/connexion.png',
            ],
            githubUrl: 'https://github.com/'
        },
        {
            id: 2,
            titre: 'Application Echappee',
            date: '2026',
            description: 'Générateur d\'itinéraires touristiques personnalisés en Charente.',
            descriptionLongue: 'Cette application génère des itinéraires touristiques personnalisés en Charente grâce à l\'exploitation de données via API. Elle couple un backend Symfony avec une application mobile Android.',
            technologies: ['AndroidStudio (Java)', 'Symfony (PHP)', 'MySQL', 'Gitlab'],
            competencesValidees: ['B1.2', 'B1.4', 'B1.5', 'B1.6'],
            livrables: [
                'Applications fonctionnel',
                'Api des données exploitées',
                'Schémat de donnée',
                'Documentation de l\'application',
            ],
            statut: 'En cours',
            images: [
                '/projet_scolaire/echappee/img1.png',
                '/projet_scolaire/echappee/img2.png',
                '/projet_scolaire/echappee/img3.png',
            ],
            githubUrl: 'https://gitlab.com/Echappee',
        },
        {
            id: 3,
            titre: 'Application ChronosFormation',
            date: '2026',
            description: 'Application dédiée à l\'inscription en ligne des stagiaires.',
            descriptionLongue: 'Une application dédiée à l\'inscription en ligne des stagiaires aux différents modules de formation proposés. Elle permet une gestion centralisée des inscriptions et des parcours stagiaires.',
            technologies: ['Symfony (PHP)', 'MySQL', 'Gitlab'],
            competencesValidees: ['B1.2', 'B1.4', 'B1.5', 'B1.6'],
            livrables: [
                'Applications fonctionnel',
                'Schémat de donnée',
                'Documentation de l\'application',
            ],
            statut: 'En cours',
            images: [
                '/projet_scolaire/chronosformation/img1.png',
                '/projet_scolaire/chronosformation/img2.png',
            ],
            githubUrl: 'https://gitlab.com/'
        }
    ];

    const getStatutColor = (statut: string) => {
        switch (statut) {
            case 'Terminé': return 'success';
            case 'En cours': return 'primary';
            case 'En pause': return 'warning';
            default: return 'default';
        }
    };

    return (
        <Box sx={{ py: 8, minHeight: 'calc(100vh - 64px)', bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" sx={{ mb: 2, textAlign: 'center', fontWeight: 700, color: 'primary.main' }}>
                    Projets Scolaires
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 6, textAlign: 'center', maxWidth: 700, mx: 'auto' }}>
                    Réalisations majeures effectuées dans le cadre de ma formation en BTS SIO SLAM.
                </Typography>

                <Stack spacing={4}>
                    {projets.map((projet) => (
                        <Card key={projet.id} elevation={3}>
                            <CardContent sx={{ p: 4 }}>
                                {/* En-tête */}
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2, flexWrap: 'wrap', gap: 2 }}>
                                    <Box>
                                        <Typography variant="h4" fontWeight={600} color="primary">
                                            {projet.titre}
                                        </Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <CalendarToday fontSize="small" color="action" />
                                            <Typography variant="body2" color="text.secondary">
                                                {projet.date}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Chip label={projet.statut} color={getStatutColor(projet.statut) as never} />
                                </Box>

                                <Typography variant="body1" paragraph>
                                    {projet.description}
                                </Typography>

                                {/* Technologies */}
                                <Box sx={{ mb: 3 }}>
                                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                        {projet.technologies.map((tech) => (
                                            <Chip key={tech} label={tech} size="small" color="primary" variant="outlined" />
                                        ))}
                                    </Stack>
                                </Box>

                                {/* Bouton Code Source */}
                                {projet.githubUrl && (
                                    <Button
                                        variant="outlined"
                                        startIcon={<GitHub />}
                                        href={projet.githubUrl}
                                        target="_blank"
                                        sx={{ mb: 3 }}
                                    >
                                        Code Source
                                    </Button>
                                )}

                                <Divider sx={{ my: 3 }} />

                                {/* Détails Accordéon */}
                                <Accordion elevation={2}>
                                    <AccordionSummary expandIcon={<ExpandMore />}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <Code color="primary" />
                                            <Typography variant="h6" fontWeight={600}>Détails et Livrables</Typography>
                                        </Box>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Grid container spacing={3}>
                                            {/* Galerie d'images */}
                                            {projet.images.length > 0 && (
                                                <Grid size={12}>
                                                    <Typography variant="subtitle1" gutterBottom fontWeight={600}>📸 Captures d'écran</Typography>
                                                    <ImageList sx={{ width: '100%', maxHeight: 450 }} cols={projet.images.length >= 3 ? 3 : projet.images.length} gap={8}>
                                                        {projet.images.map((image, imgIndex) => (
                                                            <ImageListItem key={imgIndex}>
                                                                <img
                                                                    src={image}
                                                                    alt={`${projet.titre}-${imgIndex}`}
                                                                    loading="lazy"
                                                                    style={{ borderRadius: '8px', width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }}
                                                                    onClick={() => window.open(image, '_blank')}
                                                                />
                                                            </ImageListItem>
                                                        ))}
                                                    </ImageList>
                                                </Grid>
                                            )}

                                            <Grid size={12} sx={{ md: 6}}>
                                                <Typography variant="subtitle1" gutterBottom fontWeight={600}>📝 Description détaillée</Typography>
                                                <Typography variant="body2">{projet.descriptionLongue}</Typography>
                                            </Grid>

                                            <Grid  size={12} sx={{ md: 6}}>
                                                <Typography variant="subtitle1" gutterBottom fontWeight={600}>📦 Livrables et Compétences</Typography>
                                                <Stack spacing={1}>
                                                    {projet.livrables.map((liv, idx) => (
                                                        <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                            <CheckCircle sx={{ fontSize: 16, color: 'success.main' }} />
                                                            <Typography variant="body2">{liv}</Typography>
                                                        </Box>
                                                    ))}
                                                </Stack>
                                                <Stack direction="row" spacing={1} sx={{ mt: 2 }} flexWrap="wrap">
                                                    {projet.competencesValidees.map((comp) => (
                                                        <Chip key={comp} label={comp} size="small" color="success" />
                                                    ))}
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                            </CardContent>
                        </Card>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
};

export default Activite;