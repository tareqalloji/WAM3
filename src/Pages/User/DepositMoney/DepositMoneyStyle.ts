import { makeStyles } from "@mui/styles";

export const DepositMoneyStyle = makeStyles({
  drtl: { direction: "rtl", textAlign: "center" },
  dltr: { direction: "ltr", textAlign: "center" },
  TypeRtl: { direction: "rtl" },
  TypeLtr: { direction: "ltr" },
  PreviewImage: { width: "800px", height: "400px" },
  labelbtn: {
    background:
      "linear-gradient(0deg, rgba(93,89,125,1) 27%, rgba(186,177,249,1) 100%)",
    fontWeight: 500,
    fontSize: "0.875rem",
    lineHeight: "1.75",
    letterSpacing: "0.02857em",
    textTransform: "uppercase",
    minWidth: "64px",
    padding: "6px 16px",
    borderRadius: "4px",
    display: "inline-flex",
    color: "#fff",
    cursor: "pointer",
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    boxShadow:
      "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
  },
  btn: {
    background:
      "linear-gradient(0deg, rgba(93,89,125,1) 27%, rgba(186,177,249,1) 100%)",
  },
});
