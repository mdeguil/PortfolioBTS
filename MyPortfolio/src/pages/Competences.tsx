import { Box, Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, LinearProgress } from '@mui/material';
import { CheckCircle, RadioButtonUnchecked, HourglassEmpty } from '@mui/icons-material';

interface Competence {
    code: string;
    intitule: string;
    description: string;
    niveau: 'acquis' | 'en-cours' | 'non-acquis';
    pourcentage: number;
    activites: string[];
}

const Competences = () => {
    const competencesBTS: Competence[] = [
        {
            code: 'B1.1',
            intitule: 'Gérer le patrimoine informatique',
            description: 'Recenser et identifier les ressources numériques',
            niveau: 'acquis',
            pourcentage: 100,
            activites: ['Projet de gestion de parc informatique', 'Stage - Inventaire des équipements']
        },
        {
            code: 'B1.2',
            intitule: 'Répondre aux incidents et aux demandes d\'assistance',
            description: 'Collecter, suivre et orienter des demandes',
            niveau: 'en-cours',
            pourcentage: 70,
            activites: ['Système de ticketing', 'Support technique en stage']
        },
        {
            code: 'B1.3',
            intitule: 'Développer la présence en ligne',
            description: 'Référencer les services en ligne et participer à leur évolution',
            niveau: 'acquis',
            pourcentage: 90,
            activites: ['Création de portfolio', 'Site web pour association']
        },
        {
            code: 'B1.4',
            intitule: 'Travailler en mode projet',
            description: 'Analyser les objectifs et les modalités d\'organisation d\'un projet',
            niveau: 'en-cours',
            pourcentage: 65,
            activites: ['Projet de groupe - Application web', 'Gestion de projet Agile']
        },
        {
            code: 'B1.5',
            intitule: 'Mettre à disposition des utilisateurs un service informatique',
            description: 'Réaliser les tests d\'intégration et d\'acceptation',
            niveau: 'acquis',
            pourcentage: 85,
            activites: ['Tests unitaires React', 'Déploiement application']
        },
        {
            code: 'B1.6',
            intitule: 'Organiser son développement professionnel',
            description: 'Mettre en place son environnement d\'apprentissage personnel',
            niveau: 'acquis',
            pourcentage: 95,
            activites: ['Veille technologique', 'Formation continue TypeScript']
        },
        // Bloc 2 - Conception et développement d'applications
        {
            code: 'B2.1',
            intitule: 'Concevoir et développer une solution applicative',
            description: 'Analyser et modéliser une application',
            niveau: 'en-cours',
            pourcentage: 75,
            activites: ['Application de gestion', 'API REST avec Spring Boot']
        },
        {
            code: 'B2.2',
            intitule: 'Assurer la maintenance corrective ou évolutive',
            description: 'Analyser et corriger un dysfonctionnement',
            niveau: 'en-cours',
            pourcentage: 60,
            activites: ['Correction de bugs', 'Refactoring de code legacy']
        },
        {
            code: 'B2.3',
            intitule: 'Gérer les données',
            description: 'Concevoir et réaliser une base de données',
            niveau: 'acquis',
            pourcentage: 80,
            activites: ['Base de données PostgreSQL', 'Modélisation MCD/MLD']
        },
    ];

    const getNiveauIcon = (niveau: string) => {
        switch (niveau) {
            case 'acquis':
                return <CheckCircle color="success" />;
            case 'en-cours':
                return <HourglassEmpty color="warning" />;
            case 'non-acquis':
                return <RadioButtonUnchecked color="error" />;
            default:
                return <RadioButtonUnchecked />;
        }
    };

    const getNiveauChip = (niveau: string) => {
        switch (niveau) {
            case 'acquis':
                return <Chip label="Acquis" color="success" size="small" />;
            case 'en-cours':
                return <Chip label="En cours" color="warning" size="small" />;
            case 'non-acquis':
                return <Chip label="Non acquis" color="error" size="small" />;
            default:
                return <Chip label="Inconnu" size="small" />;
        }
    };

    // Calcul des statistiques
    const totalCompetences = competencesBTS.length;
    const competencesAcquises = competencesBTS.filter(c => c.niveau === 'acquis').length;
    const competencesEnCours = competencesBTS.filter(c => c.niveau === 'en-cours').length;
    const progressionGlobale = Math.round(
        competencesBTS.reduce((acc, c) => acc + c.pourcentage, 0) / totalCompetences
    );

    return (
        <Box sx={{ py: 8, minHeight: 'calc(100vh - 64px)', bgcolor: 'background.default' }}>
            <Container maxWidth="xl">
                <Typography variant="h2" sx={{ mb: 2, textAlign: 'center' }}>
                    Tableau des Compétences BTS SIO SLAM
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 6, textAlign: 'center' }}>
                    Suivi de l'acquisition des compétences du référentiel BTS SIO
                </Typography>

                {/* Statistiques globales */}
                <Paper sx={{ p: 4, mb: 4 }}>
                    <Typography variant="h5" gutterBottom fontWeight={600}>
                        Progression globale
                    </Typography>
                    <Box sx={{ mb: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant="body1">Taux de validation</Typography>
                            <Typography variant="body1" fontWeight={600}>
                                {progressionGlobale}%
                            </Typography>
                        </Box>
                        <LinearProgress
                            variant="determinate"
                            value={progressionGlobale}
                            sx={{ height: 12, borderRadius: 6 }}
                        />
                    </Box>

                    <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                        <Box>
                            <Typography variant="h4" color="success.main" fontWeight={700}>
                                {competencesAcquises}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Compétences acquises
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h4" color="warning.main" fontWeight={700}>
                                {competencesEnCours}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                En cours d'acquisition
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h4" color="primary.main" fontWeight={700}>
                                {totalCompetences}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Total de compétences
                            </Typography>
                        </Box>
                    </Box>
                </Paper>

                {/* Tableau des compétences */}
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ bgcolor: 'primary.main' }}>
                                <TableCell sx={{ color: 'white', fontWeight: 700 }}>Code</TableCell>
                                <TableCell sx={{ color: 'white', fontWeight: 700 }}>Intitulé</TableCell>
                                <TableCell sx={{ color: 'white', fontWeight: 700 }}>Description</TableCell>
                                <TableCell sx={{ color: 'white', fontWeight: 700 }} align="center">Statut</TableCell>
                                <TableCell sx={{ color: 'white', fontWeight: 700 }} align="center">Progression</TableCell>
                                <TableCell sx={{ color: 'white', fontWeight: 700 }}>Activités validantes</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {competencesBTS.map((competence) => (
                                <TableRow
                                    key={competence.code}
                                    sx={{
                                        '&:hover': { bgcolor: 'action.hover' },
                                        transition: 'background-color 0.3s'
                                    }}
                                >
                                    <TableCell>
                                        <Chip label={competence.code} color="primary" variant="outlined" size="small" />
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="body2" fontWeight={600}>
                                            {competence.intitule}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="body2" color="text.secondary">
                                            {competence.description}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="center">
                                        {getNiveauChip(competence.niveau)}
                                    </TableCell>
                                    <TableCell align="center">
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            {getNiveauIcon(competence.niveau)}
                                            <Typography variant="body2" fontWeight={600}>
                                                {competence.pourcentage}%
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                                            {competence.activites.map((activite, idx) => (
                                                <Typography key={idx} variant="caption" color="text.secondary">
                                                    • {activite}
                                                </Typography>
                                            ))}
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </Box>
    );
};

export default Competences;