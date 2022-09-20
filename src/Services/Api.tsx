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
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
    }

    Withdrow(amount: number, wallet_link: string, image: any) {
        return axios.post(`https://aurora-team.com/wam3/public/api/withdrow`,
            {
                amount: amount,
                wallet_link: wallet_link,
                image: image,

            }, {
            headers: {
                'Accept': `application/json`,
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
    }

    Investment(amount: number) {
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

    UpdateProfile(first_name: string, last_name: string, phone: number, email: string, country: string) {
        return axios.post(`https://aurora-team.com/wam3/public/api/usera-updateProfile`,
            {
                first_name: first_name,
                last_name: last_name,
                phone: phone,
                email: email,
                country: country,

            }, {
            headers: {
                'Accept': `application/json`,
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
    }

    // GetWebsiteInfo(about_us: string, phone: number, email: string) {
    //     return axios.get(`https://aurora-team.com/wam3/public/api/get-info`,
    //         {
    //             about_us: about_us,
    //             phone: phone,
    //             email: email,

    //         });
    // }

    Dashboard() {
        return axios.get(`https://aurora-team.com/wam3/public/api/user-dashboard`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        })
    }



    // Admin

    AdminLogin(userEmail: string, userPassword: string) {
        return axios.post(`https://aurora-team.com/wam3/public/api/adminlogin`,
            {
                email: userEmail,
                password: userPassword,

            }, {
            headers: {
                'Accept': `application/json`,
            },
        });
    }

    UpdateWebsiteInfo(about_us: string, phone: number, email: string) {
        return axios.post(`https://aurora-team.com/wam3/public/api/info`,
            {
                about_us: about_us,
                phone: phone,
                email: email,

            }, {
            headers: {
                'Accept': `application/json`,
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
    }

}
export let APIInstance = new Api();