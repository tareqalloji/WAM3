import axios from 'axios';

export default class Api {

    //User

    Login(email: string, password: string) {
        return axios.post(`https://aurora-team.com/wam3/public/api/login`,
            {
                email: email,
                password: password,

            }, {
            headers: {
                'Accept': `application/json`,
            },
        });
    }

    Register(first_name: string, last_name: string, phone: string, email: string, country: string, password: string, password_confirmation: string) {
        return axios.post(`https://aurora-team.com/wam3/public/api/register`,
            {
                first_name: first_name,
                last_name: last_name,
                phone: phone,
                email: email,
                country: country,
                password: password,
                password_confirmation: password_confirmation,

            }, {
            headers: {
                'Accept': `application/json`,
            },
        });
    }

    Deposit(amount: string, image: any) {
        return axios.post(`https://aurora-team.com/wam3/public/api/deposit`,
            {
                amount: amount,
                image: image,

            }, {
            headers: {
                'Accept': `application/json`,
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
    }

    Withdraw(amount: string, wallet_link: string, image: any) {
        return axios.post(`https://aurora-team.com/wam3/public/api/withdraw`,
            {
                amount: amount,
                wallet_link: wallet_link,
                image: image,

            }, {
            headers: {
                'Accept': `application/json`,
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
    }

    Investment(amount: string) {
        return axios.post(`https://aurora-team.com/wam3/public/api/invest`,
            {
                amount: amount

            }, {
            headers: {
                'Accept': `application/json`,
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
    }

    UpdateProfile(first_name: string, last_name: string, phone: string, country: string, invite_link: string) {
        return axios.post(`https://aurora-team.com/wam3/public/api/user-updateProfile`,
            {
                first_name: first_name,
                last_name: last_name,
                phone: phone,
                country: country,
                invite_link: invite_link,

            }, {
            headers: {
                'Accept': `application/json`,
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
    }

    getUserProfile() {
        return axios.get(`https://aurora-team.com/wam3/public/api/user-profile`,
            {
                headers: {
                    'Accept': `application/json`,
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            });
    }

    GetWebsiteInfo() {
        return axios.get(`https://aurora-team.com/wam3/public/api/get-info`,
            {
                headers: {
                    'Accept': `application/json`,
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            }
        );
    }

    async Dashboard() {
        return axios.get(`https://aurora-team.com/wam3/public/api/user-dashboard`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        })
    }



    // Admin

    AdminLogin(email: string, password: string) {
        return axios.post(`https://aurora-team.com/wam3/public/api/adminlogin`,
            {
                email: email,
                password: password,

            }, {
            headers: {
                'Accept': `application/json`,
            },
        });
    }

    UpdateWebsiteInfo(about_us: string, phone_number: string, email: string,
        bonus_value: string, number_of_invites: string, website_wallet: string) {
        return axios.post(`https://aurora-team.com/wam3/public/api/info`,
            {
                about_us: about_us,
                phone_number: phone_number,
                email: email,
                bonus_value: bonus_value,
                number_of_invites: number_of_invites,
                website_wallet: website_wallet,

            }, {
            headers: {
                'Accept': `application/json`,
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
    }

    GetUsersList() {
        return axios.get(`https://aurora-team.com/wam3/public/api/get-all-users`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });

    }

    GetUserdetails(id: any) {
        return axios.get(`https://aurora-team.com/wam3/public/api/get-all-users/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });

    }

    GetDepositsList() {
        return axios.get(`https://aurora-team.com/wam3/public/api/get-user-deposit`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
    }


    GetWithdrawsList() {
        return axios.get(`https://aurora-team.com/wam3/public/api/get-user-withdraw`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
    }

    DepositStatus(status: string, id: String) {
        return axios.post(`https://aurora-team.com/wam3/public/api/admin-accept-reject/${id}`,
            {
                status: status,

            }, {
            headers: {
                'Accept': `application/json`,
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        })
    }

    WithdrawStatus(status: string, id: String) {
        return axios.post(`https://aurora-team.com/wam3/public/api/admin-accept-reject-withdraw/${id}`,
            {
                status: status,

            }, {
            headers: {
                'Accept': `application/json`,
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        })
    }
};


export let APIInstance = new Api();