import { makeStyles } from "@mui/styles";

export const DepositMoneyStyle = makeStyles({
  drtl: { direction: "rtl", textAlign: "center" },
  dltr: { direction: "ltr", textAlign: "center" },
  TypeRtl: { direction: "rtl" },
  TypeLtr: { direction: "ltr" },
  PreviewImage: { width: "800px", height: "400px" },
  labelbtn: {
    backgroundColor: "rgb(119, 80, 221)",
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
  },
});
