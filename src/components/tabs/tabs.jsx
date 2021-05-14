import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Characteristics from '../characteristics/characteristics';
import Reviews from '../reviews/reviews';
import Contacts from '../contacts/contacts';
import {TabIdentifier} from '../../const';
import {ActionCreator} from '../../store/action';

const Tabs = (props) => {
  const {
    activeTab,
    onTabButtonClick,
  } = props;

  const renderTabContent = (tab) => {
    switch (tab) {
      case TabIdentifier.CHARACTERISTICS:
        return <Characteristics />;
      case TabIdentifier.REVIEWS:
        return <Reviews />;
      case TabIdentifier.CONTACTS:
        return <Contacts />;
    }
    return <Characteristics />;
  };

  const handleTabButtonClick = (evt) => {
    evt.preventDefault();
    const tabId = evt.target.dataset.id;

    if (tabId !== activeTab) {
      onTabButtonClick(tabId);
    }
  };

  return (
    <section className="tabs">
      <ul className="tabs__list">
        {Object.values(TabIdentifier).map((item) => (
          <li key={item} className="tabs__item">
            <button
              className={`tabs__item-button button
                ${item === activeTab ? `active` : ``}`}
              data-id={item}
              onClick={handleTabButtonClick}>
              {item}
            </button>
          </li>
        ))}
      </ul>
      <div className="tabs__content">
        {renderTabContent(activeTab)}
      </div>
    </section>
  );
};

Tabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeTab: state.activeTab,
});

const mapDispatchToProps = (dispatch) => ({
  onTabButtonClick(activeTab) {
    dispatch(ActionCreator.changeActiveTab(activeTab));
  },
});

export {Tabs};
export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
