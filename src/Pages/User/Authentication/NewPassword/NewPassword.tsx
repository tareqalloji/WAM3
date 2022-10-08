import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';
import { NewPasswordStyle } from './NewPasswordStyle';
import CssBaseline from '@mui/material/CssBaseline';
import Card from '@mui/material/Card';
import { useNavigate, useParams } from 'react-router-dom';
import { APIInstance } from '../../../../Services/Api';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';

interface State {
    password: string;
    showPassword: boolean;
}
export default function NewPassword() {
    const [openWarningSnakbar, setOpenWarningSnakbar] = React.useState<boolean>(false);
    const [openBackDropLoading, setOpenBackDropLoading] = React.useState<boolean>(false);
    const classes = NewPasswordStyle();
    const [t, i18n] = useTranslation();
    const Lang = localStorage.getItem('lng')
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        document.title = t('EnterNewPassword');
    });

    const [values, setValues] = React.useState<State>({
        password: '',
        showPassword: false,
    });

    const handleChange =
        (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setValues({ ...values, [prop]: event.target.value });
            setData({ ...data, password: event.target.value })
        };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const [data, setData] = useState({
        password: "",
    });

    function openWarningSnakbarHandler() {
        setOpenWarningSnakbar(true)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setOpenBackDropLoading(true);
        return axios.post(`https://wam3.tech/wam3/public/api/update-password/${id}`, {
            password: values.password,
        }).then(() => {
            setOpenBackDropLoading(false);
            openWarningSnakbarHandler();
            navigate('/Login')

        }).catch((e) => { console.log(e.message) });

    };

    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={openBackDropLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
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
                                    {t('EnterNewPassword')}
                                </Typography>
                                <form onSubmit={handleSubmit}>
                                    <Grid spacing={2} sx={{ marginTop: 4 }} >
                                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-password"
                                                type={values.showPassword ? 'text' : 'password'}
                                                value={values.password}
                                                onChange={handleChange('password')}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                        >
                                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                label={t('Password')}
                                            />
                                        </FormControl>
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
                                                {t('Save')}
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid>
                        </Card>
                    </Box>
                </Container>
            </div>
        </>
    );
}
