import * as React from 'react';
import { Snackbar, Typography } from "@mui/material";
// import { useNativeWarningSnackBarStyles, useWarningSnackBarStyles } from "./warning-snackbar.style";
import MuiAlert, { AlertProps } from '@mui/material/Alert';

export function WarningSnackbar(props: any) {

    const {
        openWarningSnakbar,
        severity,
        closeWarningSnakbar,
        message,
    } = props;


    const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
        props,
        ref,
    ) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    
    return (
        <Snackbar
        style={{zIndex:999999}}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center'
            }}
            open={openWarningSnakbar}
            autoHideDuration={6000}
            onClose={closeWarningSnakbar}
            
        >
            <Alert
                severity={severity}
            >
                <Typography>
                    {message}
                </Typography>
            </Alert>
        </Snackbar>
    );
}
