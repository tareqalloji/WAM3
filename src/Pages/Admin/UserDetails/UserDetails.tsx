import React, { useEffect } from 'react';
import Layout from '../Layouts/Layout';
import { useTranslation } from 'react-i18next';
import { UserDetailsStyle } from './UserDetailsStyle';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Card from '@mui/material/Card';

export default function UserDetails() {
    const classes = UserDetailsStyle();
    const [t, i18n] = useTranslation();
    const Lang = localStorage.getItem('lng');
    const Color = {
        purple: '#7750DD',
    }
    useEffect(() => {
        document.title = t('UserDetails');
    });
    return (
        <Layout>
            <Container component="main">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4} >
                            <Card>
                                <Grid sx={{ margin: 4 }}>
                                    <CssBaseline />
                                    <Typography component="h1" variant="h5" style={{color: Color.purple}} className={(Lang === "ar" ? classes.drtl : classes.dltr)}>
                                        {t('InvitedUsers')}
                                    </Typography>
                                    <form>
                                        <Grid container spacing={2} sx={{ marginTop: 5 }} className={(Lang === "ar" ? classes.TypeRtl : classes.TypeLtr)}>
                                            <Grid item xs={12} sm={12}>
                                                <Typography component="h5" variant="h5" style={{textAlign:'center'}}>
                                                    Mo Salah
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={12}>
                                                <Typography component="h5" variant="h5" style={{textAlign:'center'}}>
                                                    Mo Salah
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Grid>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Card>
                                <Grid sx={{ margin: 4 }}>
                                    <CssBaseline />
                                    <Typography component="h1" variant="h5" className={(Lang === "ar" ? classes.drtl : classes.dltr)}>
                                        {t('UserDetails')}
                                    </Typography>
                                    <form>
                                        <Grid container spacing={2} sx={{ marginTop: 5 }} className={(Lang === "ar" ? classes.TypeRtl : classes.TypeLtr)}>
                                            <Grid item xs={6} sm={6}>
                                                <Typography component="h5" variant="h5">
                                                    {t('FirstName')}:
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} sm={6}>
                                                <Typography variant="subtitle1">
                                                    طارق
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} sm={6}>
                                                <Typography component="h5" variant="h5">
                                                    {t('LastName')}:
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} sm={6}>
                                                <Typography variant="subtitle1">
                                                    اللوجي
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} sm={6}>
                                                <Typography component="h5" variant="h5">
                                                    {t('PhoneNumber')}:
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} sm={6}>
                                                <Typography variant="subtitle1">
                                                    0945201283
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} sm={6}>
                                                <Typography component="h5" variant="h5">
                                                    {t('Country')}:
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} sm={6}>
                                                <Typography variant="subtitle1">
                                                    سوريا
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} sm={6}>
                                                <Typography component="h5" variant="h5">
                                                    {t('Email')}:
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} sm={6}>
                                                <Typography variant="subtitle1">
                                                    tarq.alloji@gmail.com
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} sm={6}>
                                                <Typography component="h5" variant="h5">
                                                    {t('WalletLink')}:
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} sm={6}>
                                                <Typography variant="subtitle1">
                                                    http://localhost:3000/Admin/UserDetails
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} sm={6}>
                                                <Typography component="h5" variant="h5">
                                                    {t('TotalAmount')}:
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} sm={6}>
                                                <Typography variant="subtitle1">
                                                    4500$
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} sm={6}>
                                                <Typography component="h5" variant="h5">
                                                    {t('UserInvitationsNumber')}:
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} sm={6}>
                                                <Typography variant="subtitle1">
                                                    22
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Layout>
    );
}