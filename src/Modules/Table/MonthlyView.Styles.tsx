import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  table: {
    minWidth: 1300,
    borderCollapse: 'collapse'
  },
  tr: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: '1px',
    borderCollapse: 'collapse',
    color: 'white',   
    backgroundColor: '-webkit-linear-gradient(to right, #fc4d50, #ff9966)',
    background: 'linear-gradient(to right, #fd5053, #ff9966)',
  },
  td: {
    padding: '50px',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: '1px',
    borderCollapse: 'collapse',
    fontWeight:'bold'
  },
  
}));
