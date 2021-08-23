import React from 'react';
import { useStyles } from './SelectedDate.Styles';
import Moment from 'react-moment';

export default function SelectedDate(props: any) {
  const classes = useStyles();

  return (
    <div>
      <h3 className={classes.h3}>
        Selected Date: <Moment format='MMMM Do YYYY, h:mm:ss a'>{props.selectedDate}</Moment>
      </h3>
    </div>
  );
}
