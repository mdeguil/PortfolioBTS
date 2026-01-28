import { Box, Container, Typography, TextField, Button, Paper } from '@mui/material';
import { Send } from '@mui/icons-material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Schéma de validation avec Yup
const validationSchema = Yup.object({
    name: Yup.string()
        .min(2, 'Le nom doit contenir au moins 2 caractères')
        .required('Le nom est requis'),
    email: Yup.string()
        .email('Email invalide')
        .required('L\'email est requis'),
    message: Yup.string()
        .min(10, 'Le message doit contenir au moins 10 caractères')
        .required('Le message est requis'),
});

const Contact = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values, { setSubmitting, resetForm }) => {
            console.log(values);
            // Simule un envoi
            setTimeout(() => {
                alert(`Message envoyé !\nNom: ${values.name}\nEmail: ${values.email}`);
                setSubmitting(false);
                resetForm(); // Réinitialise le formulaire après envoi
            }, 1000);
        },
    });

    return (
        <Box sx={{ py: 8, minHeight: 'calc(100vh - 64px)', bgcolor: 'background.default' }}>
            <Container maxWidth="md">
                <Typography variant="h2" sx={{ mb: 6, textAlign: 'center' }}>
                    Me contacter
                </Typography>

                <Paper elevation={3} sx={{ p: 4 }}>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            fullWidth
                            id="name"
                            name="name"
                            label="Nom"
                            variant="outlined"
                            margin="normal"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />

                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            label="Email"
                            type="email"
                            variant="outlined"
                            margin="normal"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />

                        <TextField
                            fullWidth
                            id="message"
                            name="message"
                            label="Message"
                            variant="outlined"
                            margin="normal"
                            multiline
                            rows={5}
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.message && Boolean(formik.errors.message)}
                            helperText={formik.touched.message && formik.errors.message}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            fullWidth
                            endIcon={<Send />}
                            disabled={formik.isSubmitting}
                            sx={{ mt: 3 }}
                        >
                            {formik.isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                        </Button>
                    </form>
                </Paper>
            </Container>
        </Box>
    );
};

export default Contact;