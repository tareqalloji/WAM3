import React, { useEffect, useState } from 'react';
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
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { APIInstance } from '../../../Services/Api';

function UserProfile() {
    const [openBackDropLoading, setOpenBackDropLoading] = useState<boolean>(false);
    const classes = UserProfileStyle();
    const [t, i18n] = useTranslation();
    const Lang = localStorage.getItem('lng');
    let values = {
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        country: '',
        invite_link: '',
    };
    const [formValues, setFormValues] = useState(values);
    useEffect(() => {
        document.title = t('UserProfile');
        getUserProfile();
    }, []);
    const getUserProfile = () => {
        setOpenBackDropLoading(true)
        APIInstance.getUserProfile()
            .then((response) => {
                values = {
                    first_name: response.data.data.first_name,
                    last_name: response.data.data.last_name,
                    phone: response.data.data.phone,
                    email: response.data.data.email,
                    country: response.data.data.country,
                    invite_link: response.data.data.invite_link,
                }
                setOpenBackDropLoading(false)
            }).then(() => {
                setFormValues(values)
            });
    }
    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={openBackDropLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
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
                                                {formValues.first_name}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6} sm={6}>
                                            <Typography component="h5" variant="h5">
                                                {t('LastName')}:
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6} sm={6}>
                                            <Typography variant="subtitle1">
                                                {formValues.last_name}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6} sm={6}>
                                            <Typography component="h5" variant="h5">
                                                {t('PhoneNumber')}:
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6} sm={6}>
                                            <Typography variant="subtitle1">
                                                {formValues.phone}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6} sm={6}>
                                            <Typography component="h5" variant="h5">
                                                {t('Country')}:
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6} sm={6}>
                                            <Typography variant="subtitle1">
                                                {formValues.country}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6} sm={6}>
                                            <Typography component="h5" variant="h5">
                                                {t('InviteLink')}:
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6} sm={6}>
                                            <Typography variant="subtitle1">
                                                {formValues.invite_link}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6} sm={6}>
                                            <Typography component="h5" variant="h5">
                                                {t('Email')}:
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6} sm={6}>
                                            <Typography variant="subtitle1">
                                                {formValues.email}
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
                                        style={{
                                            background: 'linear-gradient(0deg, rgba(93,89,125,1) 27%, rgba(186,177,249,1) 100%)'
                                        }}
                                        fullWidth
                                        type="submit"
                                        variant="contained"
                                        component={Link}
                                        to="/EditProfile"
                                    >
                                        {t('EditProfile')}
                                        &nbsp;
                                        < EditIcon />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Card>
                    </Box>
                </Container>
            </Layout>
        </>
    );
}

export default UserProfile;