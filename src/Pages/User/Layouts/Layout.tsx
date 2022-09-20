import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { AnimatePresence } from 'framer-motion'
import UserProfileIco from '../../../assets/Images/UserProfile.svg';
import InviteFriendsIco from '../../../assets/Images/InviteFriends.svg';
import WithdrowMoneyIco from '../../../assets/Images/WithdrowMoney.svg';
import DepositMoneyIco from '../../../assets/Images/DepositMoney.svg';
import InvestmentsIco from '../../../assets/Images/Investments.svg';
import Logout from '../../../assets/Images/Logout.svg';
import Logo from '../../../assets/Images/Logo.png';
import { useTranslation } from 'react-i18next';
import Localization from './Localization/Localization';
import Button from '@mui/material/Button';
import { LayoutStyle } from './LayoutStyle';

import { BrowserRouter, Route, Routes, Navigate, Link, useNavigate } from 'react-router-dom';

import Page404 from '../Authentication/Page404/Page404';
import Dashboard from '../Dashboard/Dashboard';
import DepositMoney from '../DepositMoney/DepositMoney';
import InviteFriends from '../InviteFriends/InviteFriends';
import WithdrowMoney from '../WithdrowMoney/WithdrowMoney';
import UserProfile from '../UserProfile/UserProfile';
import Investments from '../Investments/Investments';
import EditProfile from '../EditProfile/EditProfile';
import About from '../About/About';

const Color = {
    main: '#7750DD',
    background: '#F8F8F8'
}

const drawerWidth = 240;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})
    <AppBarProps>(({ theme, open }) => ({
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: `${drawerWidth}px`,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft(props: any) {

    const classes = LayoutStyle();
    const [t, i18n] = useTranslation();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const navigate = useNavigate();
    function logOut() {
        localStorage.removeItem('token')
        localStorage.removeItem('type')
        navigate('/')
    }


    if ((localStorage.getItem('token') == null || localStorage.getItem('token') === undefined) && (localStorage.getItem('type') === 'user')) {

        return (<Navigate to="/" />);

    }
    else 
        return (
            <div>
                <Box sx={{ display: 'flex', backgroundColor: Color.background, height: '100vh' }}>
                    <CssBaseline />
                    <AppBar position="fixed" open={open} sx={{ backgroundColor: Color.main, boxShadow: 'none' }}>
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={{ mr: 2, ...(open && { display: 'none' }) }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Button variant="contained" className={classes.btn} component={Link} to="/Dashboard">
                                {t('Dashboard')}
                            </Button>
                            <Button variant="contained" className={classes.btn} component={Link} to="/About">
                                {t('About')}
                            </Button>
                            <Localization />
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                width: drawerWidth,
                                boxSizing: 'border-box',
                            },
                        }}
                        variant="persistent"
                        anchor="left"
                        open={open}
                    >
                        <DrawerHeader>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                            </IconButton>
                        </DrawerHeader>
                        <Button>
                            <Avatar
                                style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '10px', }}
                                src={Logo}
                                sx={{ width: '100px', height: '100px' }}
                            />
                        </Button>
                        <Divider />
                        <List>
                            <ListItem style={{ color: 'inherit', textDecoration: 'inherit' }} component={Link} to={'/UserProfile'} key={t("UserProfile")} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <img src={UserProfileIco} style={{ "width": "21px" }} alt={UserProfileIco} />
                                    </ListItemIcon>
                                    <ListItemText primary={t("UserProfile")} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem style={{ color: 'inherit', textDecoration: 'inherit' }} component={Link} to={'/InviteFriends'} key={t("InviteFriends")} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <img src={InviteFriendsIco} style={{ "width": "21px" }} alt={InviteFriendsIco} />
                                    </ListItemIcon>
                                    <ListItemText primary={t("InviteFriends")} />
                                </ListItemButton>

                            </ListItem>
                            <ListItem style={{ color: 'inherit', textDecoration: 'inherit' }} component={Link} to={'/DepositMoney'} key={t("DepositMoney")} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <img src={DepositMoneyIco} style={{ "width": "21px" }} alt={DepositMoneyIco} />
                                    </ListItemIcon>
                                    <ListItemText primary={t("DepositMoney")} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem style={{ color: 'inherit', textDecoration: 'inherit' }} component={Link} to={'/WithdrowMoney'} key={t("WithdrowMoney")} disablePadding >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <img src={WithdrowMoneyIco} style={{ "width": "21px" }} alt={WithdrowMoneyIco} />
                                    </ListItemIcon>
                                    <ListItemText primary={t("WithdrowMoney")} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem style={{ color: 'inherit', textDecoration: 'inherit' }} component={Link} to={'/Investments'} key={t("Investments")} disablePadding >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <img src={InvestmentsIco} style={{ "width": "21px" }} alt={InvestmentsIco} />
                                    </ListItemIcon>
                                    <ListItemText primary={t("Investments")} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem style={{ color: 'inherit', textDecoration: 'inherit' }} key={t("Login")} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <img src={Logout} style={{ "width": "21px" }} alt={Logout} />
                                    </ListItemIcon>
                                    <ListItemText primary={t("Logout")} onClick={logOut} />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Drawer>
                    <Main open={open}>
                        <DrawerHeader />
                        {props.children}
                    </Main>
                </Box>
            {/* <AnimatePresence exitBeforeEnter>
                <BrowserRouter >
                    <Routes>
                        <Route path={'/Dashboard'} element={<Dashboard />} />
                        <Route path={'/UserProfile'} element={<UserProfile />} />
                        <Route path={'/EditProfile'} element={<EditProfile />} />
                        <Route path={'/InviteFriends'} element={<InviteFriends />} />
                        <Route path={'/DepositMoney'} element={<DepositMoney />} />
                        <Route path={'/WithdrowMoney'} element={<WithdrowMoney />} />
                        <Route path={'/Investments'} element={<Investments />} />
                        <Route path="/About" element={<About />} />
                        <Route path="/*" element={<Page404 />} />
                    </Routes>
                </BrowserRouter>
            </AnimatePresence>         */}
            </div>
        );
    
}

