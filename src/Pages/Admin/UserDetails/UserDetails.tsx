import React, { useEffect, useState } from "react";
import Layout from "../Layouts/Layout";
import { useTranslation } from "react-i18next";
import { UserDetailsStyle } from "./UserDetailsStyle";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Card from "@mui/material/Card";
import { useParams, useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";

export default function UserDetails() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = UserDetailsStyle();
  const [t, i18n] = useTranslation();
  const Lang = localStorage.getItem("lng");
  const { id } = useParams();
  const navigate = useNavigate();
  const values = {
    user_details: [
      {
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        country: "",
        invite_link: "",
      },
    ],
    user_invites: 0,
    deposit_amount: 0,
  };
  const [formValues, setFormValues] = useState(values);

  useEffect(() => {
    document.title = t("UserDetails");
    GetUserdetails(id);
  }, []);

  function GetUserdetails(id: any) {
    return axios
      .get(`https://wam3.tech/wam3/public/api/get-user-details/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setFormValues(response.data);
        console.log(response);
      });
  }

  function DeleteUser(id: any) {
    return axios
      .get(`https://wam3.tech/wam3/public/api/admin-delete-user/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setFormValues(response.data);
        navigate("/");
      });
  }

  return (
    <Layout>
      <Container component="main">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={10} style={{ margin: "auto" }}>
              <Card>
                <Grid sx={{ margin: 4 }}>
                  <CssBaseline />
                  <Typography
                    component="h1"
                    variant="h5"
                    className={Lang === "ar" ? classes.drtl : classes.dltr}
                  >
                    {t("UserDetails")}
                  </Typography>
                  <form>
                    <Grid
                      container
                      spacing={2}
                      sx={{ marginTop: 5 }}
                      className={
                        Lang === "ar" ? classes.TypeRtl : classes.TypeLtr
                      }
                    >
                      <Grid item xs={6} sm={6}>
                        <Typography component="h5" variant="h5">
                          {t("FirstName")}:
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={6}>
                        <Typography variant="subtitle1">
                          {formValues.user_details[0].first_name}
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={6}>
                        <Typography component="h5" variant="h5">
                          {t("LastName")}:
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={6}>
                        <Typography variant="subtitle1">
                          {formValues.user_details[0].last_name}
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={6}>
                        <Typography component="h5" variant="h5">
                          {t("PhoneNumber")}:
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={6}>
                        <Typography variant="subtitle1">
                          {formValues.user_details[0].phone}
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={6}>
                        <Typography component="h5" variant="h5">
                          {t("Country")}:
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={6}>
                        <Typography variant="subtitle1">
                          {formValues.user_details[0].country}{" "}
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={6}>
                        <Typography component="h5" variant="h5">
                          {t("Email")}:
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={6}>
                        <Typography variant="subtitle1">
                          {formValues.user_details[0].email}
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={6}>
                        <Typography component="h5" variant="h5">
                          {t("WalletLink")}:
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={6}>
                        <Typography variant="subtitle1">
                          {formValues.user_details[0].invite_link == null
                            ? t("NoneFound")
                            : formValues.user_details[0].invite_link}
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={6}>
                        <Typography component="h5" variant="h5">
                          {t("TotalAmount")}:
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={6}>
                        <Typography variant="subtitle1">
                          {formValues.deposit_amount}
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={6}>
                        <Typography component="h5" variant="h5">
                          {t("UserInvitationsNumber")}:
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={6}>
                        <Typography variant="subtitle1">
                          {formValues.user_invites}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        style={{ margin: "auto", textAlign: "center" }}
                      >
                        <Button
                          className={classes.btn}
                          variant="contained"
                          color="error"
                          onClick={handleClickOpen}
                        >
                          {t("DeleteUser")}
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          className={Lang === "ar" ? classes.TypeRtl : classes.TypeLtr}
        >
          {t("DeleteUser")}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {t("ConfirmDeleteMessage")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            style={{ backgroundColor: "#757575" }}
            onClick={handleClose}
          >
            {t("Cancel")}
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              DeleteUser(id);
            }}
          >
            {t("Delete")}
          </Button>
        </DialogActions>
      </Dialog>
    </Layout>
  );
}
