import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';


import './custom.css'
import { Consulta } from './components/Consulta';
import Registro from './components/Registro';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/Registro' component={Registro} />
        <Route path='/Consulta' component={Consulta} />
      </Layout>
    );
  }
}
