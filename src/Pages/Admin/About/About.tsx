import React, { useEffect } from 'react';
import Layout from '../Layouts/Layout';
import { useTranslation } from 'react-i18next';
import { AboutStyle } from './AboutStyle';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function About() {

    const classes = AboutStyle();
    const [t, i18n] = useTranslation();
    const Lang = localStorage.getItem('lng');
    useEffect(() => {
        document.title = t('AboutWebsite');
    });

    const Color = {
        purple: '#7750DD'
    }
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
                        <form>
                            <Grid sx={{ margin: 4 }}>
                                <CssBaseline />
                                <Typography component="h1" variant="h5" className={(Lang === "ar" ? classes.drtl : classes.dltr)}>
                                    {t('AboutWebsite')}
                                </Typography>
                                <Grid container spacing={1} sx={{ marginTop: 5 }} className={(Lang === "ar" ? classes.TypeRtl : classes.TypeLtr)}>
                                    <Grid item xs={6} sm={6}>
                                        <Typography component="h5" variant="h5">
                                            {t('UsersNumberForBonus')}:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <TextField
                                            type='number'
                                            name="UsersNumberForBonus"
                                            variant="outlined"
                                            // defaultValue={t('Email')}
                                            fullWidth
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <Typography component="h5" variant="h5">
                                            {t('BonusValue')}:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <TextField
                                            type='number'
                                            name="BonusValue"
                                            variant="outlined"
                                            // defaultValue={t('Email')}
                                            InputProps={{ inputProps: { min: 0, max: 100 } }}
                                            fullWidth
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <Typography component="h5" variant="h5">
                                            {t('Email')}:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <TextField
                                            type='email'
                                            name="Email"
                                            variant="outlined"
                                            // defaultValue={t('Email')}
                                            fullWidth
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <Typography component="h5" variant="h5">
                                            {t('PhoneNumber')}:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <TextField
                                            type='number'
                                            name="PhoneNumber"
                                            variant="outlined"
                                            defaultValue={t('PhoneNumber')}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <Typography component="h5" variant="h5">
                                            {t('About')}:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <TextField
                                            fullWidth
                                            id="outlined-multiline-flexible"
                                            multiline
                                            maxRows={20}
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
                                        className={(Lang === "ar" ? classes.drtl : classes.dltr)}
                                        sx={{ marginBottom: 1.5 }}
                                        style={{ backgroundColor: Color.purple }}
                                        fullWidth
                                        type="submit"
                                        variant="contained"
                                    >
                                        {t('SaveChanges')}
                                        &nbsp;
                                        <CheckCircleIcon />
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Card>
                </Box>
            </Container>
        </Layout>
    );
}
