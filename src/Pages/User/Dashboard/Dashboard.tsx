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
import axios from 'axios';
import { Button } from '@mui/material';


export default function Dashboard() {

    const Color = {
        purple: '#7750DD',
    }
    const classes = DashboardStyle();
    const [t, i18n] = useTranslation();
    const Lang = localStorage.getItem('lng');
    useEffect(() => {
        document.title = t('Dashboard');
    });

    const data = {
        Total_amount_of_Deposit: '',
        TotalInvite: ''
    }
    const GetDashboard = () => {
        APIInstance.Dashboard()
            .then((res) => {
                data.Total_amount_of_Deposit = res.data.Total_amount_of_Deposit;
                data.TotalInvite = res.data.TotalInvite;
                console.log(data.Total_amount_of_Deposit);
            })
    }



    return (
        <Layout>
            <Container component="main">
                <Box>
                    <Button
                    onClick={GetDashboard}
                    >get</Button>
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
                                        20
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
                                        20
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