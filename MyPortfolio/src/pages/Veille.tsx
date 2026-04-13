import { Box, Container, Typography } from '@mui/material';

const Veille = () => {

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