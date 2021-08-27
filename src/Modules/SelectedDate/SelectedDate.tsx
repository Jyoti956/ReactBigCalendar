import React from 'react';
import { useStyles } from './SelectedDate.Styles';
import Moment from 'react-moment';

export default function SelectedDate(props: any) {
  const classes = useStyles();

  return (
    <div className={classes.h3}>
      <u>Selected Date</u>: <Moment format='MMMM Do YYYY, h:mm:ss a'>{props.selectedDate}</Moment>
    </div>
  );
}
