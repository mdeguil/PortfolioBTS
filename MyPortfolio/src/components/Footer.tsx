import { Box, Container, Typography, Stack } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { FaGitlab } from 'react-icons/fa';
import { IconButton } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: 'background.paper',
                borderTop: '1px solid',
                borderColor: 'divider'
            }}
        >
            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                >
                    <Typography variant="body2" color="text.secondary">
                        © {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.
                    </Typography>

                    <Stack direction="row" spacing={1}>
                        <IconButton
                            component="a"
                            href="https://github.com/TON_USERNAME"
                            target="_blank"
                            rel="noopener noreferrer"
                            size="small"
                        >
                            <GitHub />
                        </IconButton>

                        <IconButton
                            component="a"
                            href="https://gitlab.com/TON_USERNAME"
                            target="_blank"
                            rel="noopener noreferrer"
                            size="small"
                            sx={{ color: '#FC6D26' }}
                        >
                            <FaGitlab />
                        </IconButton>

                        <IconButton
                            component="a"
                            href="https://linkedin.com/in/TON_USERNAME"
                            target="_blank"
                            rel="noopener noreferrer"
                            size="small"
                        >
                            <LinkedIn />
                        </IconButton>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;