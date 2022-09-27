import React, { useEffect, useState } from 'react';
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
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { WarningSnackbar } from '../../../component/Snackbar/snackbar';
import { APIInstance } from '../../../Services/Api';


export default function EditProfile() {
    const [message, setMessage] = useState<string>('')
    const [severity, setSeverity] = useState<string>('')
    const [openWarningSnakbar, setOpenWarningSnakbar] = React.useState<boolean>(false);
    const [openBackDropLoading, setOpenBackDropLoading] = React.useState<boolean>(false);
    const classes = EditProfileStyle();
    const [t, i18n] = useTranslation();
    const Lang = localStorage.getItem('lng');
    const Color = {
        purple: '#7750DD',
    }
    useEffect(() => {
        document.title = t('EditProfile');
        return () => {
            getUserProfile();
        }
    }, []);
    const [Countries, setCurrency] = useState('');
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
        setValues({ ...values, country: event.target.value })
    };

    let data = {
        first_name: '',
        last_name: '',
        phone: '',
        country: '',
        invite_link: '',
    };
    const [formData, setFormData] = useState(data);


    const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        phone: "",
        country: "",
        invite_link: "",

    });

    const getUserProfile = () => {
        setOpenBackDropLoading(true)
        APIInstance.getUserProfile()
            .then((response) => {
                data = {
                    first_name: response.data.data.first_name,
                    last_name: response.data.data.last_name,
                    phone: response.data.data.phone,
                    country: response.data.data.country,
                    invite_link: response.data.data.invite_link,
                }
                setOpenBackDropLoading(false)
            }).then(() => {
                setFormData(data)
            });
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        setOpenBackDropLoading(true)
        APIInstance.UpdateProfile(values.first_name, values.last_name, values.phone,
            values.country, values.invite_link)
            .then((res: any) => {
                console.log(res)
                setOpenBackDropLoading(false)
                openWarningSnakbarHandler();
                if (Lang === "ar") {
                    setMessage('تم التعديل بنجاح');
                }
                else {
                    setMessage('Edit Done Successfully');
                }
                setSeverity('success')

            }).catch((error) => {
                setOpenBackDropLoading(false);
                openWarningSnakbarHandler();
                if (Lang === "ar") {
                    setMessage('يوجد خطأ في إدخال البيانات');
                }
                else {
                    setMessage('Incorrect Data');
                }
                setSeverity('error')
                console.error(error);
            });
    };
    function openWarningSnakbarHandler() {
        setOpenWarningSnakbar(true)
    }

    function closeWarningSnakbar() {
        setOpenWarningSnakbar(false)
    }
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
                            <form onSubmit={handleSubmit}>
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
                                                name="first_name"
                                                variant="outlined"
                                                value={values.first_name !== '' ? values.first_name : formData.first_name}
                                                onChange={(e) => setValues({ ...values, first_name: e.target.value })}
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
                                                name="last_name"
                                                variant="outlined"
                                                value={values.last_name !== '' ? values.last_name : formData.last_name}
                                                onChange={(e) => setValues({ ...values, last_name: e.target.value })}
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
                                                name="phone"
                                                variant="outlined"
                                                id="phone"
                                                value={values.phone !== '' ? values.phone : formData.phone}
                                                onChange={(e) => setValues({ ...values, phone: e.target.value })}
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
                                                fullWidth
                                                autoFocus
                                                select                                                
                                                value={values.country !== '' ? values.country : formData.country}                                            
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
        </>
    );
}