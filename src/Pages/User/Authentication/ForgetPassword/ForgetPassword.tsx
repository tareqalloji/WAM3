import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';
import { ForgetPasswordStyle } from './ForgetPasswordStyle';
import CssBaseline from '@mui/material/CssBaseline';
import Card from '@mui/material/Card';
import { Link, Navigate } from 'react-router-dom';

const Color = {
    purple: '#7750DD',
}


export default function ForgetPassword() {
    const classes = ForgetPasswordStyle();
    const [t, i18n] = useTranslation();
    const Lang = localStorage.getItem('lng')
    useEffect(() => {
        document.title = t('RecoverPassword');
    });



    if ((localStorage.getItem('token') !== null || localStorage.getItem('type') === 'user')) {
        return (<Navigate to="/Dashboard" />);

    }
    else
        return (
            <div style={{ backgroundColor: '#F8F8F8', height: '100vh' }}>
                <Container component="main">
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Card sx={{ marginTop: 10, }} style={{ width: '600px' }} >
                            <Grid sx={{ margin: 4 }} >
                                <CssBaseline />
                                <Typography component="h1" variant="h5" className={(Lang === "ar" ? classes.drtl : classes.dltr)}>
                                    {t('RecoverPassword')}
                                </Typography>
                                <form>
                                    <Grid spacing={2} sx={{ marginTop: 4 }} >
                                        <TextField
                                            type="email"
                                            required
                                            fullWidth
                                            id="email"
                                            label={t('Email')}
                                            name="email"
                                            autoComplete="email"
                                        />
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
                                                {t('RecoverPassword')}
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                                <Grid container justifyContent="flex-end">
                                    <Grid item style={{ marginRight: 'auto', marginLeft: 'auto' }}>
                                        <Button component={Link} to="/" style={{ textDecoration: 'underline' }}>
                                            {t('Login')}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Card>
                    </Box>
                </Container>
            </div>
        );
}