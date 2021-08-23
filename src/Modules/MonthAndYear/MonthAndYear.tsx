import React from 'react';
import { useStyles } from './MonthAndYear.Styles';
import moment from 'moment';

export default function MonthAndYear(props: any) {
  const classes = useStyles();
  const MONTHS = moment.monthsShort();
  return (
    <div className={classes.monthdiv}>
      <h2>
        {MONTHS[props.calendar.currentMonth]}-{props.calendar.currentYear}
      </h2>
    </div>
  );
}
