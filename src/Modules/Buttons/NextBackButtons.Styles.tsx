import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  btndiv: {
    float: 'left',
    padding: '10px'
  },
  btn: {
    padding: '8px',
    color: 'black',
    borderRadius: '5px',
    fontWeight: 'bolder',
    backgroundColor: '-webkit-linear-gradient(to right, rgb(80, 143, 226), rgb(108, 205, 238)) !important',
    background: 'linear-gradient(to right, rgb(77, 146, 236), rgb(102, 198, 230)) !important'
  }
}));
