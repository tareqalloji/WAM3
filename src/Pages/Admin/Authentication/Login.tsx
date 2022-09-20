import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';
import { LoginStyle } from './LoginStyle';
import CssBaseline from '@mui/material/CssBaseline';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
import Api from "../../../Services/Api";
import { useFormik } from 'formik';
import * as yup from 'yup';

const Color = {
    purple: '#7750DD',
}
interface Token {

    type?: any,
    company_id?: any,
    sub?: any

}

const validationSchema = yup.object({

    email: yup
        .string()
        .required('User Name is required'),

    password: yup
        .string()
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),

});

export default function Login() {
    const classes = LoginStyle();
    const [t, i18n] = useTranslation();
    const Lang = localStorage.getItem('lng')
    useEffect(() => {
        document.title = t('Login');
    });

    // let token: Token = {}

    // const history = useHistory()



    // const formik = useFormik({
    //     initialValues: {
    //         email: '',
    //         password: '',
    //     },
    // });

    return (
        <div style={{ backgroundColor: '#F8F8F8', height: '100vh' }} >
            <Container component="main">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Card sx={{ marginTop: 10, }}>
                        <Grid sx={{ margin: 4 }}>
                            <CssBaseline />
                            <Typography  sx={{ marginBottom: 4 }} component="h1" variant="h5" className={(Lang === "ar" ? classes.drtl : classes.dltr)}>
                                {t('LoginAsAdministrator')}
                            </Typography>                            
                            {/* <form onSubmit={formik.handleSubmit}> */}
                            <form >
                                <Grid container spacing={2} sx={{ marginTop: 1 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="email"
                                                label={t('Email')}
                                                name="email"
                                                autoComplete="email"
                                                type="email"
                                            // error={formik.touched.email && Boolean(formik.errors.email)}
                                            // helperText={formik.touched.email && formik.errors.email}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                name="password"
                                                label={t('Password')}
                                                type="password"
                                                id="password"
                                                autoComplete="new-password"
                                            // error={formik.touched.password && Boolean(formik.errors.password)}
                                            // helperText={formik.touched.password && formik.errors.password}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    sx={{ marginTop: 5 }}
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center">
                                    <Grid item xs={12} sm={4} >
                                        <Button
                                            style={{ backgroundColor: Color.purple }}
                                            fullWidth
                                            type="submit"
                                            variant="contained"
                                        >
                                            {t('Login')}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>                            
                        </Grid>
                    </Card>
                </Box>
            </Container>
        </div >
    );
}