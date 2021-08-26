import React from 'react';
import { useStyles } from './MonthlyView.Styles';
import { IDates } from '../Calender';

export default function MonthlyView(props: any) {
  const classes = useStyles();
  const Days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  console.log(props.selectedDate, 'selectedDate in monthlyview');

  const style1 = {
    backgroundColor: 'lightgrey',
    cursor: 'not-allowed',
    fontWeight:3,
  };
  const style2 = {
    backgroundColor: 'rgb(108, 205, 238)',
    color:'red'
  };

  return (
    <table className={classes.table}>
      <thead>
        <tr className={classes.tr}>
          {Days.map((day: string) => {
            return (
              <th
                key={day}
                className={classes.tr}
                style={day === 'SUN' ? { color: 'red', fontWeight: 'bolder' } : { color: 'black' }}>
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
                        ? style1
                        : day.date === props.selectedDate.date()
                        ? style2
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
