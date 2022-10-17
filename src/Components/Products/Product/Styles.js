
import { yellow } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
    maxHeight: '100%',
    marginTop: '75px',


  },
  media: {
    height: '200px',

  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },


}));