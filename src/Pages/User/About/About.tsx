import React, { useEffect } from 'react';
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


export default function About() {
    const classes = AboutStyle();
    const Lang = localStorage.getItem('lng')
    const [t, i18n] = useTranslation();
    useEffect(() => {
        document.title = t('About');
    });
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
                                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate
                                the visual form of a document or a typeface without relying on meaningful content.
                                Lorem ipsum may be used as a placeholder before final copy is available.
                                It is also used to temporarily replace text in a process called greeking,
                                which allows designers to consider the form of a webpage or publication,
                                without the meaning of the text influencing the design.
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
                                                    <strong>tarq.alloji@gmail.com</strong>
                                                </Typography>
                                            </div>
                                        </Grid>
                                        <Grid xs={12}>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <img src={Call2} alt={Call2} className={classes.ContactImage} />
                                                <Typography className={classes.Typeo}>
                                                    <strong>0945201283</strong>
                                                </Typography>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Container>
                            </Typography>
                        </CardContent>
                    </Card>
                    <CssBaseline />
                </Box>
            </Container>
        </Layout >
    );

}