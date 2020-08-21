import React from 'react';
import NavigationBar from './NavigationBar';

function Layout(props) {
  return (
    <React.Fragment>
      <NavigationBar />
      {props.children}
    </React.Fragment>
  )
}

export default Layout;