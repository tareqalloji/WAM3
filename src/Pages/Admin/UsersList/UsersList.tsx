import React, { useEffect } from 'react';
import Layout from '../Layouts/Layout';
import { useTranslation } from 'react-i18next';
import { UsersListStyle } from './UsersListStyle';
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
import { Link } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';

export default function AllUsers() {
    const classes = UsersListStyle();
    const [t, i18n] = useTranslation();
    const Lang = localStorage.getItem('lng');
    useEffect(() => {
        document.title = t('UsersList');
    });

    const Color = {
        purple: '#7750DD'
    }

    function createData(
        FirstName: string,
        LastName: string,
        PhoneNumber: number,
        Deposits: number,
        Withdrows: number,
    ) {
        return { FirstName, LastName, PhoneNumber, Deposits, Withdrows };
    }

    const rows = [
        createData('Frozen', 'yoghurt', 4500, 4500, 4500),
        createData('Frozen', 'yoghurt', 4500, 4500, 4500),
        createData('Frozen', 'yoghurt', 4500, 4500, 4500),
        createData('Frozen', 'yoghurt', 4500, 4500, 4500),
    ];
    return (
        <Layout>
            <Container component="main">
                <Grid item xs={12} sm={12}>
                    <Card>
                        <Grid sx={{ margin: 4 }}>
                            <CssBaseline />
                            <Typography component="h1" variant="h5" className={(Lang === "ar" ? classes.drtl : classes.dltr)}>
                                {t('UsersList')}
                            </Typography>
                        </Grid>
                        <form>
                            <Grid sx={{ marginTop: 5 }}>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" className={(Lang === "ar" ? classes.drtl : classes.dltr)}>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="center">{t('FirstName')}</TableCell>
                                                <TableCell align="center">{t('LastName')}</TableCell>
                                                <TableCell align="center">{t('PhoneNumber')}</TableCell>
                                                <TableCell align="center">{t('Deposits')}</TableCell>
                                                <TableCell align="center">{t('Withdrows')}</TableCell>
                                                <TableCell align="center">{t('Options')}</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                    key={row.FirstName}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell align="center">{row.FirstName}</TableCell>
                                                    <TableCell align="center">{row.LastName}</TableCell>
                                                    <TableCell align="center">{row.PhoneNumber}</TableCell>
                                                    <TableCell align="center">{row.Deposits}</TableCell>
                                                    <TableCell align="center">{row.Withdrows}</TableCell>
                                                    <TableCell align="center">
                                                        <Tooltip title={t('UserDetails')}>
                                                            <Button
                                                                style={{ backgroundColor: Color.purple }}
                                                                component={Link}
                                                                to="../Admin/UserDetails"
                                                                variant="contained"
                                                            >
                                                                <InfoIcon />
                                                            </Button>
                                                        </Tooltip>
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
        </Layout>
    );
}