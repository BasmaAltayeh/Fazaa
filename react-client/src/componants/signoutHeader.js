import React ,{Component} from "react"
import { NavLink } from "react-router-dom" 

// import {link, Switch, Route, BrowserRouter} from 'react-router-dom';
class Header extends Component {
 
    SignOut(){
        localStorage.clear();
    }
 
    render(){
    return(
    <div>
      <ul>
          <li>
            {/* <link to='/'>Home</link> */}
           {/* <a className="active" href="/">Home</a> */}
           <NavLink to="/" >Home</NavLink>
          </li>
          <li>
            {/* <link to='/SignUp'>SignUp</link> */}
            {/* <a href="/SignUp">SignUp</a> */}
            <NavLink to="/homepage" onClick={this.SignOut.bind(this)} >Sign Out</NavLink>
          </li>
      
    </ul>
  </div>
    )
  }
}

export default Header;