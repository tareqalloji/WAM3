 import React, { useEffect, useState } from 'react';
import Layout from '../Layouts/Layout';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';
import { InviteFriendsStyle } from './InviteFriendsStyle';
import { APIInstance } from '../../../Services/Api';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function InviteFriends() {
    const [openBackDropLoading, setOpenBackDropLoading] = useState<boolean>(false);
    const classes = InviteFriendsStyle();
    const [t, i18n] = useTranslation();
    const Lang = localStorage.getItem('lng');
    useEffect(() => {
        document.title = t('InviteFriends');
        return () => {
            getUserProfile();
        };
    },[]);

    let values = {
        invite_link: '',
    };
    const [formValues, setFormValues] = useState(values);
    const getUserProfile = () => {
        setOpenBackDropLoading(true)
        APIInstance.getUserProfile()
            .then((response) => {
                values = {
                    invite_link: response.data.data.invite_link,
                }
                setOpenBackDropLoading(false)
            }).then(() => {
                setFormValues(values)
            });
    }
    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={openBackDropLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Layout>
                <Container maxWidth="lg" className={(Lang === "ar" ? classes.drtl : classes.dltr)}>
                    <Box>
                        <Card>
                            <CardContent>
                                <Container>
                                    <Grid container spacing={2} className={classes.Grid}>
                                        <Grid xs={7}>
                                            <TextField
                                                name='InviteLink'
                                                label={t('InviteLink')}
                                                variant="filled"
                                                value={formValues.invite_link}
                                                fullWidth
                                                disabled
                                            />
                                        </Grid>
                                        {/* <Button>Copy</Button> */}
                                    </Grid>

                                </Container>
                            </CardContent>
                        </Card>
                        <CssBaseline />
                    </Box>
                </Container>
            </Layout >
        </>
    );
}
export default InviteFriends;