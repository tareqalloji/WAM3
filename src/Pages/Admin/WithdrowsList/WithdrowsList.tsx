import React, { useEffect } from 'react';
import Layout from '../Layouts/Layout';
import { useTranslation } from 'react-i18next';
import { WithdrowsListStyle } from './WithdrowsListStyle';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AttachmentIcon from '@mui/icons-material/Attachment';

function WithdrowsList() {

    const classes = WithdrowsListStyle();
    const [t, i18n] = useTranslation();
    const Lang = localStorage.getItem('lng');
    useEffect(() => {
        document.title = t('WithdrowsList');
    });

    const Color = {
        purple: '#7750DD',
        Danger: '#ea5455 ',
        Success: '#28c76f ',
    }

    function createData(
        UserName: string,
        Amount: number,
        WalletLink: string,
    ) {
        return { UserName, Amount, WalletLink };
    }

    const rows = [
        createData('UserName', 4500, 'https://storage.planner5d.com/ud/e997a22aff5980f534db552d310776ee.jpg?v=1620787001'),
        createData('UserName', 4500, 'https://storage.planner5d.com/ud/e997a22aff5980f534db552d310776ee.jpg?v=1620787001'),
    ];
    return (
        <Layout>
            <Container component="main">
                <Grid item xs={12} sm={12}>
                    <Card>
                        <Grid sx={{ margin: 4 }}>
                            <CssBaseline />
                            <Typography component="h1" variant="h5" className={(Lang === "ar" ? classes.drtl : classes.dltr)}>
                                {t('WithdrowsList')}
                            </Typography>
                        </Grid>
                        <form>
                            <Grid sx={{ marginTop: 5 }}>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" className={(Lang === "ar" ? classes.drtl : classes.dltr)}>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="center">{t('UserName')}</TableCell>
                                                <TableCell align="center">{t('Amount')}</TableCell>
                                                <TableCell align="center">{t('WalletLink')}</TableCell>
                                                <TableCell align="center">{t('Options')}</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                    key={row.UserName}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell align="center">{row.UserName}</TableCell>
                                                    <TableCell align="center">{row.Amount}</TableCell>
                                                    <TableCell align="center">
                                                        <Tooltip title={t('UserDetails')}>
                                                            <Button
                                                                style={{ backgroundColor: Color.purple }}
                                                                variant="contained"
                                                                href={row.WalletLink}
                                                                target="_blank"
                                                            >
                                                                <AttachmentIcon />

                                                            </Button>
                                                        </Tooltip>
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        <Button
                                                            style={{ backgroundColor: Color.Success, marginLeft: '10px' }}
                                                            variant="contained"
                                                            href={row.WalletLink}
                                                            target="_blank"
                                                        >
                                                            {t('Accept')}

                                                        </Button>
                                                        <Button
                                                            style={{ backgroundColor: Color.Danger }}
                                                            variant="contained"
                                                            href={row.WalletLink}
                                                            target="_blank"
                                                        >
                                                            {t('Reject')}
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </form>
                    </Card>
                </Grid >
            </Container >
        </Layout >
    );
}

export default WithdrowsList;