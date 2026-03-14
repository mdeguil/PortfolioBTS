import { Box, Container, Typography, Grid, Card, CardContent,  Button, Chip, Stack,  Accordion, AccordionSummary, AccordionDetails, ImageList, ImageListItem, Divider } from '@mui/material';
import { GitHub, Launch, ExpandMore, Code, CalendarToday } from '@mui/icons-material';

// Imports des images FirstGame
import level_01 from '../assets/projet_perso/Level-01.png';
import level_03 from '../assets/projet_perso/Level-03.png';
import level_03_end from '../assets/projet_perso/Level-03-end.png';

// Imports des images Mura (si tu en as)
// import mura1 from '../assets/projet_perso/mura-1.png';
// import mura2 from '../assets/projet_perso/mura-2.png';

interface Projet {
    id: number;
    titre: string;
    description: string;
    descriptionLongue?: string;
    images?: string[];
    technologies: string[];
    fonctionnalites?: string[];
    date: string;
    github?: string;
    demo?: string;
    statut: 'En cours' | 'Terminé' | 'En pause';
    afficherDetails?: boolean;
}

const Projets = () => {
    const projets: Projet[] = [
        {
            id: 1,
            titre: 'Mura',
            description: 'Application développée en TypeScript',
            descriptionLongue: 'Projet personnel développé en TypeScript permettant de [ajoute ta description détaillée ici - qu\'est-ce que fait Mura exactement ?]',
            // images: [
            //     mura1,  // ← Décommente quand tu auras les images
            //     mura2,
            // ],
            technologies: ['TypeScript'],
            fonctionnalites: [
                'Fonctionnalité 1',
                'Fonctionnalité 2',
                'Fonctionnalité 3',
            ],
            date: '2026',
            github: 'https://github.com/mdeguil/mura',
            statut: 'En cours',
            afficherDetails: true,
        },
        {
            id: 2,
            titre: 'FirstGame',
            description: 'Découverte du langage C# avec Unity sur la création d\'un mini jeu vidéo',
            descriptionLongue: 'Premier projet de développement de jeu vidéo réalisé avec Unity et C#. Ce projet m\'a permis de découvrir les bases du développement de jeux, la gestion de la physique, les interactions utilisateur et la logique de gameplay.',
            images: [
                level_01,      // ← Utilise les variables importées
                level_03,
                level_03_end,
            ],
            technologies: ['C#', 'Unity', 'Visual Studio'],
            fonctionnalites: [
                'Déplacement du personnage avec physique 2D',
                'Système de collecte d\'objets',
                'Ennemis avec IA basique',
                'Système de score',
            ],
            date: '2024',
            github: 'https://github.com/mdeguil/FirstGame',
            statut: 'Terminé',
            afficherDetails: true,
        },
        {
            id: 3,
            titre: 'PortfolioBTS',
            description: 'Création d\'un portfolio pour les épreuves du BTS en React + TypeScript. Portfolio professionnel développé dans le cadre du BTS SIO option SLAM. Utilise React, TypeScript et Material-UI pour créer une interface moderne et responsive présentant l\'ensemble de mes compétences, réalisations et projets du BTS.',
            technologies: ['React', 'TypeScript', 'Material-UI'],
            date: 'Janvier 2026',
            github: 'https://github.com/mdeguil/PortfolioBTS',
            statut: 'En cours',
            afficherDetails: false,
        },
    ];

    const getStatutColor = (statut: string) => {
        switch (statut) {
            case 'Terminé':
                return 'success';
            case 'En cours':
                return 'primary';
            case 'En pause':
                return 'warning';
            default:
                return 'default';
        }
    };

    return (
        <Box sx={{ py: 8, minHeight: 'calc(100vh - 64px)', bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" sx={{ mb: 2, textAlign: 'center' }}>
                    Mes Projets Personnels
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 6, textAlign: 'center' }}>
                    Projets développés en autonomie pour explorer de nouvelles technologies
                </Typography>

                {/* Statistiques */}
                <Grid container spacing={3} sx={{ mb: 6 }}>
                    <Grid size={12} sx={{ sm: 4}}>
                        <Card sx={{ textAlign: 'center', p: 2 }}>
                            <Typography variant="h3" color="primary" fontWeight={700}>
                                {projets.length}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Projets réalisés
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid size={6} sx={{ sm: 4}}>
                        <Card sx={{ textAlign: 'center', p: 2 }}>
                            <Typography variant="h3" color="success.main" fontWeight={700}>
                                {projets.filter(p => p.statut === 'Terminé').length}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Terminés
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid  size={6} sx={{ sm: 4}}>
                        <Card sx={{ textAlign: 'center', p: 2 }}>
                            <Typography variant="h3" color="primary.main" fontWeight={700}>
                                {projets.filter(p => p.statut === 'En cours').length}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                En cours
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>

                {/* Liste des projets */}
                <Stack spacing={4}>
                    {projets.map((projet) => (
                        <Card key={projet.id} elevation={3}>
                            <CardContent sx={{ p: 4 }}>
                                {/* En-tête du projet */}
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2, flexWrap: 'wrap', gap: 2 }}>
                                    <Box>
                                        <Typography variant="h4" gutterBottom fontWeight={600} color="primary">
                                            {projet.titre}
                                        </Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                            <CalendarToday fontSize="small" color="action" />
                                            <Typography variant="body2" color="text.secondary">
                                                {projet.date}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Chip
                                        label={projet.statut}
                                        color={getStatutColor(projet.statut) as any}
                                        sx={{ fontWeight: 600 }}
                                    />
                                </Box>

                                <Typography variant="body1" paragraph>
                                    {projet.description}
                                </Typography>

                                {/* Technologies */}
                                <Box sx={{ mb: 3 }}>
                                    <Typography variant="subtitle2" gutterBottom fontWeight={600}>
                                        Technologies utilisées :
                                    </Typography>
                                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                        {projet.technologies.map((tech) => (
                                            <Chip key={tech} label={tech} size="small" color="primary" variant="outlined" />
                                        ))}
                                    </Stack>
                                </Box>

                                {/* Boutons d'action */}
                                <Stack direction="row" spacing={2} sx={{ mb: projet.afficherDetails ? 3 : 0 }}>
                                    {projet.github && (
                                        <Button
                                            variant="outlined"
                                            startIcon={<GitHub />}
                                            href={projet.github}
                                            target="_blank"
                                        >
                                            Code Source
                                        </Button>
                                    )}
                                    {projet.demo && (
                                        <Button
                                            variant="contained"
                                            startIcon={<Launch />}
                                            href={projet.demo}
                                            target="_blank"
                                        >
                                            Voir la Démo
                                        </Button>
                                    )}
                                </Stack>

                                {/* Divider et Détails uniquement si afficherDetails est true */}
                                {projet.afficherDetails && (
                                    <>
                                        <Divider sx={{ my: 3 }} />

                                        {/* Détails du projet (accordéon) */}
                                        <Accordion elevation={2}>
                                            <AccordionSummary expandIcon={<ExpandMore />}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                    <Code color="primary" />
                                                    <Typography variant="h6" fontWeight={600}>
                                                        Détails du projet
                                                    </Typography>
                                                </Box>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Grid container spacing={3}>
                                                    {/* Galerie d'images */}
                                                    {projet.images && projet.images.length > 0 && (
                                                        <Grid  size={12}>
                                                            <Typography variant="subtitle1" gutterBottom fontWeight={600}>
                                                                📸 Captures d'écran
                                                            </Typography>
                                                            <ImageList
                                                                sx={{ width: '100%', maxHeight: 450 }}
                                                                cols={projet.images.length === 1 ? 1 : projet.images.length === 2 ? 2 : 3}
                                                                gap={8}
                                                            >
                                                                {projet.images.map((image, imgIndex) => (
                                                                    <ImageListItem key={imgIndex}>
                                                                        <img
                                                                            src={image}
                                                                            alt={`${projet.titre} - Screenshot ${imgIndex + 1}`}
                                                                            loading="lazy"
                                                                            style={{
                                                                                borderRadius: '8px',
                                                                                width: '100%',
                                                                                height: '100%',
                                                                                objectFit: 'cover',
                                                                                cursor: 'pointer',
                                                                            }}
                                                                            onClick={() => window.open(image, '_blank')}
                                                                        />
                                                                    </ImageListItem>
                                                                ))}
                                                            </ImageList>
                                                        </Grid>
                                                    )}

                                                    {/* Description détaillée */}
                                                    {projet.descriptionLongue && (
                                                        <Grid  size={12}>
                                                            <Typography variant="subtitle1" gutterBottom fontWeight={600}>
                                                                📝 Description détaillée
                                                            </Typography>
                                                            <Typography variant="body1" paragraph>
                                                                {projet.descriptionLongue}
                                                            </Typography>
                                                        </Grid>
                                                    )}

                                                    {/* Fonctionnalités */}
                                                    {projet.fonctionnalites && projet.fonctionnalites.length > 0 && (
                                                        <Grid size={12}>
                                                            <Typography variant="subtitle1" gutterBottom fontWeight={600}>
                                                                ⚡ Fonctionnalités principales
                                                            </Typography>
                                                            <Stack spacing={0.5}>
                                                                {projet.fonctionnalites.map((fonctionnalite, idx) => (
                                                                    <Typography key={idx} variant="body2" color="text.secondary">
                                                                        ✓ {fonctionnalite}
                                                                    </Typography>
                                                                ))}
                                                            </Stack>
                                                        </Grid>
                                                    )}
                                                </Grid>
                                            </AccordionDetails>
                                        </Accordion>
                                    </>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
};

export default Projets;