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



function DepositMoney() {

    const [files, setFiles] = useState([]);

    const [userInfo, setuserInfo] = useState({
        file: [],
        filepreview: '',
    });

    const handleInputChange = (event: any) => {
        setuserInfo({
            ...userInfo,
            file: event.target.files[0],
            filepreview: URL.createObjectURL(event.target.files[0]),
        });

    }

    const Color = {
        purple: '#7750DD',
    }
    const classes = DepositMoneyStyle();
    const [t, i18n] = useTranslation();
    const Lang = localStorage.getItem('lng');
    useEffect(() => {
        document.title = t('DepositMoney');
    });
    return (
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
                        <form>
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
                                            <strong>2500<span>$</span></strong>
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={10} sm={4} style={{ margin: 'auto' }}>
                                    <TextField
                                        variant="outlined"
                                        id="DepositAmount"
                                        type="number"
                                        label={t('DepositAmount')}
                                        name="DepositAmount"
                                        required
                                        fullWidth
                                    // InputProps={{ inputProps: { min: 0, max: 10 } }}
                                    />
                                </Grid>
                                <Grid item xs={10} sm={6} style={{ margin: 'auto' }} className={(Lang === "ar" ? classes.drtl : classes.dltr)}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <Typography component="h1" variant="h5">
                                            {t('WalletLink')}:
                                        </Typography>
                                        &emsp;
                                        <Typography component="h2" variant="h6">
                                            <strong>http://localhost:3000/DepositMoney</strong>
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
                                    <input type="file" id="clickable" className="form-control" name="upload_file" style={{ display: 'none' }} onChange={handleInputChange} />
                                    <label htmlFor="clickable"
                                        className={classes.labelbtn}
                                    >
                                        {t('UploadTransformationImage')}
                                        <CameraAltIcon />
                                    </label>
                                </Grid>
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
                                    {userInfo.filepreview !== '' ?
                                        <img className={classes.PreviewImage} src={userInfo.filepreview} alt="UploadImage" />
                                        : null}
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
                </Grid >
            </Container >
        </Layout >
    );
}

export default DepositMoney;