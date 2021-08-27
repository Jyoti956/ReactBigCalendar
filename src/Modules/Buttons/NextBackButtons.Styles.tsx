import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  btndiv: {
    float: 'left',
    padding: '10px',
    marginLeft: '8px'
  },
  btn: {
    padding: '8px',
    color: 'black',
    borderRadius: '5px',
    fontWeight: 'bolder',
    backgroundColor: '-webkit-linear-gradient(to right, #fc4d50, #ff9966)',
    background: 'linear-gradient(to right, #fd5053, #ff9966)'
  },
  todayBtn:{
    padding: '8px',
    color: 'black',
    borderRadius: '5px',
    fontWeight: 'bolder',
    backgroundColor: '-webkit-linear-gradient(to right, rgb(80, 143, 226), rgb(108, 205, 238)) !important',
    background: 'linear-gradient(to right, rgb(77, 146, 236), rgb(102, 198, 230)) !important'
  }
}));
