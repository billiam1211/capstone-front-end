import './App.css';
import React, { Component } from 'react';
import { Route, Switch }    from 'react-router-dom';
import Account              from './Account';
import CreateListing        from './CreateListing';
import Login                from './Login';
import Register             from './Register';
import Home                 from './Home';
import Header               from './Header';
import Footer               from './Footer';
import AccountEdit          from './AccountEdit';
import ListingIndex         from './ListingIndex';
import Guest                from './Guest';
import ContactSeller        from './ContactSeller';
import About                from './About';



class App extends Component {
  constructor(){;
    super()
    this.state = ({
      email: '',
      userId: '',
      listings: [],
      loggedIn: false,
      listingThatBuyerWants: []
    })
  }



  setUserInfo = (userData) => {
    this.setState({
      email: userData.email,
      userId: userData.userId,
      loggedIn: userData.loggedIn,
      registered: userData.registered,
      listings: userData.listings || []
    })
  }
          


//<Route path="/home" render={ (props) => <Home {...props} /> } />
//<Route path="/login" component={ Login } />

  render(){
    // console.log('HERE IS GLOBAL STATE: ', this.state);
    return (
      <main>
        <Header />
        <Switch>
          <Route path='/home' component={ Home } />
          <Route path='/login' render={ (props) => <Login {...props} globalState={this.state} setUserInfo={this.setUserInfo} /> } />
          <Route path='/register' render={ (props) => <Register {...props}  setUserInfo={this.setUserInfo}/> } />
          <Route path="/account" render={ (props) => <Account {...props} globalState={this.state} setUserInfo={this.setUserInfo} /> } />
          <Route path="/accountEdit" render={ (props) => <AccountEdit {...props} globalState={this.state} setUserInfo={this.setUserInfo} /> } />
          <Route path="/index" render={ (props) => <ListingIndex {...props} globalState={this.state} /> } setUserInfo={this.setUserInfo}/>
          <Route path="/CreateListing" render={ (props) => <CreateListing {...props} globalState={this.state} setUserInfo={this.setUserInfo} /> } />
          <Route path="/guest" component={Guest} />
          <Route path="/contactSeller" render={ (props) => <ContactSeller {...props} globalState={this.state} setUserInfo={this.setUserInfo} /> } />
          <Route path="/about" component={ About } />
          <Route path='/' component={ Home } />
        </Switch>
        <Footer />
      </main>

        )
  }
}

export default App;
