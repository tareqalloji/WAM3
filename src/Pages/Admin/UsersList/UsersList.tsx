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
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Tooltip from '@mui/material/Tooltip';
import CircularProgress from '@mui/material/CircularProgress';
import { APIInstance } from '../../../Services/Api';


interface User {
    id: string,
    first_name: string,
    last_name: string,
    phone: string,
    email: string

}
// GetUsersList();
export default function AllUsers() {
    const [users, setUsers] = React.useState<User[]>([]);
    const [loading, setLoading] = React.useState(false);
    const classes = UsersListStyle();
    const [t, i18n] = useTranslation();
    const Lang = localStorage.getItem('lng');

    useEffect(() => {
        document.title = t('UsersList');
        GetUsersList();
        setLoading(true)
    }, []);

    function GetUsersList() {
        APIInstance.GetUsersList()
            .then((response: any) => {
                setUsers(response.data)
                setLoading(false)
            })
    }

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
                            <Grid sx={{ marginTop: 5, }}>
                                <TableContainer component={Paper}>
                                    <Table size="small" aria-label="a dense table" className={(Lang === "ar" ? classes.drtl : classes.dltr)}>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="center">{t('FirstName')}</TableCell>
                                                <TableCell align="center">{t('LastName')}</TableCell>
                                                <TableCell align="center">{t('PhoneNumber')}</TableCell>
                                                <TableCell align="center">{t('Email')}</TableCell>
                                                <TableCell align="center">{t('Options')}</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {users.map((user) => (
                                                <TableRow
                                                    key={user.id}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell align="center">{user.first_name}</TableCell>
                                                    <TableCell align="center">{user.last_name}</TableCell>
                                                    <TableCell align="center">{user.phone}</TableCell>
                                                    <TableCell align="center">{user.email}</TableCell>
                                                    <TableCell align="center">
                                                        <Tooltip title={t('UserDetails')}>
                                                            <Button
                                                                className={classes.btn}
                                                                component={Link}
                                                                to={`../Admin/UserDetails/${user.id}`}
                                                                variant="contained"
                                                            >
                                                                <MoreHorizIcon />
                                                            </Button>
                                                        </Tooltip>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <div>
                                </div>
                            </Grid>
                        </form>
                    </Card>
                    {loading ?
                        <div className={classes.loadingContainer} >
                            <CircularProgress className={classes.CircularProgress} style={{ width: '50px', height: '50px' }} />
                        </div>
                        :
                        null
                    }
                </Grid >
            </Container >
        </Layout>
    );
}