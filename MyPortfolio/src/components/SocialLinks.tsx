import { IconButton, Stack } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { FaGitlab } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface SocialLinksProps {
    size?: 'small' | 'medium' | 'large';
    color?: string;
}

const SocialLinks = ({ size = 'medium', color = 'inherit' }: SocialLinksProps) => {
    return (
        <Stack direction="row" spacing={1}>
            <IconButton
                component="a"
                href="https://github.com/TON_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                size={size}
                sx={{ color }}
            >
                <GitHub />
            </IconButton>

            <IconButton
                component="a"
                href="https://gitlab.com/TON_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                size={size}
                sx={{ color: color === 'inherit' ? '#FC6D26' : color }}
            >
                <FaGitlab />
            </IconButton>

            <IconButton
                component="a"
                href="https://linkedin.com/in/TON_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                size={size}
                sx={{ color }}
            >
                <LinkedIn />
            </IconButton>

            <IconButton
                component={Link}
                to="/contact"
                size={size}
                sx={{ color }}
            >
                <Email />
            </IconButton>
        </Stack>
    );
};

export default SocialLinks;