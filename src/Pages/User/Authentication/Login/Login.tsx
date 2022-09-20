import React, { useEffect, useState } from 'react';
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
import { Link, useNavigate } from 'react-router-dom';
import { APIInstance } from '../../../../Services/Api';
const Color = {
    purple: '#7750DD',
}

export default function Login() {
    const classes = LoginStyle();
    const [t, i18n] = useTranslation();
    const Lang = localStorage.getItem('lng')
    useEffect(() => {
        document.title = t('Login');
    });

    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        APIInstance.Login(values.email, values.password)
            .then((res: any) => {
                if (res.data.token !== null && res.data.token !== undefined) {
                    localStorage.setItem("token", res.data.token)
                    localStorage.setItem("type", 'user')
                    navigate("/Dashboard");
                }

            }).catch((err: any) => console.error(err));
    };


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
                            <Typography component="h1" variant="h5" className={(Lang === "ar" ? classes.drtl : classes.dltr)}>
                                {t('LoginToYourAccount')}
                            </Typography>
                            <Grid container justifyContent="flex-end" sx={{ mt: 3 }}>
                                <Grid item style={{ marginRight: 'auto', marginLeft: 'auto' }}>
                                    <Button component={Link} to="/Register" style={{ textDecoration: 'underline' }}>
                                        {t('CreateNewAccount')}
                                    </Button>
                                </Grid>
                            </Grid>
                            <form onSubmit={handleSubmit}>
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
                                                onChange={(e) => setValues({ ...values, email: e.target.value })}
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
                                                onChange={(e) => setValues({ ...values, password: e.target.value })}
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
                                            variant="contained"
                                            type="submit"
                                            onClick={handleSubmit}
                                        >
                                            {t('Login')}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                            <Grid container justifyContent="flex-end">
                                <Grid item style={{ marginRight: 'auto', marginLeft: 'auto' }}>
                                    <Button component={Link} to="/ForgetPassword" style={{ textDecoration: 'underline' }}>
                                        {t('ForgetYourPassword')}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
                </Box>
            </Container>
        </div >
    );
}