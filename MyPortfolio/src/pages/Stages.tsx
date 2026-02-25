import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Chip,
    Stack,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Divider,
    ImageListItem, ImageList
} from '@mui/material';
import { Business, CalendarToday, LocationOn, ExpandMore, FolderOpen } from '@mui/icons-material';
import SMATIS_Horizon from '../assets/Stage-SMATIS/SMATIS-Horizon.png';
import SMATIS_Horizon_Stat from '../assets/Stage-SMATIS/SMATIS-Horizon-Statistiques.png';
import CPAM_Formulaire from '../assets/Stage-CPAM/CPAM-Formulaire.png';

interface Projet {
    titre: string;
    description: string;
    images?: string[];
    technologies: string[];
    realisations: string[];
}

interface Stage {
    id: number;
    entreprise: string;
    poste: string;
    periode: string;
    lieu: string;
    description: string;
    technologies: string[];
    projets: Projet[];
}

const Stages = () => {
    const stages: Stage[] = [
        {
            id: 1,
            poste: 'Stage de 1ère année - BTS SIO (Option SLAM)',
            entreprise: 'CPAM de la Charente',
            periode: '26 mai 2025 - 27 juin 2025',
            lieu: 'Angoulême, France',
            description: 'Développement d’une application de gestion des ordres de mission. ' +
                'Analyse des besoins et définition du cahier des charges en collaboration avec le service RH, en s’appuyant sur l’ancienne application.',
            technologies: ['Symfony', 'API REST', 'PostgreSQL'],
            projets: [
                {
                    titre: 'Application de gestion des ordres de mission',
                    description: 'Aperçu de l’application réalisée durant ce stage.',
                    images: [
                        CPAM_Formulaire,
                    ],
                    technologies: ['Symfony', 'PostgreSQL', 'Twig'],
                    realisations: [
                        'Conception d’un formulaire de demande d’ordre de mission',
                        'Mise en place d’un CRUD complet pour la gestion des ordres de mission',
                        'Implémentation de la gestion des rôles',
                        'Génération automatisée de documents au format PDF',
                        'Consommation d’une API REST pour la recherche de communes françaises',
                    ]
                },
            ]
        }  ,
        {
            id: 2,
            poste: 'Stage de 2ème année - BTS SIO (Option SLAM)',
            entreprise: 'La Smatis',
            periode: '5 janvier 2026 - 6 février 2026',
            lieu: 'Angoulême, France',
            description: 'Développement d’une application de gestion des appels entrants (callbacks) et des horaires d’ouverture des services.',
            technologies: ['React', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL'],
            projets: [
                {
                    titre: 'Application Horizon',
                    description: 'Développement d’une application web full-stack pour la gestion des appels à venir (adhérents et prospects) incluant un module de modification des horaires de services. ' +
                        'L’outil permet également l’export de données vers Excel et la visualisation de statistiques.',
                    images: [
                        SMATIS_Horizon,
                        SMATIS_Horizon_Stat,
                    ],
                    technologies: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL'],
                    realisations: [
                        'Interface utilisateur moderne développée avec React et Material-UI',
                        'Formulaire dynamique de modification des horaires intégré dans une sidebar',
                        'Fonctionnalité d’export de données au format Excel',
                        'Développement d’un tableau de bord statistique',
                        'Gestion des permissions des utilisateurs',
                        'Déploiement et intégration de l’application au sein de l’intranet de l’entreprise'
                    ]
                },
                {
                    titre: 'Évolution du module Actualités',
                    description: 'Enrichissement du module existant par l’ajout d’un support multimédia pour les vidéos.',
                    technologies: ['React', 'TypeScript'],
                    realisations: [
                        'Intégration d’un lecteur et gestion de l’affichage de contenus vidéo dans le flux d’actualités',
                    ]
                },
            ]
        },
    ];

    return (
        <Box sx={{ py: 8, minHeight: 'calc(100vh - 64px)', bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" sx={{ mb: 2, textAlign: 'center' }}>
                    Mes Stages
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 6, textAlign: 'center' }}>
                    Expériences professionnelles et projets réalisés en entreprise
                </Typography>

                <Stack spacing={4}>
                    {stages.map((stage) => (
                        <Card key={stage.id} elevation={3}>
                            <CardContent sx={{ p: 4 }}>
                                {/* En-tête du stage */}
                                <Typography variant="h4" gutterBottom fontWeight={600} color="primary">
                                    {stage.poste}
                                </Typography>

                                <Stack spacing={1.5} sx={{ mb: 3 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <Business fontSize="small" color="action" />
                                        <Typography variant="body1" fontWeight={500}>
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

                                <Typography variant="body1" paragraph>
                                    {stage.description}
                                </Typography>

                                <Box sx={{ mb: 3 }}>
                                    <Typography variant="subtitle2" gutterBottom fontWeight={600}>
                                        Technologies utilisées :
                                    </Typography>
                                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                        {stage.technologies.map((tech) => (
                                            <Chip key={tech} label={tech} size="small" color="primary" variant="outlined" />
                                        ))}
                                    </Stack>
                                </Box>

                                <Divider sx={{ my: 3 }} />

                                {/* Projets réalisés */}
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                                    <FolderOpen color="primary" />
                                    <Typography variant="h5" fontWeight={600}>
                                        Projets réalisés ({stage.projets.length})
                                    </Typography>
                                </Box>

                                <Stack spacing={2}>
                                    {stage.projets.map((projet, index) => (
                                        <Accordion key={index} elevation={2}>
                                            <AccordionSummary expandIcon={<ExpandMore />}>
                                                <Typography variant="h6" fontWeight={600}>
                                                    {projet.titre}
                                                </Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Grid container spacing={3}>

                                                    <Typography variant="body1" paragraph>
                                                        {projet.description}
                                                    </Typography>
                                                    {/* Galerie d'images du projet */}
                                                    {projet.images && projet.images.length > 0 && (
                                                        <Grid size={12}>
                                                            <ImageList
                                                                sx={{ width: '100%', maxHeight: 450 }}
                                                                cols={projet.images.length === 1 ? 1 : projet.images.length === 2 ? 2 : 3}
                                                                gap={8}
                                                            >
                                                                {projet.images.map((image, imgIndex) => (
                                                                    <ImageListItem key={imgIndex}>
                                                                        <img
                                                                            src={image}
                                                                            alt={`${projet.titre} - Image ${imgIndex + 1}`}
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

                                                    {/* Description et détails */}
                                                    <Grid size={12}>
                                                        <Box sx={{ mb: 2 }}>
                                                            <Typography variant="subtitle2" gutterBottom fontWeight={600}>
                                                                Technologies :
                                                            </Typography>
                                                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                                                {projet.technologies.map((tech) => (
                                                                    <Chip
                                                                        key={tech}
                                                                        label={tech}
                                                                        size="small"
                                                                        color="primary"
                                                                        variant="outlined"
                                                                    />
                                                                ))}
                                                            </Stack>
                                                        </Box>

                                                        <Box>
                                                            <Typography variant="subtitle2" gutterBottom fontWeight={600}>
                                                                Réalisations :
                                                            </Typography>
                                                            <Stack spacing={0.5}>
                                                                {projet.realisations.map((realisation, idx) => (
                                                                    <Typography key={idx} variant="body2" color="success">
                                                                        ✓ {realisation}
                                                                    </Typography>
                                                                ))}
                                                            </Stack>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </AccordionDetails>
                                        </Accordion>
                                    ))}
                                </Stack>
                            </CardContent>
                        </Card>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
};

export default Stages;