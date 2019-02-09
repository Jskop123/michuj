import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'

import Header from './components/Header/Header'

import Home from './pages/Home/Home'
import Offert from './pages/Offert/Offert'
import Portfolio from './pages/Portfolio/Portfolio'

class App extends Component {
  state = {
    showMenu: false
  }
  showMenuHandler = () => this.setState({ showMenu: !this.state.showMenu })
  render() {
    return (
      <div className="App">
        <Header burger={ this.showMenuHandler } active={ this.state.showMenu }/>
        <Switch>
          <Route path='/oferta' component={ Offert } ></Route>
          <Route path='/portfolio' component={ Portfolio } ></Route>
          <Route path='/kontakt' component={ Portfolio } ></Route>
          <Route path='/' component={ Home } ></Route>
        </Switch>
      </div>
    )
  }
}
export default App;