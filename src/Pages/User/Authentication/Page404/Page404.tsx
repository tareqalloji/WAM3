import * as React from 'react';
import { Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import Image404 from '../../../../assets/Images/Page404.svg';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
const Color = {
    purple: '#7750DD',
}

export default function Page404() {
    const type = localStorage.getItem('type');
    const [t, i18n] = useTranslation();

    return (
        <>
            {
                type == null || type === undefined ?
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            minHeight: '100vh',
                        }}
                    >
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" sx={{
                                marginTop: '10px', backgroundColor: Color.purple,
                                ':hover': { bgcolor: Color.purple },
                            }} size="large">
                                <KeyboardBackspaceOutlinedIcon></KeyboardBackspaceOutlinedIcon>
                                {t("Login")}
                            </Button>
                        </Link>
                        <img
                            src={Image404}
                            alt=""
                            width={500} height={500}
                        />
                    </Box>
                    : type === 'user' ? <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            minHeight: '100vh',
                        }}
                    >
                        <Link to="/Dashboard" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" sx={{
                                marginTop: '10px', backgroundColor: Color.purple,
                                ':hover': { bgcolor: Color.purple },
                            }} size="large">
                                <KeyboardBackspaceOutlinedIcon></KeyboardBackspaceOutlinedIcon>
                                {t("BackToDashboard")}
                            </Button>
                        </Link>
                        <img
                            src={Image404}
                            alt=""
                            width={500} height={500}
                        />
                    </Box> :
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                minHeight: '100vh',
                            }}
                        >
                            <Link to="/login" style={{ textDecoration: 'none' }}>
                                <Button variant="contained" sx={{
                                    marginTop: '10px', backgroundColor: Color.purple,
                                    ':hover': { bgcolor: Color.purple },
                                }} size="large">
                                    <KeyboardBackspaceOutlinedIcon></KeyboardBackspaceOutlinedIcon>
                                    {t("BackToUsersList")}
                                </Button>
                            </Link>
                            <img
                                src={Image404}
                                alt=""
                                width={500} height={500}
                            />
                        </Box>

            }

        </>
    );
}