import React, { useState, useEffect } from 'react';
import { useStyles } from './Calender.Styles';

interface IDates {
  year: number;
  month: number;
  date: number;
}

export default function Calender() {
  const { datesGenerator } = require('dates-generator');
  const classes = useStyles();
  const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dates, setDates] = useState([] as any);
  const [calendar, setCalendar] = useState({
    month: selectedDate.getMonth(),
    year: selectedDate.getFullYear(),
    nextMonth: selectedDate.getMonth() + 1,
    nextYear: selectedDate.getFullYear() + 1,
    previousMonth: selectedDate.getMonth() - 1,
    previousYear: selectedDate.getFullYear() - 1
  });
  const [color, setColor] = useState('');

  useEffect(() => {
    const body = {
      month: calendar.month,
      year: calendar.year,
      nextMonth: calendar.nextMonth,
      previousMonth: calendar.previousMonth,
      nextYear: calendar.nextYear,
      previousYear: calendar.previousYear
    };
    const { dates, nextMonth, nextYear, previousMonth, previousYear } = datesGenerator(body);

    setDates([...dates]);
    setCalendar({
      ...calendar,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear
    });
    console.log(dates, 'dates');
    console.log(calendar, 'calendar');
  }, []);

  const onSelectDate = (date: IDates) => {
    setSelectedDate(new Date(date.year, date.month, date.date));
    console.log(selectedDate);
    setColor('yellow');
  };

  const onClickNext = () => {
    const body = { month: calendar.nextMonth, year: calendar.nextYear };
    const { dates, nextMonth, nextYear, previousMonth, previousYear } = datesGenerator(body);

    setDates([...dates]);
    setCalendar({
      ...calendar,
      month: calendar.nextMonth,
      year: calendar.nextYear,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear
    });
  };

  const onClickPrevious = () => {
    const body = { month: calendar.previousMonth, year: calendar.previousYear };
    const { dates, nextMonth, nextYear, previousMonth, previousYear } = datesGenerator(body);

    setDates([...dates]);
    setCalendar({
      ...calendar,
      month: calendar.previousMonth,
      year: calendar.previousYear,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear
    });
  };

  return (
    <div className={classes.root}>
      <h3 className={classes.h3}>Selected Date: {selectedDate.toLocaleString()}</h3>
      <div className={classes.btndiv}>
        <button className={classes.btn} onClick={onClickPrevious}>
          Back
        </button>
        <button className={classes.btn} onClick={onClickNext}>
          Next
        </button>
      </div>
      <div className={classes.monthdiv}>
        <h2>
          {MONTHS[calendar.month]},{calendar.year}
        </h2>
      </div>
      <table className={classes.table}>
        <thead>
          <tr className={classes.tr}>
            {DAYS.map((day: string, index: number) => {
              return (
                <th key={index} className={classes.tr}>
                  {day}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {dates.length > 0 &&
            dates.map((week: any[]) => (
              <tr key={JSON.stringify(week[0])}>
                {week.map((day: IDates,index:number) => (
                  <td key={index} className={classes.td} onClick={() => onSelectDate(day)}>
                    {day.date}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
