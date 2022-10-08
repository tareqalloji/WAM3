import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useTranslation } from "react-i18next";
import { VerifyEmailStyle } from "./VerifyEmailStyle";
import CssBaseline from "@mui/material/CssBaseline";
import Card from "@mui/material/Card";
import { Link, useNavigate, Navigate } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { WarningSnackbar } from "../../../../component/Snackbar/snackbar";
import { APIInstance } from "../../../../Services/Api";

export default function VerfiyEmail() {
  const [message, setMessage] = useState<string>("");
  const [severity, setSeverity] = useState<string>("");
  const [openWarningSnakbar, setOpenWarningSnakbar] =
    React.useState<boolean>(false);
  const [openBackDropLoading, setOpenBackDropLoading] =
    React.useState<boolean>(false);
  const classes = VerifyEmailStyle();
  const [t, i18n] = useTranslation();
  const Lang = localStorage.getItem("lng");
  const navigate = useNavigate();
  useEffect(() => {
    document.title = t("RecoverPassword");
  });

  const [values, setValues] = useState({
    code: "",
  });

  function openWarningSnakbarHandler() {
    setOpenWarningSnakbar(true);
  }

  function closeWarningSnakbar() {
    setOpenWarningSnakbar(false);
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setOpenBackDropLoading(true);
    APIInstance.VerfiyEmail(values.code)
      .then((res) => {
        setOpenBackDropLoading(false);
        openWarningSnakbarHandler();
        localStorage.setItem("Auth", "true");
        navigate(`/Dashboard`);
      })
      .catch((res) => {
        setOpenBackDropLoading(false);
        openWarningSnakbarHandler();
        if (Lang === "ar") {
          setMessage("رمز التحقق خطأ");
        } else {
          setMessage("Invalid code");
        }
        setSeverity("error");
      });
  };

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackDropLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <WarningSnackbar
        openWarningSnakbar={openWarningSnakbar}
        closeWarningSnakbar={closeWarningSnakbar}
        severity={severity}
        message={message}
      />
      <div style={{ backgroundColor: "#F8F8F8", height: "100vh" }}>
        <Container component="main">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Card sx={{ marginTop: 10 }} style={{ width: "600px" }}>
              <Grid sx={{ margin: 4 }}>
                <CssBaseline />
                <Typography
                  component="h1"
                  variant="h5"
                  className={Lang === "ar" ? classes.drtl : classes.dltr}
                >
                  {t("EnterCode")}
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid spacing={2} sx={{ marginTop: 4 }}>
                    <TextField
                      type="text"
                      required
                      fullWidth
                      id="code"
                      label={t("code")}
                      name="code"
                      autoComplete="code"
                      onChange={(e) =>
                        setValues({ ...values, code: e.target.value })
                      }
                    />
                  </Grid>
                  <Grid
                    container
                    sx={{ marginTop: 5 }}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid item xs={12} sm={4}>
                      <Button
                        className={classes.btn}
                        fullWidth
                        type="submit"
                        variant="contained"
                      >
                        {t("Ok")}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Card>
          </Box>
        </Container>
      </div>
    </>
  );
}
