import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, Chip } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';

interface VeilleItem {
    id: number;
    titre: string;
    description: string;
    categorie: string;
    date: string;
    lien?: string;
    image?: string;
}

const Veille = () => {
    const veilleItems: VeilleItem[] = [
        {
            id: 1,
            titre: 'Les nouveautés React 19',
            description: 'Découverte des nouvelles fonctionnalités de React 19...',
            categorie: 'React',
            date: '15 Janvier 2025',
            lien: 'https://react.dev',
        },
        {
            id: 2,
            titre: 'TypeScript 5.5 - Quoi de neuf ?',
            description: 'Analyse des améliorations de TypeScript 5.5...',
            categorie: 'TypeScript',
            date: '10 Janvier 2025',
        },
        // Ajoute tes articles de veille
    ];

    return (
        <Box sx={{ py: 8, minHeight: 'calc(100vh - 64px)', bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" sx={{ mb: 2, textAlign: 'center' }}>
                    Veille Technologique
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 6, textAlign: 'center' }}>
                    En construction
                </Typography>


            </Container>
        </Box>
    );
};

export default Veille;