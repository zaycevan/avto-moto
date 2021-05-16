import moment from 'moment';
import 'moment/locale/ru';

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const formatCommentDate = (commentDate) => {
  moment.locale(`ru`);
  if (!(commentDate instanceof Date)) {
    return ``;
  }
  if (Math.abs(moment().diff(commentDate, `s`)) < 5) {
    return `сейчас`;
  }
  return moment(commentDate).fromNow();
};

