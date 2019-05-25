import React from "react";
import {Redirect} from "react-router-dom"
import Header from './Header';



class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: '',
			errorMessage: '',
			token:"",
			authenticated: false
		};
	}

	getPlaces(){
		fetch('http://127.0.0.1:9876/places', {
		  method: 'get',
		  headers: {"Content-Type": "application/json"}
		  // {"x-access-token": token }
		}).then((response) => {
		  return response.json();
		}).then((body) => {
		  console.log(body);
		  if(body.error){
			return this.setState({errorMessage: body.error})
		  };
		  return "hi"
		})
	  }
	  usernameChange(e){
		  this.setState({
			username:e.target.value
		  })
		
	  }
	  passChange(e){
		this.setState({
			password:e.target.value
		  })
	  }
	
	login() {
		console.log(this.state.username,"hi")
		//Call API to sign in with username and password
		const body = {username: this.state.username, password: this.state.password};
		fetch('/login', {
		  method: 'post',
		  body: JSON.stringify(body),
		  headers: {"Content-Type": "application/json"}
		}).then((response) => {
		  return response.json();
		}).then((body) => {
		  if(body.error){
			if(body.error === 'Please sign in'){
			  return this.setState({ username: '', password: '', errorMessage: ''})  
			} else {
			  return this.setState({errorMessage: body.error})
			}
		  }
		  //Got token
		  const token = body.token;
			const username=body.username
			
			this.props.callBack(token);
			// Token --> Map --> Header, --> Access reaqct 

		  localStorage.setItem('token', token);
		  localStorage.setItem('username', username);
		  this.setState({username: '', password: '', errorMessage: ''});
		});
	  }
		isAuthenticated(){
			const token =	localStorage.getItem('token')
			if(token && token.length > 10){
				return true
				}else {
					return false
				}
			}
	render() {
		const auth =this.isAuthenticated();
	
		return (
			<div>
				<Header/>
				{auth ? <Redirect to={{pathname:'/main-map'}} /> :(
					<div className="sign">
					<div className="user">
						<h1 className="hdr">Login (◕‿◕)♡</h1>
						<form className="form">
							<div className="form__group">
								<input type="text" placeholder="FullName" className="form__input" value={this.state.username} onChange = {this.usernameChange.bind(this)}/>
							</div>
					
							<div className="form__group">
								<input type="password" placeholder="Password" className="form__input" value={this.state.password} onChange={this.passChange.bind(this)}/>
							</div>
					
							<button className="btn" type="button" onClick={() => this.login()}>
								Login
							</button>
					
						</form>
					</div>
					</div>

				)} 
			</div>
		)
	}
}

export default Login;
