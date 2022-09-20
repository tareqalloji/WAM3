import React, { useEffect } from 'react';
import Layout from '../Layouts/Layout';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
import { UserProfileStyle } from './UserProfileStyle';
import EditIcon from '@mui/icons-material/Edit';

function UserProfile() {
    const classes = UserProfileStyle();
    const [t, i18n] = useTranslation();
    const Lang = localStorage.getItem('lng');
    const Color = {
        purple: '#7750DD',
    }
    useEffect(() => {
        document.title = t('UserProfile');
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
                    <Card>
                        <Grid sx={{ margin: 4 }}>
                            <CssBaseline />
                            <Typography component="h1" variant="h5" className={(Lang === "ar" ? classes.drtl : classes.dltr)}>
                                {t('UserProfile')}
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
                                </Grid>
                            </form>
                        </Grid>
                        <Grid
                            container
                            sx={{ marginTop: 5 }}
                            display="flex"
                            justifyContent="center"
                            alignItems="center">
                            <Grid item xs={12} sm={4} >
                                <Button
                                    className={(Lang === "ar" ? classes.drtl : classes.dltr)}
                                    sx={{ marginBottom: 5 }}
                                    style={{ backgroundColor: Color.purple }}
                                    fullWidth
                                    type="submit"
                                    variant="contained"
                                    component={Link}
                                    to="/EditProfile"
                                >
                                    {t('EditProfile')}
                                    &nbsp;
                                    <EditIcon />
                                </Button>
                            </Grid>
                        </Grid>
                    </Card>
                </Box>
            </Container>
        </Layout>
    );
}

export default UserProfile;