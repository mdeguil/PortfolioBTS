import { Box, Container, Typography, Paper, Grid, Chip, Stack, Accordion, AccordionSummary, AccordionDetails, List, ListItem, Link as MuiLink, Card, CardContent, Button } from '@mui/material';
import { ExpandMore, CheckCircle, Download } from '@mui/icons-material';
import { Link } from 'react-router-dom';

interface Activite {
    nom: string;
    lien?: string;
    type?: 'scolaire' | 'personnel' | 'stage';
}

interface Competence {
    id: string;
    code: string;
    titre: string;
    sousCompetences: string[];
    activites: Activite[];
}

const Competences = () => {
    const competences: Competence[] = [
        {
            id: 'C1',
            code: 'B1.1',
            titre: 'Gérer le patrimoine informatique',
            sousCompetences: [
                'Recenser et identifier les ressources numériques',
                'Exploiter des référentiels, normes et standards adoptés par le prestataire informatique',
                'Mettre en place et vérifier les niveaux d\'habilitation associés à un service',
                'Vérifier les conditions de la continuité d\'un service informatique',
                'Gérer des sauvegardes',
                'Vérifier le respect des règles d\'utilisation des ressources numériques',
            ],
            activites: [
                { nom: 'Gitlab + Documentation (README)', lien: '/realisations', type: 'scolaire' },
                { nom: 'La Smatis : Horizon ', lien: '/stages', type: 'stage' },
            ],
        },
        {
            id: 'C2',
            code: 'B1.2',
            titre: 'Répondre aux incidents et aux demandes d\'assistance et d\'évolution',
            sousCompetences: [
                'Collecter, suivre et orienter des demandes',
                'Traiter des demandes concernant les services réseau et système, applicatifs',
                'Traiter des demandes concernant les applications',
            ],
            activites: [
                { nom: 'Echappee ', lien: '/realisations', type: 'scolaire' },
                { nom: 'ChronosForamtion ', lien: '/realisations', type: 'scolaire' },
                { nom: 'Stage la CPAM de la charente', lien: '/stages', type: 'stage' },
                { nom: 'La Smatis : Horizon ', lien: '/stages', type: 'stage' },
            ],
        },
        {
            id: 'C3',
            code: 'B1.3',
            titre: 'Développer la présence en ligne de l\'organisation',
            sousCompetences: [
                'Participer à la valorisation de l\'image de l\'organisation sur les médias numériques en tenant compte du cadre juridique et des enjeux économiques',
                'Référencer les services en ligne de l\'organisation et mesurer leur visibilité',
                'Participer à l\'évolution d\'un site Web exploitant les données de l\'organisation',
            ],
            activites: [
                { nom: 'Site : Aunis Freeware ', lien: '/realisations', type: 'scolaire' },
                { nom: 'La Smatis : Horizon ', lien: '/stages', type: 'stage' },
            ],
        },
        {
            id: 'C4',
            code: 'B1.4',
            titre: 'Travailler en mode projet',
            sousCompetences: [
                'Analyser les objectifs et les modalités d\'organisation d\'un projet',
                'Planifier les activités',
                'Évaluer les indicateurs de suivi d\'un projet et analyser les écarts',
            ],
            activites: [
                { nom: 'Echappee ', lien: '/realisations', type: 'scolaire' },
                { nom: 'ChronosForamtion ', lien: '/realisations', type: 'scolaire' },
                { nom: 'Stage la CPAM de la charente', lien: '/stages', type: 'stage' },
                { nom: 'La Smatis : Horizon ', lien: '/stages', type: 'stage' },
                { nom: 'Mura', lien: '/projets', type: 'personnel' },
            ],
        },
        {
            id: 'C5',
            code: 'B1.5',
            titre: 'Mettre à disposition des utilisateurs un service informatique',
            sousCompetences: [
                'Réaliser les tests d\'intégration et d\'acceptation d\'un service',
                'Déployer un service',
                'Accompagner les utilisateurs dans la mise en place d\'un service',
            ],
            activites: [
                { nom: 'Echappee ', lien: '/realisations', type: 'scolaire' },
                { nom: 'ChronosForamtion ', lien: '/realisations', type: 'scolaire' },
                { nom: 'La Smatis : Horizon ', lien: '/stages', type: 'stage' },
                { nom: 'Portfolio ', lien: '/projets', type: 'personnel' },
                { nom: 'Mura', lien: '/projets', type: 'personnel' },
            ],
        },
        {
            id: 'C6',
            code: 'B1.6',
            titre: 'Organiser son développement professionnel',
            sousCompetences: [
                'Mettre en place son environnement d\'apprentissage personnel',
                'Mettre en œuvre des outils et stratégies de veille informationnelle',
                'Gérer son identité professionnelle',
                'Développer son projet professionnel',
            ],
            activites: [
                { nom: 'Echappee ', lien: '/realisations', type: 'scolaire' },
                { nom: 'ChronosForamtion ', lien: '/realisations', type: 'scolaire' },
                { nom: 'Stage la CPAM de la charente', lien: '/stages', type: 'stage' },
                { nom: 'La Smatis : Horizon ', lien: '/stages', type: 'stage' },
                { nom: 'First Game', lien: '/projets', type: 'personnel' },
                { nom: 'Mura', lien: '/projets', type: 'personnel' },
            ],
        },
    ];

    // Calcul des statistiques
    const totalCompetences = competences.length;

    return (
        <Box sx={{ py: 8, minHeight: 'calc(100vh - 64px)', bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" sx={{ mb: 2, textAlign: 'center' }}>
                    Les Compétences BTS SIO SLAM
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 6, textAlign: 'center' }}>
                    Référentiel des compétences et activités associées
                </Typography>

                {/* Statistiques globales avec bouton de téléchargement */}
                <Paper sx={{ p: 3, mb: 4, bgcolor: 'primary.main', color: 'white' }}>
                    <Grid container spacing={3} alignItems="center">
                        <Grid size={12} sx={{ md: 4 }}>
                            <Box textAlign="center">
                                <Typography variant="h3" fontWeight={700}>
                                    {totalCompetences}
                                </Typography>
                                <Typography variant="body1">
                                    Compétences du référentiel
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={12} sx={{ md: 4 }}>
                            <Box textAlign="center">
                                <Typography variant="h3" fontWeight={700}>
                                    8
                                </Typography>
                                <Typography variant="body1">
                                    Activités réalisées
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={12} sx={{ md: 4 }}>
                            <Box textAlign="center">
                                <Button
                                    variant="outlined"
                                    startIcon={<Download />}
                                    href="../public/tableau-competences.xlsx"
                                    download="Tableau_Competences_BTS_SIO_DEGUIL_Mateo.xlsx"
                                    sx={{
                                        color: 'white',
                                        borderColor: 'white',
                                        '&:hover': {
                                            borderColor: 'white',
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)'
                                        }
                                    }}
                                >
                                    Télécharger le tableau de compétence
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>

                {/* Navigation rapide */}
                <Paper sx={{ p: 2, mb: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        Navigation rapide :
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        {competences.map((comp, index) => (
                            <Chip
                                key={comp.id}
                                label={`Compétence ${index + 1}`}
                                component="a"
                                href={`#${comp.id}`}
                                clickable
                                color="primary"
                                variant="outlined"
                            />
                        ))}
                    </Stack>
                </Paper>

                {/* Liste des compétences */}
                <Stack spacing={3}>
                    {competences.map((competence, index) => (
                        <Accordion
                            key={competence.id}
                            id={competence.id}
                            defaultExpanded={index === 0}
                            elevation={3}
                            sx={{
                                scrollMarginTop: '80px',
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                sx={{
                                    bgcolor: 'background.paper',
                                    '&:hover': { bgcolor: 'action.hover' }
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                                    <Chip
                                        label={competence.code}
                                        color="primary"
                                        size="small"
                                        sx={{ fontWeight: 700 }}
                                    />
                                    <Box>
                                        <Typography variant="h6" fontWeight={600}>
                                            Compétence n°{index + 1}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {competence.titre}
                                        </Typography>
                                    </Box>
                                </Box>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Grid container spacing={3}>
                                    {/* Sous-compétences */}
                                    <Grid size={12}>
                                        <Card variant="outlined">
                                            <CardContent>
                                                <Typography variant="h6" gutterBottom fontWeight={600} color="primary">
                                                    📋 Sous-compétences
                                                </Typography>
                                                <List>
                                                    {competence.sousCompetences.map((sc, idx) => (
                                                        <ListItem key={idx} sx={{ py: 0.5 }}>
                                                            <CheckCircle sx={{ mr: 1, fontSize: 18, color: 'success.main' }} />
                                                            <Typography variant="body2">{sc}</Typography>
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            </CardContent>
                                        </Card>
                                    </Grid>

                                    {/* Toutes les activités */}
                                    <Grid size={12}>
                                        <Card variant="outlined">
                                            <CardContent>
                                                <Typography variant="h6" gutterBottom fontWeight={600} color="primary">
                                                    🎯 Réalisations validant cette compétence
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                                    Projets scolaires, personnels et de stage
                                                </Typography>
                                                <List>
                                                    {competence.activites.map((activite, idx) => (
                                                        <ListItem key={idx} sx={{ py: 0.5 }}>
                                                            <MuiLink
                                                                component={Link}
                                                                to={activite.lien || '/realisations'}
                                                                underline="hover"
                                                                sx={{
                                                                    color: 'primary.main',
                                                                    fontWeight: 500,
                                                                    '&:hover': { color: 'primary.dark' }
                                                                }}
                                                            >
                                                                • {activite.nom}
                                                            </MuiLink>
                                                        </ListItem>
                                                    ))}
                                                </List>
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

export default Competences;