import React, { useEffect, useState } from 'react';
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
import { Link, useNavigate, Navigate } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { WarningSnackbar } from '../../../../component/Snackbar/snackbar';
import { APIInstance } from '../../../../Services/Api'


export default function ForgetPassword() {

    const [message, setMessage] = useState<string>('')
    const [severity, setSeverity] = useState<string>('')
    const [openWarningSnakbar, setOpenWarningSnakbar] = React.useState<boolean>(false);
    const [openBackDropLoading, setOpenBackDropLoading] = React.useState<boolean>(false);
    const classes = ForgetPasswordStyle();
    const [t, i18n] = useTranslation();
    const Lang = localStorage.getItem('lng')
    const navigate = useNavigate();
    useEffect(() => {
        document.title = t('RecoverPassword');
    });

    const [values, setValues] = useState({
        email: "",
    });

    function openWarningSnakbarHandler() {
        setOpenWarningSnakbar(true)
    }

    function closeWarningSnakbar() {
        setOpenWarningSnakbar(false)
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        setOpenBackDropLoading(true);
        APIInstance.ForgetPassword(values.email)
            .then(() => {

                setOpenBackDropLoading(false);
                openWarningSnakbarHandler();
                if (Lang === "ar") {
                    setMessage('اذهب الى البريد الالكتروني لاكمال العملية');
                }
                else {
                    setMessage('Go to Email to Continue');
                }
                setSeverity('success')
            }).catch(() => {
                setOpenBackDropLoading(false);
                openWarningSnakbarHandler();
                if (Lang === "ar") {
                    setMessage('هذا البريد الالكتروني غير مسجل في الموقع');
                }
                else {
                    setMessage('Email Not Found');
                }
                setSeverity('error')
            });
    };



    if ((localStorage.getItem('token') !== null || localStorage.getItem('type') === 'user')) {
        return (<Navigate to="/Dashboard" />);

    }
    else
        return (
            <>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={openBackDropLoading}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
                <WarningSnackbar
                    openWarningSnakbar={openWarningSnakbar}
                    closeWarningSnakbar={closeWarningSnakbar}
                    severity={severity}
                    message={message}
                />
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
                                        {t('EnterEmail')}
                                    </Typography>
                                    <form onSubmit={handleSubmit}>
                                        <Grid spacing={2} sx={{ marginTop: 4 }} >
                                            <TextField
                                                type="email"
                                                required
                                                fullWidth
                                                id="email"
                                                label={t('Email')}
                                                name="email"
                                                autoComplete="email"
                                                onChange={(e) => setValues({ ...values, email: e.target.value })}
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
                                                    className={classes.btn}
                                                    fullWidth
                                                    type="submit"
                                                    variant="contained"
                                                >
                                                    {t('Next')}
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
            </>
        );
}