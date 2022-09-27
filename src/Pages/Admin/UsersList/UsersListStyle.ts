import { makeStyles } from "@mui/styles";

export const UsersListStyle = makeStyles({
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
  btn: {
    background:
      "linear-gradient(0deg, rgba(93,89,125,1) 27%, rgba(186,177,249,1) 100%)",
  },
});
