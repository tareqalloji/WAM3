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
import { Link, useNavigate, Navigate } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { WarningSnackbar } from '../../../../component/Snackbar/snackbar';
import { APIInstance } from '../../../../Services/Api';


export default function Login() {

    const [message, setMessage] = useState<string>('')
    const [severity, setSeverity] = useState<string>('')
    const [openWarningSnakbar, setOpenWarningSnakbar] = React.useState<boolean>(false);
    const [openBackDropLoading, setOpenBackDropLoading] = React.useState<boolean>(false);
    const classes = LoginStyle();
    const [t, i18n] = useTranslation();
    const Lang = localStorage.getItem('lng')
    const navigate = useNavigate();
    const Color = {
        purple: '#7750DD',
    }
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    useEffect(() => {
        document.title = t('Login');
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
        APIInstance.Login(values.email, values.password)
            .then((res) => {
                if (res.data.token !== null && res.data.token !== undefined) {
                    localStorage.setItem("token", res.data.token)
                    localStorage.setItem("type", 'user')
                    setOpenBackDropLoading(false)
                    navigate("/Dashboard");
                }
            }).catch((err) => {
                console.error(err);
                setOpenBackDropLoading(false);
                openWarningSnakbarHandler();
                if (Lang === "ar") {
                    setMessage('يوجد خطأ في البريد الالكتروني او كلمة المرور');
                }
                else {
                    setMessage('Incorrect Email or Password');
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
            </>
        );
}