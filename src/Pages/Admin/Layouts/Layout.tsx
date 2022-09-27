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
import UserProfile from '../../../assets/Images/UserProfile.svg';
import WithdrawMoney from '../../../assets/Images/WithdrawMoney.svg';
import DepositMoney from '../../../assets/Images/DepositMoney.svg';
import Logout from '../../../assets/Images/Logout.svg';
import About from '../../../assets/Images/About.svg';
import { useTranslation } from 'react-i18next';
import Localization from './Localization/Localization';
import Logo from '../../../assets/Images/Logo.png';
import { Link, Navigate, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { LayoutStyle } from './LayoutStyle';

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
    if ((localStorage.getItem('token') == null || localStorage.getItem('token') === undefined)) {
        return (<Navigate to="/" />);

    }
    else if (localStorage.getItem('type') === 'user')
        return (<Navigate to="/" />);
    else
        return (
            <div style={{ backgroundColor: Color.background }}>
                <Box sx={{ display: 'flex', backgroundColor: Color.background, }}>
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
                            <ListItem style={{ color: 'inherit', textDecoration: 'inherit' }} component={Link} to={'/Admin/UsersList'} key={t("UsersList")} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <img src={UserProfile} style={{ "width": "21px" }} alt={UserProfile} />
                                    </ListItemIcon>
                                    <ListItemText primary={t("UsersList")} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem style={{ color: 'inherit', textDecoration: 'inherit' }} component={Link} to={'/Admin/DepositsList'} key={t("DepositsList")} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <img src={DepositMoney} style={{ "width": "21px" }} alt={DepositMoney} />
                                    </ListItemIcon>
                                    <ListItemText primary={t("DepositsList")} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem style={{ color: 'inherit', textDecoration: 'inherit' }} component={Link} to={'/Admin/WithdrawsList'} key={t("WithdrawsList")} disablePadding >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <img src={WithdrawMoney} style={{ "width": "21px" }} alt={WithdrawMoney} />
                                    </ListItemIcon>
                                    <ListItemText primary={t("WithdrawsList")} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem style={{ color: 'inherit', textDecoration: 'inherit' }} component={Link} to={'/Admin/About'} key={t("About")} disablePadding >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <img src={About} style={{ "width": "21px" }} alt={About} />
                                    </ListItemIcon>
                                    <ListItemText primary={t("AboutWebsite")} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={logOut} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <img src={Logout} style={{ "width": "21px" }} alt={Logout} />
                                    </ListItemIcon>
                                    <ListItemText primary={t("Logout")} />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Drawer>
                    <Main open={open}>
                        <DrawerHeader />
                        {props.children}
                    </Main>
                </Box>
            </div >
        );
}

