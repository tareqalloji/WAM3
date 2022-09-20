import React, { useEffect } from 'react';
import Layout from '../Layouts/Layout';
import { useTranslation } from 'react-i18next';
import { WithdrowMoneyStyle } from './WithdrowMoneyStyle';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function WithdrowMoney() {
    const Color = {
        purple: '#7750DD',
    }
    const classes = WithdrowMoneyStyle();
    const [t, i18n] = useTranslation();
    const Lang = localStorage.getItem('lng');
    useEffect(() => {
        document.title = t('WithdrowMoney');
    });
    return (
        <Layout>
            <Container component="main">
                <Grid item xs={12} sm={12}>
                    <Card>
                        <Grid sx={{ margin: 4 }}>
                            <CssBaseline />
                            <Typography component="h1" variant="h5" className={(Lang === "ar" ? classes.drtl : classes.dltr)}>
                                {t('WithdrowMoney')}
                            </Typography>
                        </Grid>
                        <form>
                            <Grid container spacing={2} sx={{ marginTop: 5 }}>
                                <Grid item xs={10} sm={5} style={{ margin: 'auto' }}>
                                    <TextField
                                        variant="outlined"
                                        id="Amount"
                                        type="number"
                                        label={t('Amount')}
                                        name="Amount"
                                        required
                                        fullWidth
                                    // InputProps={{ inputProps: { min: 0, max: 10 } }}
                                    />
                                </Grid>
                                <Grid item xs={10} sm={5} style={{ margin: 'auto' }}>
                                    <TextField
                                        variant="outlined"
                                        id="WalletLink"
                                        label={t('WalletLink')}
                                        name="WalletLink"
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
    );
}