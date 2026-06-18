import { IconButton, Stack } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';

interface SocialLinksProps {
    size?: 'small' | 'medium' | 'large';
    color?: string;
}

const SocialLinks = ({ size = 'medium', color = 'inherit' }: SocialLinksProps) => {
    return (
        <Stack direction="row" spacing={1}>
            <IconButton
                component="a"
                href="https://github.com/mdeguil"
                target="_blank"
                rel="noopener noreferrer"
                size={size}
                sx={{ color }}
            >
                <GitHub />
            </IconButton>


            <IconButton
                component="a"
                href="https://linkedin.com/in/matéo-deguil-82716432b/"
                target="_blank"
                rel="noopener noreferrer"
                size={size}
                sx={{ color }}
            >
                <LinkedIn />
            </IconButton>
        </Stack>
    );
};

export default SocialLinks;