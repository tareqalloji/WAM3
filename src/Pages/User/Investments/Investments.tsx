import React, { useEffect } from 'react';
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

function Investments() {
    const Color = {
        purple: '#7750DD',
    }
    const classes = InvestmentsStyle();
    const [t, i18n] = useTranslation();
    const Lang = localStorage.getItem('lng');
    useEffect(() => {
        document.title = t('Investments');
    });
    return (
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
                        <form>
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
                                    // InputProps={{ inputProps: { min: 0, max: 10 } }}
                                    />
                                </Grid>
                                <Grid item xs={10} sm={5} style={{ margin: 'auto' }} className={(Lang === "ar" ? classes.drtl : classes.dltr)}>
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

export default Investments;