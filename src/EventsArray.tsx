import moment from "moment";

export const events = [
    {
      title: 'Event-1-Night-Out',
      date: moment().format('DD-MM-YYYY'),
      dynamic: false
    },

    {
      title: 'Event 2 - Meeting',
      date: moment()
        .startOf('day')
        .subtract(2, 'd')
        .add(2, 'h').toObject(),
      dynamic: false
    },

    {
      title: 'Event 3 - Cinema',
      date: moment()
        .startOf('day')
        .subtract(7, 'd')
        .add(18, 'h').toObject(),
      dynamic: false
    },

    {
      title: 'Event 4 - Theater',
      date: moment()
        .startOf('day')
        .subtract(16, 'd')
        .add(20, 'h').toObject(),
      dynamic: false
    },

    {
      title: 'Event 5 - Drinks',
      date: moment()
        .startOf('day')
        .subtract(2, 'd')
        .add(12, 'h').toObject(),
      dynamic: false
    },

    {
      title: 'Event 6 - Diving',
      date: moment()
        .startOf('day')
        .subtract(2, 'd')
        .add(13, 'h').toObject(),
      dynamic: false
    },

    {
      title: 'Event 7 - Tennis',
      date: moment()
        .startOf('day')
        .subtract(2, 'd')
        .add(14, 'h').toObject(),
      dynamic: false
    },

    {
      title: 'Event 8 - Swimmming',
      date: moment()
        .startOf('day')
        .subtract(2, 'd')
        .add(17, 'h').toObject(),
      dynamic: false
    },

    {
      title: 'Event 9 - Chilling',
      date: moment()
        .startOf('day')
        .subtract(2, 'd')
        .add(16, 'h').toObject(),
      dynamic: false
    },

    {
      title: 'Hello World',
      date: moment()
        .startOf('day')
        .add(5, 'h').toObject(),
      dynamic: false
    }
  ];