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
    fontWeight: 3
  };
  const style2 = {
    backgroundColor: 'rgb(108, 205, 238)',
    color: 'white',
    borderRadius:'90%'
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
          props.arrOfArrays.map((week: any[], x: number) => (
            <tr key={x}>
              {week.map((day: IDates, y: number) => {
                return (
                  <td
                    key={y}
                    className={classes.td}
                    onClick={() => props.onSelectDate(day)}
                    style={
                      day.months !== props.calendar.currentMonth
                        ? style1
                        : day.date === props.selectedDate.date()
                        ? style2
                        : day.date === props.arrOfArrays[x][0].date
                        ? { color: 'red' }
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
