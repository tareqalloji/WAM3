import React, { useEffect, useState } from 'react';
import Layout from '../Layouts/Layout';
import { useTranslation } from 'react-i18next';
import { InvestmentsStyle } from './InvestmentsStyle';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { WarningSnackbar } from '../../../component/Snackbar/snackbar';
import { APIInstance } from '../../../Services/Api';

function Investments() {
    const [message, setMessage] = useState<string>('')
    const [severity, setSeverity] = useState<string>('')
    const [openWarningSnakbar, setOpenWarningSnakbar] = React.useState<boolean>(false);
    const [openBackDropLoading, setOpenBackDropLoading] = React.useState<boolean>(false);
    const classes = InvestmentsStyle();
    const [t, i18n] = useTranslation();
    const Lang = localStorage.getItem('lng');
    const Color = {
        purple: '#7750DD',
    }
    useEffect(() => {
        document.title = t('Investments');
        return (
            GetDepositAmount()
        )
    }, []);

    let data: any = {
        data1: ''
    }
    const [formdata, setformData] = useState(data);
    const [values, setValues] = useState({
        amount: "",

    });

    const GetDepositAmount = () => {
        APIInstance.Dashboard()
            .then((response) => {
                data = {
                    data1: response.data.Total_amount_of_Deposit,
                }
                console.log(data.data1);
            }).then(() => {
                setformData(data)
            });
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        setOpenBackDropLoading(true)
        APIInstance.Investment(values.amount)
            .then((res: any) => {
                setOpenBackDropLoading(false)
                openWarningSnakbarHandler();
                if (Lang === "ar") {
                    setMessage('!تمت العملية بنجاح');
                }
                else {
                    setMessage('Process Done Successfully!');
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
                    <Grid item xs={12} sm={12}>
                        <Card>
                            <Grid sx={{ margin: 4 }}>
                                <CssBaseline />
                                <Typography component="h1" variant="h5" className={(Lang === "ar" ? classes.drtl : classes.dltr)}>
                                    {t('YourInvestments')}
                                </Typography>
                            </Grid>
                            <form onSubmit={handleSubmit}>
                                <Grid container spacing={2} sx={{ marginTop: 5 }}>
                                    <Grid item xs={10} sm={5} style={{ margin: 'auto' }}>
                                        <TextField
                                            variant="outlined"
                                            id="InvestmentsAmount"
                                            type="number"
                                            label={t('InvestmentsAmount')}
                                            name="InvestmentsAmount"
                                            required
                                            fullWidth
                                            onChange={(e) => setValues({ ...values, amount: e.target.value })}
                                            InputProps={{ inputProps: { min: 0, max: formdata.data1 } }}
                                        />
                                    </Grid>
                                    <Grid item xs={10} sm={5} style={{ margin: 'auto' }} className={(Lang === "ar" ? classes.drtl : classes.dltr)}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography component="h1" variant="h5">
                                                {t('YourAmount')}:
                                            </Typography>
                                            &emsp;
                                            <Typography component="h2" variant="h6">
                                                <strong>{formdata.data1}<span>$</span></strong>
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
                                        <Button
                                            style={{ backgroundColor: Color.purple }}
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

export default Investments;