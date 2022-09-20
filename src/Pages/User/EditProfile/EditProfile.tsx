import React, { useEffect } from 'react';
import Layout from '../Layouts/Layout';
import { useTranslation } from 'react-i18next';
import { EditProfileStyle } from './EditProfileStyle';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function EditProfile() {
    const classes = EditProfileStyle();
    const [t, i18n] = useTranslation();
    const Lang = localStorage.getItem('lng');
    const Color = {
        purple: '#7750DD',
    }
    useEffect(() => {
        document.title = t('EditProfile');
    });
    const [Countries, setCurrency] = React.useState('Iraq');
    const CountriesEn = [
        {
            value: 'Iraq',
            label: 'Iraq',
        },
        {
            value: 'Syria',
            label: 'Syria',
        },
        {
            value: 'Saudia Arabia',
            label: 'SaudiaArabia',
        },
        {
            value: 'Egypt',
            label: 'Egypt',
        },
        {
            value: 'Lebanon',
            label: 'Lebanon',
        },
    ];
    const CountriesAr = [
        {
            value: 'Iraq',
            label: 'العراق',
        },
        {
            value: 'Syria',
            label: 'سوريا',
        },
        {
            value: 'Saudia Arabia',
            label: 'السعودية',
        },
        {
            value: 'Egypt',
            label: 'مصر',
        },
        {
            value: 'Lebanon',
            label: 'لبنان',
        },
    ];

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(event.target.value);
    };
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
                                    {t('EditProfile')}
                                </Typography>
                                <Grid container spacing={1} sx={{ marginTop: 5 }} className={(Lang === "ar" ? classes.TypeRtl : classes.TypeLtr)}>
                                    <Grid item xs={6} sm={6}>
                                        <Typography component="h5" variant="h5">
                                            {t('FirstName')}:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <TextField
                                            type='text'
                                            name="FirstName"
                                            variant="outlined"
                                            defaultValue={t('FirstName')}
                                            fullWidth
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <Typography component="h5" variant="h5">
                                            {t('LastName')}:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <TextField
                                            type='text'
                                            name="LastName"
                                            variant="outlined"
                                            defaultValue={t('LastName')}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <Typography component="h5" variant="h5">
                                            {t('PhoneNumber')}:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <TextField
                                            type="number"
                                            name="PhoneNumber"
                                            variant="outlined"
                                            id="PhoneNumber"
                                            defaultValue={t('PhoneNumber')}
                                            fullWidth
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <Typography component="h5" variant="h5">
                                            {t('Country')}:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <TextField
                                            name="Country"
                                            variant="outlined"
                                            id="Country"
                                            defaultValue={t('Country')}
                                            fullWidth
                                            autoFocus
                                            select
                                            value={Countries}
                                            onChange={handleChange}
                                        >
                                            {(Lang === "ar" ?
                                                CountriesAr.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))
                                                :
                                                CountriesEn.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))
                                            )}</TextField>
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <Typography component="h5" variant="h5">
                                            {t('Email')}:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <TextField
                                            type="email"
                                            name="Email"
                                            variant="outlined"
                                            id="Email"
                                            defaultValue={t('Email')}
                                            fullWidth
                                            autoFocus
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
        </Layout >
    );
}