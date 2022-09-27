import { makeStyles } from "@mui/styles";

export const DepositsListStyle = makeStyles({
  ProcessImage: { width: "400", height: "200px" },
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
  Accept: {
    backgroundColor: "#09ad95  !important",
  },
  Reject: {
    backgroundColor: "#e82646  !important",
  },
});
