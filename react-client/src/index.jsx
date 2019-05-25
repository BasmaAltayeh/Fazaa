import React, {Component} from "react";
import ReactDOM from "react-dom";
// import { browserHistory} from "react-router";
import { BrowserRouter  , Route, Switch  } from "react-router-dom"



import Header from './componants/Header';
import HomePage from './componants/HomePage';
import SignUp from './componants/SignUp';
import Login from './componants/Login';
import {unregister} from './componants/Interceptor'
import Map from "./componants/map";
import Driver from "./componants/driver-page"
import About from "./componants/about"
import Passenger from "./componants/Passenger"

class App extends Component {
 
  constructor(props){
   super(props)
   this.state={
    whatPageToShow: 'Homepage',
    errorMessage: '',
    token: null
   };
  }
   // somefunction = () => {

  // }

  loginCallBack(data) {
      this.setState({
          token: data
        });
      // console.log('Gettttting tooooookkkeeen: ' + data);
  }

  getToken(){
    return this.state.token;
  }
 
  // loginCallBack(data ="dada")
  render(){
    return (
      <div>
        <div>
          
              <Route exact path="/" component={HomePage} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/homepage" component={HomePage} />
              {/* // <Route path="/login" component={Login} />
              // <Route path="/main-map" component={map}  /> */}
              {/* <Route path="/login" component={Login} /> */}
              <Route exact path="/login" render={
                () => <Login
                    callBack={this.loginCallBack.bind(this)} />
                
              } />
              {/* <Route path="/main-map" component={map} /> */}
              <Route exact path="/main-map" render={
                () => <Map
                    getTokenFromParent={this.getToken.bind(this)} />
                
              } />
<<<<<<< HEAD
              <Route path="/about" component={About}/>
              <Route path="/driver" component={Driver} />
              <Route path="/passenger" component={Passenger} />

=======
              <Route exact path="/about" component={About}/>
              <Route exact path="/driver" component={Driver} />
>>>>>>> 43d606b41e30789306a1cd9b6e23bfddac368b07
        </div>
      </div>
      

      

      // <BrowserRouter history={browserHistory}>
      //   <Route path={"/homepage"} Component={HomePage} />
      //   <Route path={"/signup"} Component={SignUp}  />
      // </BrowserRouter>
    //   <div className="App">
    //   <Header/>
    //   <HomePage />
    //   {/* <SignUp /> */}
    //   {/* <Login/> */}
    //   {/* <Map /> */}
    //   <footer className="App-footer" />
    // </div>
    );
  }
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'));