import React, { useEffect, useState } from 'react';
import Layout from '../Layouts/Layout';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { useTranslation } from 'react-i18next';
import { AboutStyle } from './AboutStyle';
import Info from '../../../assets/Images/Info.svg';
import Call from '../../../assets/Images/Call.svg';
import Call2 from '../../../assets/Images/Call2.svg';
import Mail from '../../../assets/Images/Mail.svg';
import { APIInstance } from '../../../Services/Api';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function About() {
    const classes = AboutStyle();
    const Lang = localStorage.getItem('lng')
    const values = {
        about_us: '',
        email: '',
        phone_number: '',
        bonus_value: '',
        number_of_invites: '',
        website_wallet: ''
    };
    const [formValues, setFormValues] = useState(values);
    const [t, i18n] = useTranslation();
    useEffect(() => {
        document.title = t('About');
        GetWebsiteInfo();
    }, []);

    function GetWebsiteInfo() {
        APIInstance.GetWebsiteInfo()
            .then((response: any) => {
                setFormValues(response.data[0])

            })
    }

    return (
        <Layout>
            <Container maxWidth="lg" className={(Lang === "ar" ? classes.drtl : classes.dltr)}>
                <Box>
                    <Card>
                        <CardContent>
                            < Typography variant="h4" gutterBottom>
                                <img src={Info} className={classes.img} alt={Info} />
                                <span>
                                    {t('About')}
                                </span>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {formValues.about_us}
                            </Typography>
                        </CardContent>
                        <Divider />
                        <CardContent>
                            <Typography variant="h4" gutterBottom>
                                <img src={Call} className={classes.img} alt={Call} />
                                <span>
                                    {t('Contact')}
                                </span>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <Container>
                                    <Grid container spacing={2} className={classes.Grid}>
                                        <Grid xs={12}>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <img src={Mail} alt={Mail} className={classes.ContactImage} />
                                                <Typography className={classes.Typeo}>
                                                    <strong>{formValues.email}</strong>
                                                </Typography>
                                            </div>
                                        </Grid>
                                        <Grid xs={12}>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <img src={Call2} alt={Call2} className={classes.ContactImage} />
                                                <Typography className={classes.Typeo}>
                                                    <strong>{formValues.phone_number}</strong>
                                                </Typography>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Container>
                            </Typography>
                        </CardContent>
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
                                    style={{ background: "linear-gradient(0deg, rgba(93,89,125,1) 27%, rgba(186,177,249,1) 100%)" }}
                                    fullWidth
                                    variant="contained"
                                    component={Link} to="/Admin/EditAbout"
                                >
                                    {t('EditAbout')}
                                    &nbsp;
                                    <CheckCircleIcon />
                                </Button>
                            </Grid>
                        </Grid>
                    </Card>
                    <CssBaseline />
                </Box>
            </Container>
        </Layout >
    );

}