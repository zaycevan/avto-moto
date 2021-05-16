import PropTypes from 'prop-types';
import {reviewPropType} from "../review/review.prop-type";

export const reviewsPropType = PropTypes.arrayOf(
    reviewPropType
);

export const reviewPopupShownPropType = PropTypes.bool.isRequired;

export const onReviewEnterClickPropType = PropTypes.func.isRequired;

