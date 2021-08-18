import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      padding:'10px'
    },
    h3:{
        float:'right',
        marginRight:'5%',
        color:'blue'
    },
    btndiv:{
        float:'left',
        padding:'10px'
    },
    btn:{
        padding:'8px',
        color:'green',
        borderRadius:'5px',
        fontWeight:'bolder'
    },
    monthdiv:{
        textAlign:'center',
        color:'green',
        marginTop:'10px'
    },
    table: {
      minWidth: 1300,
      borderCollapse:'collapse'
    },
    tr:{
        borderStyle:'solid',
        borderColor:'black',
        borderWidth:'1px',
        borderCollapse:"collapse"
    },
    td:{
        padding:'50px',
        borderStyle:'solid',
        borderColor:'black',
        borderWidth:'1px',
        borderCollapse:'collapse'
    }
  }));