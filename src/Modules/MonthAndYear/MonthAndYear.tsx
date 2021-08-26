import React from 'react';
import { useStyles } from './MonthAndYear.Styles';
import moment from 'moment';

export default function MonthAndYear(props: any) {
  const classes = useStyles();
  const Months = moment.months();
  return (
    <div className={classes.monthdiv}>
      
        {Months[props.calendar.currentMonth]}-{props.calendar.currentYear}
      
    </div>
  );
}
