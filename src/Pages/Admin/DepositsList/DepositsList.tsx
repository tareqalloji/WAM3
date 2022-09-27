import React, { useEffect, useState } from 'react';
import Layout from '../Layouts/Layout';
import { useTranslation } from 'react-i18next';
import { DepositsListStyle } from './DepositsListStyle';
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
import CircularProgress from '@mui/material/CircularProgress';
import { APIInstance } from '../../../Services/Api';

interface Deposit {

    id: string;
    amount: string,
    image: string,
    status: string,

}
interface User {
    id: string,
    first_name: string,
    last_name: string,
    deposit: Deposit[],
}

function DepositsList() {
    const [users, setUsers] = React.useState<User[]>([]);
    const [loading, setLoading] = React.useState(false);
    const classes = DepositsListStyle();
    const [t, i18n] = useTranslation();
    const Lang = localStorage.getItem('lng');
    useEffect(() => {
        document.title = t('DepositsList');
        GetDepositsList();
        setLoading(true)

    }, []);

    const [values, setValues] = useState({
        status: 0,
    });

    function GetDepositsList() {
        APIInstance.GetDepositsList()
            .then((response: any) => {
                setUsers(response.data.Deposits)
                setLoading(false)
            })
    }

    function AcceptDeposit(id: any) {
        APIInstance.DepositStatus('1', id).then((res: any) => {
            GetDepositsList()
        })

    }

    function RejectDeposit(id: any) {
        APIInstance.DepositStatus('2', id).then((res: any) => {
            GetDepositsList()
        });
    }
    return (
        <Layout>
            <Container component="main">
                <Grid item xs={12} sm={12}>
                    <Card>
                        <Grid sx={{ margin: 4 }}>
                            <CssBaseline />
                            <Typography component="h1" variant="h5" className={(Lang === "ar" ? classes.drtl : classes.dltr)}>
                                {t('DepositsList')}
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
                                                <TableCell align="center">{t('ProcessImage')}</TableCell>
                                                <TableCell align="center">{t('Options')}</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {users.map((user) => {
                                                return (
                                                    user.deposit.map((deposit) => {
                                                        return (
                                                            <TableRow
                                                                key={user.id}
                                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                            >
                                                                <TableCell align="center">{user.first_name} {user.last_name}</TableCell>
                                                                <TableCell align="center">{deposit.amount}</TableCell>
                                                                <TableCell align="center">
                                                                    <img src={`https://aurora-team.com/wam3/public/storage/${deposit.image}`} alt="" style={{ width: '300px', height: '200px' }} />
                                                                </TableCell>
                                                                <TableCell align="center">
                                                                    <Button
                                                                        className={classes.Accept}
                                                                        style={{ marginLeft: '5px', marginRight: '5px' }}
                                                                        onClick={() => {
                                                                            AcceptDeposit(deposit.id);
                                                                        }}
                                                                        variant="contained"
                                                                    >
                                                                        {t('Accept')}
                                                                    </Button>
                                                                    <Button
                                                                        className={classes.Reject}
                                                                        onClick={() => {
                                                                            RejectDeposit(deposit.id)
                                                                        }}
                                                                        variant="contained"
                                                                    >
                                                                        {t('Reject')}
                                                                    </Button>
                                                                </TableCell>
                                                            </TableRow>
                                                        );
                                                    })
                                                );
                                            })}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
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
        </Layout >
    );
}

export default DepositsList;



// user.deposit.map((deposit) => {
//     <TableRow
//         key={user.id}
//         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//     >
//         <TableCell align="center">{user.first_name} {user.last_name}</TableCell>
//         <TableCell align="center">{deposit.amount}</TableCell>
//         <TableCell align="center">
//             <img src={deposit.image} className={classes.ProcessImage} alt="" />
//         </TableCell>
//     </TableRow>
// })