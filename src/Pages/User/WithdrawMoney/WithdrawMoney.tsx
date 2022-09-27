import React, { useEffect, useState } from 'react';
import Layout from '../Layouts/Layout';
import { useTranslation } from 'react-i18next';
import { WithdrawMoneyStyle } from './WithdrawMoneyStyle';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { WarningSnackbar } from '../../../component/Snackbar/snackbar';
import { useNavigate } from 'react-router-dom';
import { APIInstance } from '../../../Services/Api';

export default function WithdrawMoney() {
    const [message, setMessage] = useState<string>('')
    const [severity, setSeverity] = useState<string>('')
    const [openWarningSnakbar, setOpenWarningSnakbar] = useState<boolean>(false);
    const [openBackDropLoading, setOpenBackDropLoading] = useState<boolean>(false);
    const classes = WithdrawMoneyStyle();
    const [t, i18n] = useTranslation();
    const Lang = localStorage.getItem('lng');
    const navigate = useNavigate();
    useEffect(() => {
        document.title = t('WithdrawMoney');
    });

    const [values, setValues] = useState({
        amount: "",
        wallet_link: "",
    });
    const [image, setImage] = useState('');
    const [file, setfile] = useState('');

    const handleInputChange = (e: any) => {
        setImage(e.target.files[0])
        setfile(URL.createObjectURL(e.target.files[0]));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setOpenBackDropLoading(true)
        const fd = new FormData();
        fd.append('image', image);
        APIInstance.Withdraw(values.amount, values.wallet_link, image)
            .then((res: any) => {
                setOpenBackDropLoading(false)
                openWarningSnakbarHandler();
                if (Lang === "ar") {
                    setMessage('تمت العملية بنجاح');
                }
                else {
                    setMessage('Process Done Successfully');
                }
                setSeverity('success')

            }).catch((error: any) => {
                setOpenBackDropLoading(false);
                openWarningSnakbarHandler();
                if (Lang === "ar") {
                    setMessage('يوجد خطأ في إدخال البيانات');
                }
                else {
                    setMessage('Invalid Data');
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
                    <Grid item xs={12} sm={12}>
                        <Card>
                            <Grid item sx={{ margin: 4 }}>
                                <CssBaseline />
                                <Typography component="h1" variant="h5" className={(Lang === "ar" ? classes.drtl : classes.dltr)}>
                                    {t('WithdrawMoney')}
                                </Typography>
                            </Grid>
                            <form onSubmit={handleSubmit}>
                                <Grid container spacing={2} sx={{ marginTop: 5 }}>
                                    <Grid item xs={10} sm={5} style={{ margin: 'auto' }}>
                                        <TextField
                                            variant="outlined"
                                            id="amount"
                                            type="number"
                                            label={t('Amount')}
                                            name="amount"
                                            required
                                            fullWidth
                                            onChange={(e) => setValues({ ...values, amount: e.target.value })}
                                        />
                                    </Grid>
                                    <Grid item xs={10} sm={5} style={{ margin: 'auto' }}>
                                        <TextField
                                            variant="outlined"
                                            id="wallet_link"
                                            label={t('WalletLink')}
                                            name="wallet_link"
                                            onChange={(e) => setValues({ ...values, wallet_link: e.target.value })}
                                            required
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    sx={{ marginTop: 5, marginBottom: 5 }}
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center">
                                    <Grid item xs={10} sm={4} >
                                        <input type="file"
                                            id="clickable" accept='image/*'
                                            className="form-control"
                                            name="upload_file"
                                            style={{ display: 'none' }}
                                            onChange={handleInputChange}

                                        />
                                        <label htmlFor="clickable"
                                            className={classes.labelbtn}
                                        >
                                            {t('UploadTransformationImage')}
                                            <CameraAltIcon />
                                        </label>
                                    </Grid>
                                </Grid>
                                <Grid container
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center">
                                    {file === '' ?
                                        <></>
                                        :
                                        <img src={file} className={classes.PreviewImage}
                                            style={{ margin: 'auto' }} alt={file}
                                        />
                                    }
                                </Grid>
                                <Grid
                                    container
                                    sx={{ marginTop: 5, marginBottom: 5 }}
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center">
                                    <Grid item xs={10} sm={4} >
                                        <Button
                                            className={classes.btn}
                                            fullWidth
                                            type="submit"
                                            variant="contained"
                                        >
                                            {t('Save')}
                                            &nbsp;
                                            <CheckCircleIcon />
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Card>
                    </Grid>
                </Container >
            </Layout>
        </>
    );
}