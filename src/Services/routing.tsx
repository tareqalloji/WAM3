import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'
import Login from '../Pages/User/Authentication/Login/Login';
import Register from '../Pages/User/Authentication/Register/Register';
import ForgetPassword from '../Pages/User/Authentication/ForgetPassword/ForgetPassword';
import Page404 from '../Pages/User/Authentication/Page404/Page404';

import Dashboard from '../Pages/User/Dashboard/Dashboard';
import DepositMoney from '../Pages/User/DepositMoney/DepositMoney';
import InviteFriends from '../Pages/User/InviteFriends/InviteFriends';
import WithdrowMoney from '../Pages/User/WithdrowMoney/WithdrowMoney';
import UserProfile from '../Pages/User/UserProfile/UserProfile';
import Investments from '../Pages/User/Investments/Investments';
import EditProfile from '../Pages/User/EditProfile/EditProfile';
import About from '../Pages/User/About/About';

import AdminLogin from '../Pages/Admin/Authentication/Login';
import UsersList from '../Pages/Admin/UsersList/UsersList';
import DepositsList from '../Pages/Admin/DepositsList/DepositsList';
import WithdrowsList from '../Pages/Admin/WithdrowsList/WithdrowsList';
import UserDetails from '../Pages/Admin/UserDetails/UserDetails';
import AboutWeb from '../Pages/Admin/About/About';


const type = localStorage.getItem('type');

export function Routing() {

    return (

        <AnimatePresence exitBeforeEnter>
            <BrowserRouter>
                {

                    type === 'user' ?
                        <Routes>
                            <Route path={'/Dashboard'} element={<Dashboard />} />
                            <Route path={'/UserProfile'} element={<UserProfile />} />
                            <Route path={'/EditProfile'} element={<EditProfile />} />
                            <Route path={'/InviteFriends'} element={<InviteFriends />} />
                            <Route path={'/DepositMoney'} element={<DepositMoney />} />
                            <Route path={'/WithdrowMoney'} element={<WithdrowMoney />} />
                            <Route path={'/Investments'} element={<Investments />} />
                            <Route path="/About" element={<About />} />
                            {/* <Route path={'/*'} element={<Page404 />} /> */}
                        </Routes>
                        : type === 'Admin' ?
                            <Routes>
                                <Route path={'Admin/UsersList'} element={<UsersList />} />
                                <Route path="Admin/UserDetails" element={<UserDetails />} />
                                <Route path={'Admin/DepositsList'} element={<DepositsList />} />
                                <Route path={'Admin/WithdrowsList'} element={<WithdrowsList />} />
                                <Route path={'Admin/About'} element={<AboutWeb />} />
                                <Route path={'/*'} element={<Page404 />} />
                            </Routes>
                            :
                            <Routes>
                                <Route path={'/'} element={<Login />} />
                                <Route path={'/Login'} element={<Login />} />
                                <Route path={'/Register'} element={<Register />} />
                                <Route path={'/Admin'} element={<AdminLogin />} />
                                <Route path={'/ForgetPassword'} element={<ForgetPassword />} />
                                <Route path={'/Admin'} element={<AdminLogin />} />
                                {/* <Route path={'/*'} element={<Page404 />} /> */}
                            </Routes>
                            
                }
                {/* <Routes>
                    <Route path={'/*'} element={<Page404 />} />
                </Routes> */}
            </BrowserRouter>
        </AnimatePresence>
    );
}