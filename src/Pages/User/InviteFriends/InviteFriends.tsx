import React, { useEffect } from 'react';
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
import Button from '@mui/material/Button';

function InviteFriends() {
    const classes = InviteFriendsStyle();
    const [t, i18n] = useTranslation();
    const Lang = localStorage.getItem('lng');
    useEffect(() => {
        document.title = t('InviteFriends');
    });

    return (
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
                                            value={t('InviteLink')}
                                            fullWidth
                                            disabled
                                        />
                                    </Grid>
                                    {/* <Button>Copy</Button> */}
                                </Grid>
                                <Grid container spacing={2} className={classes.Grid}>
                                    <Grid xs={7}>
                                        <TextField
                                            name='SpecialInviteLink'
                                            label={t('SpecialInviteLink')}
                                            variant="filled"
                                            value={t('SpecialInviteLink')}
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
    );
}
export default InviteFriends;