import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useTranslation } from "react-i18next";
import { RegisterByLinkStyle } from "./RegisterByLinkStyle";
import CssBaseline from "@mui/material/CssBaseline";
import Card from "@mui/material/Card";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate, useParams } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { WarningSnackbar } from "../../../../component/Snackbar/snackbar";
import { CountriesEn } from "../../../../Services/CountriesEn";
import { CountriesAr } from "../../../../Services/CountriesAr";

import axios from "axios";
export default function Register() {
  const [message, setMessage] = useState<string>("");
  const [severity, setSeverity] = useState<string>("");
  const [openWarningSnakbar, setOpenWarningSnakbar] =
    React.useState<boolean>(false);
  const [openBackDropLoading, setOpenBackDropLoading] =
    React.useState<boolean>(false);
  const classes = RegisterByLinkStyle();
  const Lang = localStorage.getItem("lng");
  const navigate = useNavigate();
  const [Countries, setCountry] = React.useState("");
  const [t, i18n] = useTranslation();
  const { id } = useParams();
  useEffect(() => {
    document.title = t("Register");
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
    setValues({ ...values, country: event.target.value });
  };

  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    country: "",
    password: "",
    password_confirmation: "",
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
    return axios
      .post(`https://wam3.tech/wam3/public/api/invite-register/${id}`, {
        first_name: values.first_name,
        last_name: values.last_name,
        phone: values.phone,
        email: values.email,
        country: values.country,
        password: values.password,
        password_confirmation: values.password_confirmation,
      })
      .then((res) => {
        if (res.data.token !== null && res.data.token !== undefined) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("type", "user");
          localStorage.setItem("Auth", "false");
          setOpenBackDropLoading(false);
          navigate(`/VerifyEmail`);
        }
      })
      .catch((error) => {
        if (
          error.response.data.message == "The email has already been taken."
        ) {
          if (Lang === "ar") {
            setMessage("???????????? ???????????????????? ?????????? ????????????");
          } else {
            setMessage("The email has already been taken");
          }
        } else if (
          error.response.data.message == "The phone has already been taken."
        ) {
          if (Lang === "ar") {
            setMessage("?????? ???????????? ?????????? ????????????");
          } else {
            setMessage("The phone has already been taken");
          }
        } else {
          if (Lang === "ar") {
            setMessage("???????? ?????? ???? ?????????? ????????????????");
          } else {
            setMessage("Incorrect Data");
          }
        }
        setSeverity("error");
        console.error(error);
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
            <Card sx={{ marginTop: 10 }}>
              <Grid sx={{ margin: 4 }}>
                <CssBaseline />
                <Typography
                  component="h1"
                  variant="h5"
                  className={Lang === "ar" ? classes.drtl : classes.dltr}
                >
                  {t("??WelcomeToOurWebsite")}
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2} sx={{ marginTop: 5 }}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="fname"
                        name="first_name"
                        variant="outlined"
                        required
                        fullWidth
                        id="first_name"
                        label={t("FirstName")}
                        autoFocus
                        onChange={(e) =>
                          setValues({ ...values, first_name: e.target.value })
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="last_name"
                        label={t("LastName")}
                        name="last_name"
                        autoComplete="lname"
                        onChange={(e) =>
                          setValues({ ...values, last_name: e.target.value })
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="phone"
                        label={t("PhoneNumber")}
                        name="phone"
                        autoComplete="PhoneNumber"
                        type="number"
                        onChange={(e) =>
                          setValues({ ...values, phone: e.target.value })
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="outlined-select-currency"
                        select
                        fullWidth
                        required
                        label={t("Country")}
                        value={Countries}
                        // onSelect={handleChange}
                        onChange={handleChange}
                      >
                        <MenuItem value="" disabled selected>
                          <em>select the value</em>
                        </MenuItem>
                        {Lang === "ar"
                          ? CountriesAr.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))
                          : CountriesEn.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        variant="outlined"
                        type="email"
                        required
                        fullWidth
                        id="Email"
                        label={t("Email")}
                        name="Email"
                        autoComplete="email"
                        onChange={(e) =>
                          setValues({ ...values, email: e.target.value })
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label={t("Password")}
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(e) =>
                          setValues({ ...values, password: e.target.value })
                        }
                        InputProps={{ inputProps: { min: 12 } }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password_confirmation"
                        label={t("ConfirmPassword")}
                        type="password"
                        id="ConfirmPassword"
                        autoComplete="current-password"
                        onChange={(e) =>
                          setValues({
                            ...values,
                            password_confirmation: e.target.value,
                          })
                        }
                        InputProps={{ inputProps: { min: 12 } }}
                      />
                    </Grid>
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
                        {t("Save")}
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid container justifyContent="flex-end">
                    <Grid
                      item
                      style={{ marginRight: "auto", marginLeft: "auto" }}
                    >
                      <Button
                        component={Link}
                        to="/"
                        style={{ textDecoration: "underline" }}
                      >
                        {t("AlreadyHaveAnAccount")}
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
