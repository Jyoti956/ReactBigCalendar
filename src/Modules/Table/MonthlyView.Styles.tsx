import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 1300,
    borderCollapse: 'collapse'
  },
  tr: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: '1px',
    borderCollapse: 'collapse'
  },
  td: {
    padding: '50px',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: '1px',
    borderCollapse: 'collapse'
  }
}));
