import React, { Component } from 'react';
import DefaultLayout from './defaultLayout';
import NavBar from '../elements/navBar';

const MainLayout = ({component: Component, ...rest}) => {
    return (
      <DefaultLayout {...rest} component={matchProps => (
        <div className="Main">
            <NavBar/>
            <Component {...matchProps} />
        </div>
      )} />
    );
  }

  export default MainLayout;