import React, { useEffect, useState } from 'react';
import Layout from '../Layouts/Layout';
import { useTranslation } from 'react-i18next';
import { DashboardStyle } from './DashboardStyle';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { APIInstance } from '../../../Services/Api';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function Dashboard() {

    const Color = {
        purple: '#7750DD',
    }
    const classes = DashboardStyle();
    const [t, i18n] = useTranslation();
    const Lang = localStorage.getItem('lng');
    let values: any = {
        data1: '',
        data2: ''
    }
    const [formValues, setFormValues] = useState(values);
    useEffect(() => {
        document.title = t('Dashboard');
        return () => {            
            GetDashboard();
        };
    }, []);


    const GetDashboard = () => {
        APIInstance.Dashboard()
            .then((response) => {
                values = {
                    data1: response.data.Total_amount_of_Deposit,
                    data2: response.data.Total_number_of_invites,
                }
            }).then(() => {
                setFormValues(values)
            });
    }


    return (
        <Layout>
            <Container component="main">

                <Box>
                    <Grid container spacing={2} sx={{ marginTop: 5 }}>
                        <Grid item xs={12} sm={6} className={classes.YourAmount}>
                            <Card className={classes.CardColor}>
                                <Grid sx={{ margin: 4 }}>
                                    <CssBaseline />
                                    <Typography component="h1" variant="h5" className={(Lang === "ar" ? classes.drtl : classes.dltr)}>
                                        {t('YourAmount')}
                                    </Typography>
                                </Grid>
                                <Grid sx={{ margin: 15 }}>
                                    <CssBaseline />
                                    <Typography component="h1" variant="h2" className={classes.CardNumber}>
                                        {formValues.data1}
                                    </Typography>
                                </Grid>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} className={classes.InviteFriends}>
                            <Card className={classes.CardColor}>
                                <Grid sx={{ margin: 4 }}>
                                    <CssBaseline />
                                    <Typography component="h1" variant="h5" className={(Lang === "ar" ? classes.drtl : classes.dltr)} >
                                        {t('InvitedFriends')}
                                    </Typography>
                                </Grid>
                                <Grid sx={{ margin: 15 }}>
                                    <CssBaseline />
                                    <Typography component="h1" variant="h2" className={classes.CardNumber}>
                                        {formValues.data2}
                                    </Typography>
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container >
        </Layout >
    );
}