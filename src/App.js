import './App.css';
import React, { Component } from 'react';
import { Route, Switch }    from 'react-router-dom';
import { Link }             from 'react-router-dom'
import Account              from './Account';
import CreateListing        from './CreateListing';
import Login                from './Login';
import Register             from './Register';
import Home                 from './Home';
import Header               from './Header';
import Listings             from './Listings';
import Footer               from './Footer';
import AccountEdit          from './AccountEdit';
import ListingIndex         from './ListingIndex';



class App extends Component {
  constructor(){;
    super()
    this.state = ({
      loggedIn: false,
      userRegistered: false
    })
  }

  logUserInGlobal = () => {
    this.setState({
      loggedIn: true
    })
  }

  logUserOutGlobal = () => {
    this.setState({
      loggedIn: false
    })
  }



          


//<Route path="/home" render={ (props) => <Home {...props} /> } />
//<Route path="/login" component={ Login } />

  render(){
    console.log('HERE IS GLOBAL STATE: ', this.state);
    return (
      <main>
        <Header />
        <Switch>

          <Route path='/home' component={ Home } />
          <Route path='/login' render={ (props) => <Login {...props} logInGlobal={this.logUserInGlobal} logoutGlobal={this.logUserOutGlobal} /> } />
          <Route path='/register' render={ (props) => <Register {...props} setRegisterGlobal={this.setRegisterGlobal} /> } />
          <Route path="/account" render={ (props) => <Account {...props} globalState={this.state} /> } />
          <Route path="/index" component={ ListingIndex } />

        </Switch>
        <Footer />
      </main>

        )
  }
}

export default App;
