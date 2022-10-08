import React, { useEffect, useState } from "react";
import Layout from "../Layouts/Layout";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { NotificationsStyle } from "./NotificationsStyle";
import { useTranslation } from "react-i18next";
import CircularProgress from "@mui/material/CircularProgress";
import { APIInstance } from "../../../Services/Api";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import moment from "moment";

interface the_messages {
  id: string;
  text: string;
  created_at: string;
}

interface notification {
  the_messages: the_messages[];
}
export default function Notifications() {
  const [Notifications, setNotifications] = React.useState<the_messages[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [t, i18n] = useTranslation();
  const Lang = localStorage.getItem("lng");
  const classes = NotificationsStyle();

  useEffect(() => {
    document.title = t("Notifications");
    GetNotifications();
    setLoading(true);
  }, []);

  function GetNotifications() {
    APIInstance.GetNotifications().then((response) => {
      setNotifications(response.data.the_messages);
      setLoading(false);
      console.log(response.data.the_messages);
    });
  }

  return (
    <Layout>
      <Container component="main">
        <Grid item xs={12} sm={12}>
          <Card>
            <Grid sx={{ margin: 4 }}>
              <CssBaseline />
              <Typography
                component="h1"
                variant="h5"
                className={Lang === "ar" ? classes.drtl : classes.dltr}
              >
                {t("NotificationsList")}
              </Typography>
            </Grid>
            <form>
              <Grid sx={{ marginTop: 5 }}>
                {Notifications.map((notification) => {
                  return (
                    <Grid item xs={12} md={6}>
                      <CardActionArea component="a" href="#">
                        <Card sx={{ display: "flex" }}>
                          <CardContent sx={{ flex: 1 }}>
                            <Typography component="h2" variant="h5">
                              {notification.text}
                            </Typography>
                            <Typography variant="subtitle1" color="primary">
                              {moment(new Date( Date.parse(notification.created_at))).fromNow()}
                            </Typography>
                          </CardContent>
                        </Card>
                      </CardActionArea>
                    </Grid>
                  );
                })}
              </Grid>
            </form>
          </Card>
          {loading ? (
            <div className={classes.loadingContainer}>
              <CircularProgress
                className={classes.CircularProgress}
                style={{ width: "50px", height: "50px" }}
              />
            </div>
          ) : null}
        </Grid>
      </Container>
    </Layout>
  );
}
