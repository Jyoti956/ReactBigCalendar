import React from 'react';
import { useStyles } from './NextBackButtons.Styles';

export default function NextBackButtons(props: any) {
  const classes = useStyles();

  return (
    <div className={classes.btndiv}>
      <button className={classes.todayBtn} onClick={props.onClickToday}>
        Today
      </button>
      <button className={classes.btn} onClick={props.onClickBack}>
        Back
      </button>
      <button className={classes.btn} onClick={props.onClickNext}>
        Next
      </button>
    </div>
  );
}
