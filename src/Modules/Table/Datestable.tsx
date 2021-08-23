import React from 'react';
import { useStyles } from './DatesTable.Styles';
import { IDates } from '../Calender';

export default function Datestable(props: any) {
  const classes = useStyles();
  console.log(props.arrOfArrays,"************");
  
  const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return (
    <table className={classes.table}>
      <thead>
        <tr className={classes.tr}>
          {DAYS.map((day: string) => {
            return (
              <th key={day} className={classes.tr}>
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
                  <td key={index} className={classes.td} onClick={() => props.onSelectDate(day)}>
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
