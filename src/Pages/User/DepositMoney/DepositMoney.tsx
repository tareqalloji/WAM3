import React, { useEffect, useState } from 'react';
import Layout from '../Layouts/Layout';
import { useTranslation } from 'react-i18next';
import { DepositMoneyStyle } from './DepositMoneyStyle';
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

function DepositMoney() {
    useEffect(() => {
        document.title = t('DepositMoney');
        GetWebsiteInfo();
        Dashboard();
    }, []);
    const [message, setMessage] = useState<string>('')
    const [severity, setSeverity] = useState<string>('')
    const [openWarningSnakbar, setOpenWarningSnakbar] = useState<boolean>(false);
    const [openBackDropLoading, setOpenBackDropLoading] = useState<boolean>(false);
    const classes = DepositMoneyStyle();
    const [t, i18n] = useTranslation();
    const Lang = localStorage.getItem('lng');
    const navigate = useNavigate();
    const [values, setValues] = useState({
        amount: "",
    });

    let data = {
        website_wallet: "",
    };
    const [formdata, setFormData] = useState(data);

    let total = {
        Total_amount_of_Deposit: "",
    };
    const [formtotal, setFormTotal] = useState(total);
    const [image, setImage] = useState('');
    const [file, setfile] = useState('');
    const handleInputChange = (e: any) => {
        setImage(e.target.files[0])
        setfile(URL.createObjectURL(e.target.files[0]));
    };

    const GetWebsiteInfo = () => {
        setOpenBackDropLoading(true)
        APIInstance.GetWebsiteInfo()
            .then((response) => {
                data = {
                    website_wallet: response.data[0].website_wallet,
                }
                console.log(response.data[0].website_wallet);
                setOpenBackDropLoading(false)
            }).then(() => {
                setFormData(data);
            });
    }

    const Dashboard = () => {
        setOpenBackDropLoading(true)
        APIInstance.Dashboard()
            .then((response) => {
                total = {
                    Total_amount_of_Deposit: response.data.Total_amount_of_Deposit,
                }
                console.log(response.data.Total_amount_of_Deposit);
                setOpenBackDropLoading(false)
            }).then(() => {
                setFormTotal(total);
            });
    }


    const handleSubmit = (e: any) => {
        e.preventDefault();
        setOpenBackDropLoading(true)
        const fd = new FormData();
        fd.append('image', image);
        APIInstance.Deposit(values.amount, image)
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
                            <Grid sx={{ margin: 4 }}>
                                <CssBaseline />
                                <Typography component="h1" variant="h5" className={(Lang === "ar" ? classes.drtl : classes.dltr)}>
                                    {t('DepositMoney')}
                                </Typography>
                            </Grid>
                            <form onSubmit={handleSubmit}>
                                <Grid container spacing={2} sx={{ marginTop: 5 }}>
                                    <Grid item xs={10} sm={4} style={{ margin: 'auto' }} className={(Lang === "ar" ? classes.drtl : classes.dltr)}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography>
                                                {new Date().toLocaleString() + ""}
                                            </Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={10} sm={6} style={{ margin: 'auto' }} className={(Lang === "ar" ? classes.drtl : classes.dltr)}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography component="h1" variant="h5">
                                                {t('YourAmount')}:
                                            </Typography>
                                            &emsp;
                                            <Typography component="h2" variant="h6">
                                                <strong>{formtotal.Total_amount_of_Deposit}<span>$</span></strong>
                                            </Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={10} sm={4} style={{ margin: 'auto' }}>
                                        <TextField
                                            variant="outlined"
                                            id="amount"
                                            type="number"
                                            label={t('DepositAmount')}
                                            name="amount"
                                            onChange={(e) => setValues({ ...values, amount: e.target.value })}
                                            required
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={10} sm={6} style={{ margin: 'auto' }} className={(Lang === "ar" ? classes.drtl : classes.dltr)}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography component="h1" variant="h5">
                                                {t('WalletLink')}:
                                            </Typography>
                                            &emsp;
                                            <Typography component="h2" variant="h6">
                                                <strong>
                                                    {formdata.website_wallet == null ? t('Empty') : formdata.website_wallet}
                                                </strong>
                                            </Typography>
                                        </div>
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
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Grid item xs={10} sm={4}
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                    </Grid>
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
                    </Grid >
                </Container >
            </Layout >
        </>
    );
}

export default DepositMoney;