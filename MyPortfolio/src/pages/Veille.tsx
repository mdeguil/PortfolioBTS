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
                    Mes découvertes et apprentissages sur les technologies web
                </Typography>

                <Grid container spacing={4}>
                    {veilleItems.map((item) => (
                        <Grid size={12} sx={{ md: 6, lg: 4}} key={item.id}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                {item.image && (
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={item.image}
                                        alt={item.titre}
                                    />
                                )}
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Chip
                                        label={item.categorie}
                                        size="small"
                                        color="primary"
                                        sx={{ mb: 2 }}
                                    />
                                    <Typography gutterBottom variant="h6" component="h3">
                                        {item.titre}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" paragraph>
                                        {item.description}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        {item.date}
                                    </Typography>
                                </CardContent>
                                {item.lien && (
                                    <CardActions>
                                        <Button
                                            size="small"
                                            startIcon={<OpenInNew />}
                                            href={item.lien}
                                            target="_blank"
                                        >
                                            Lire l'article
                                        </Button>
                                    </CardActions>
                                )}
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Veille;