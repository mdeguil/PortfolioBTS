import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Profil from './pages/Profil';
import Activite from './pages/Activite';
import Competences from './pages/Competences';
import Stages from './pages/Stages';
import Projets from './pages/Projets';
import Veille from './pages/Veille';

function App() {
    return (
        <Router>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    bgcolor: 'background.default'
                }}
            >
                <Header />

                <Box component="main" sx={{ flexGrow: 1 }}>
                    <Routes>
                        <Route path="/" element={<Profil />} />
                        <Route path="/activite" element={<Activite />} />
                        <Route path="/competences" element={<Competences />} />
                        <Route path="/stages" element={<Stages />} />
                        <Route path="/projets" element={<Projets />} />
                        <Route path="/veille" element={<Veille />} />
                    </Routes>
                </Box>

                <Footer />
            </Box>
        </Router>
    );
}

export default App;