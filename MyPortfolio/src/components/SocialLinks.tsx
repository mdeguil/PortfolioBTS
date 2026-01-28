import { IconButton, Stack } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { FaGitlab } from 'react-icons/fa';

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
                href="https://gitlab.lev-btssio.fr/mateo.deguil"
                target="_blank"
                rel="noopener noreferrer"
                size={size}
                sx={{ color: color === 'inherit' ? '#FC6D26' : color }}
            >
                <FaGitlab />
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