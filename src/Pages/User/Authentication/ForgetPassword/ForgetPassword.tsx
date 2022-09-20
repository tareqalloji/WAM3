import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';
import { ForgetPasswordStyle } from './ForgetPasswordStyle';
import CssBaseline from '@mui/material/CssBaseline';
import Card from '@mui/material/Card';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';

const Color = {
    purple: '#7750DD',
}

const validationSchema = yup.object({

    email: yup
        .string()
        .required('User Name is required'),

    password: yup
        .string()
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),

});
const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

export default function ForgetPassword() {
    const classes = ForgetPasswordStyle();
    const [t, i18n] = useTranslation();
    const Lang = localStorage.getItem('lng')
    useEffect(() => {
        document.title = t('RecoverPassword');
    });
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };


    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState<{
        [k: number]: boolean;
    }>({});

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step: number) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };


    return (
        <div style={{ backgroundColor: '#F8F8F8', height: '100vh' }}>
            <Container component="main">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Card sx={{ marginTop: 10, }} style={{ width: '600px' }} >
                        <Grid sx={{ margin: 4 }} >
                            <CssBaseline />
                            <Typography component="h1" variant="h5" className={(Lang === "ar" ? classes.drtl : classes.dltr)}>
                                {t('RecoverPassword')}
                            </Typography>
                            <form>
                                <Grid spacing={2} sx={{ marginTop: 4 }} >
                                    <TextField
                                        type="email"
                                        required
                                        fullWidth
                                        id="email"
                                        label={t('Email')}
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid
                                    container
                                    sx={{ marginTop: 5 }}
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center">
                                    <Grid item xs={12} sm={4} >
                                        <Button
                                            style={{ backgroundColor: Color.purple }}
                                            fullWidth
                                            type="submit"
                                            variant="contained"
                                        >
                                            {t('RecoverPassword')}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                            <Grid container justifyContent="flex-end">
                                <Grid item style={{ marginRight: 'auto', marginLeft: 'auto' }}>
                                    <Button component={Link} to="/" style={{ textDecoration: 'underline' }}>
                                        {t('Login')}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
                </Box>
            </Container>
        </div>
    );
}