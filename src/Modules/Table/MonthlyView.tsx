import React, { useState } from 'react';
import { useStyles } from './MonthlyView.Styles';
import { IDates } from '../Calender';

export default function MonthlyView(props: any) {
  const classes = useStyles();
  const Days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return (
    <table className={classes.table}>
      <thead>
        <tr className={classes.tr}>
          {Days.map((day: string) => {
            return (
              <th key={day} className={classes.tr} style={day === 'SUN' ? { color: 'red' } : { color: 'black' }}>
                {day}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {props.arrOfArrays.length > 0 &&
          props.arrOfArrays.map((week: any[]) => (
            <tr key={JSON.stringify(week[0])}>
              {week.map((day: IDates, index: number) => {
                return (
                  <td
                    key={index}
                    className={classes.td}
                    onClick={() => props.onSelectDate(day)}
                    style={
                      day.months !== props.calendar.currentMonth
                        ? { backgroundColor: 'lightgreen' }
                        : { backgroundColor: 'white' }
                    }>
                    {day.date}
                  </td>
                );
              })}
            </tr>
          ))}
      </tbody>
    </table>
  );
}
