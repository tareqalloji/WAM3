import React, { useEffect, useState } from "react";
import Layout from "../Layouts/Layout";
import { useTranslation } from "react-i18next";
import { EditAboutStyle } from "./EditAboutStyle";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { WarningSnackbar } from "../../../component/Snackbar/snackbar";
import { APIInstance } from "../../../Services/Api";
import InputAdornment from "@mui/material/InputAdornment";

export default function About() {
  const [message, setMessage] = useState<string>("");
  const [severity, setSeverity] = useState<string>("");
  const [openWarningSnakbar, setOpenWarningSnakbar] =
    React.useState<boolean>(false);
  const [openBackDropLoading, setOpenBackDropLoading] =
    React.useState<boolean>(false);
  const classes = EditAboutStyle();
  const [t, i18n] = useTranslation();
  const Lang = localStorage.getItem("lng");
  useEffect(() => {
    document.title = t("AboutWebsite");
    GetWebsiteInfo();
  }, []);

  let data = {
    about_us: "",
    phone_number: "",
    email: "",
    bonus_value: "",
    number_of_invites: "",
    website_wallet: "",
    percentage_of_income: "",
  };
  const [formData, setFormData] = useState(data);

  const [values, setValues] = useState({
    about_us: "",
    phone_number: "",
    email: "",
    bonus_value: "",
    number_of_invites: "",
    website_wallet: "",
    percentage_of_income: "",
  });

  const GetWebsiteInfo = () => {
    // setOpenBackDropLoading(true)
    APIInstance.GetWebsiteInfo()
      .then((response) => {
        data = {
          about_us: response.data[0].about_us,
          phone_number: response.data[0].phone_number,
          email: response.data[0].email,
          bonus_value: response.data[0].bonus_value,
          number_of_invites: response.data[0].number_of_invites,
          website_wallet: response.data[0].website_wallet,
          percentage_of_income: response.data[0].percentage_of_income,
        };
        setOpenBackDropLoading(false);
      })
      .then(() => {
        setFormData(data);
      });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setOpenBackDropLoading(true);
    APIInstance.UpdateWebsiteInfo(
      values.about_us,
      values.phone_number,
      values.email,
      values.bonus_value,
      values.number_of_invites,
      values.website_wallet,
      values.percentage_of_income
    ).then((res: any) => {
      console.log(res);
      setOpenBackDropLoading(false);
      openWarningSnakbarHandler();
      if (Lang === "ar") {
        setMessage("تم التعديل بنجاح");
      } else {
        setMessage("Edit Done Successfully");
      }
      setSeverity("success");
    });
  };
  function openWarningSnakbarHandler() {
    setOpenWarningSnakbar(true);
  }

  function closeWarningSnakbar() {
    setOpenWarningSnakbar(false);
  }
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
      <Layout>
        <Container component="main">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Card>
              <form onSubmit={handleSubmit}>
                <Grid sx={{ margin: 4 }}>
                  <CssBaseline />
                  <Typography
                    component="h1"
                    variant="h5"
                    className={Lang === "ar" ? classes.drtl : classes.dltr}
                  >
                    {t("AboutWebsite")}
                  </Typography>
                  <Grid
                    container
                    spacing={1}
                    sx={{ marginTop: 5 }}
                    className={
                      Lang === "ar" ? classes.TypeRtl : classes.TypeLtr
                    }
                  >
                    <Grid item xs={6} sm={6}>
                      <Typography component="h5" variant="h5">
                        {t("UsersNumberForBonus")}:
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <TextField
                        type="number"
                        name="number_of_invites"
                        variant="outlined"
                        fullWidth
                        autoFocus
                        value={
                          values.number_of_invites !== ""
                            ? values.number_of_invites
                            : formData.number_of_invites
                        }
                        onChange={(e) =>
                          setValues({
                            ...values,
                            number_of_invites: e.target.value,
                          })
                        }
                      />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <Typography component="h5" variant="h5">
                        {t("BonusValue")}:
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <TextField
                        type="number"
                        name="bonus_value"
                        variant="outlined"
                        InputProps={{
                          inputProps: { min: 0, max: 100 },
                          startAdornment: (
                            <InputAdornment position="start">
                              <strong>%</strong>
                            </InputAdornment>
                          ),
                        }}
                        fullWidth
                        autoFocus
                        value={
                          values.bonus_value !== ""
                            ? values.bonus_value
                            : formData.bonus_value
                        }
                        onChange={(e) =>
                          setValues({ ...values, bonus_value: e.target.value })
                        }
                      />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <Typography component="h5" variant="h5">
                        {t("PercentageOfIncome")}:
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <TextField
                        type="number"
                        name="bonus_value"
                        variant="outlined"
                        InputProps={{
                          inputProps: { max: 100 },
                          startAdornment: (
                            <InputAdornment position="start">
                              <strong>%</strong>
                            </InputAdornment>
                          ),
                        }}
                        fullWidth
                        autoFocus
                        value={
                          values.percentage_of_income !== ""
                            ? values.percentage_of_income
                            : formData.percentage_of_income
                        }
                        onChange={(e) =>
                          setValues({ ...values, percentage_of_income: e.target.value })
                        }
                      />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <Typography component="h5" variant="h5">
                        {t("website_wallet")}:
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <TextField
                        type="text"
                        name="website_wallet"
                        variant="outlined"
                        fullWidth
                        autoFocus
                        value={
                          values.website_wallet !== ""
                            ? values.website_wallet
                            : formData.website_wallet
                        }
                        onChange={(e) =>
                          setValues({
                            ...values,
                            website_wallet: e.target.value,
                          })
                        }
                      />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <Typography component="h5" variant="h5">
                        {t("Email")}:
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <TextField
                        type="email"
                        name="email"
                        variant="outlined"
                        fullWidth
                        autoFocus
                        value={
                          values.email !== "" ? values.email : formData.email
                        }
                        onChange={(e) =>
                          setValues({ ...values, email: e.target.value })
                        }
                      />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <Typography component="h5" variant="h5">
                        {t("PhoneNumber")}:
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <TextField
                        type="number"
                        name="PhoneNumber"
                        variant="outlined"
                        defaultValue={t("PhoneNumber")}
                        fullWidth
                        value={
                          values.phone_number !== ""
                            ? values.phone_number
                            : formData.phone_number
                        }
                        onChange={(e) =>
                          setValues({ ...values, phone_number: e.target.value })
                        }
                      />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <Typography component="h5" variant="h5">
                        {t("About")}:
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <TextField
                        fullWidth
                        id="outlined-multiline-flexible"
                        multiline
                        maxRows={20}
                        value={
                          values.about_us !== ""
                            ? values.about_us
                            : formData.about_us
                        }
                        onChange={(e) =>
                          setValues({ ...values, about_us: e.target.value })
                        }
                      />
                    </Grid>
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
                      className={Lang === "ar" ? classes.drtl : classes.dltr}
                      sx={{ marginBottom: 1.5 }}
                      style={{
                        background:
                          "linear-gradient(0deg, rgba(93,89,125,1) 27%, rgba(186,177,249,1) 100%)",
                      }}
                      fullWidth
                      type="submit"
                      variant="contained"
                    >
                      {t("SaveChanges")}
                      &nbsp;
                      <CheckCircleIcon />
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Card>
          </Box>
        </Container>
      </Layout>
    </>
  );
}
