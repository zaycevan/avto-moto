import PropTypes from 'prop-types';

export const reviewPropType = PropTypes.shape({
  id: PropTypes.string,
  userName: PropTypes.string,
  advantages: PropTypes.string,
  disadvantages: PropTypes.string,
  comment: PropTypes.string,
  rating: PropTypes.string,
  date: PropTypes.instanceOf(Date),
});
