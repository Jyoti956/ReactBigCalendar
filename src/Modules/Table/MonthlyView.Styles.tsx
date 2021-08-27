import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  table: {
    minWidth: 1300,
    borderCollapse: 'collapse',
    marginLeft: '14px'
  },
  tr: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: '1px',
    borderCollapse: 'collapse',
    backgroundColor: '-webkit-linear-gradient(to right, rgb(80, 143, 226), rgb(108, 205, 238)) !important',
    background: 'linear-gradient(to right, rgb(77, 146, 236), rgb(102, 198, 230)) !important'
  },
  td: {
    padding: '70px',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: '1px',
    borderCollapse: 'collapse',
    fontWeight: 'bold',
    fontSize:'15px'
  }
}));
