import { makeStyles } from "@mui/styles";
import YourAmountImage from "../../../assets/Images/Dashboard1.png";
import InviteFriendsImage from "../../../assets/Images/Dashboard2.png";
import YourIncomeImage from "../../../assets/Images/Dashboard3.png";

export const DashboardStyle = makeStyles({
  drtl: { direction: "rtl", textAlign: "center" },
  dltr: { direction: "ltr", textAlign: "center" },
  TypeRtl: { direction: "rtl" },
  TypeLtr: { direction: "ltr" },
  YourAmount: {
    backgroundImage: `url(${YourAmountImage})`,
    backgroundRepeat: "round",
    height: "72vh",
  },
  InviteFriends: {
    backgroundImage: `url(${InviteFriendsImage})`,
    backgroundRepeat: "round",
    height: "72vh",
  },

  YourIncome: {
    backgroundImage: `url(${YourIncomeImage})`,
    backgroundRepeat: "round",
    height: "72vh",
  },
  CardColor: {
    backgroundColor: "transparent !important",
    boxShadow: "none !important",
  },
  CardNumber: {
    textDecoration: "underline !important",
    textAlign: "center",
  },
});
