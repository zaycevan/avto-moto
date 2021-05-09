import React from 'react';
import PageHeader from '../page-header/page-header';
import GeneralInfo from '../general-info/general-info';
import Tabs from '../tabs/tabs';
import PageFooter from '../page-footer/page-footer';

const MainScreen = () => {

  return (
    <>
      <PageHeader />
      <main className="page-main">
        <h1 className="visually-hidden">AVTO-MOTO</h1>
        <GeneralInfo />
        <Tabs />
      </main>
      <PageFooter />
    </>
  );
};

export default MainScreen;
