import { makeStyles } from "@mui/styles";

export const NotificationsStyle = makeStyles({
  drtl: { direction: "rtl", textAlign: "center" },
  dltr: { direction: "ltr", textAlign: "center" },
  TypeRtl: { direction: "rtl" },
  TypeLtr: { direction: "ltr" },
  loadingContainer: {
    width: "100%",
    height: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  CircularProgress: {
    color: "#7750DD !important",
  },
});
