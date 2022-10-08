import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { APIInstance } from "../../../../Services/Api";
import { NotificationBtnStyle } from "./NotificationBtnStyle";

export default function NotificationBtn() {
  const classes = NotificationBtnStyle();
  const values = {
    message_unread: 0,
  };
  const [formValues, setFormValues] = useState(values);

  useEffect(() => {
    GetNotifications();
  }, []);

  function GetNotifications() {
    APIInstance.GetNotifications().then((response: any) => {
      setFormValues(response.data);
      console.log(response.data.message_unread);
    });
  }
  return (
    <Button color="secondary" component={Link} to="/Admin/Notifications">
      <Badge badgeContent={formValues.message_unread} color="warning">
        <NotificationsActiveIcon />
      </Badge>
    </Button>
  );
}
