import { makeStyles } from "@mui/styles";

export const LayoutStyle = makeStyles({  
  btn: {
   boxShadow: 'none !important',
   backgroundColor: 'transparent !important',
    '&:hover': {
        backgroundColor: 'importants',
        borderColor: 'transparent',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: 'transparent !importants',
        borderColor: '#005cbf',
    },
    '&:focus': {
        boxShadow: 'none',
    },
  },
});
