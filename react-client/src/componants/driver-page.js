import React ,{Component} from "react"
import { NavLink } from "react-router-dom" 
import Header from './signoutHeader';

class Driver extends Component{
    constructor(props){
        super(props)
        this.state={
            phoneNumber:'',
            carPlateNumber:'',
            carType:'',
            carColor:'',
            value:'No',
            Role:'driver',
            destination:'',
            passengers:[]
        }
    }

    componentDidMount() {
      var username=localStorage.getItem('username');
      fetch('/passengerss?_username='+username)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          return this.setState({ passengers:data})
        }
          );
    }
    //
    onchange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    updatePay(){
      
      var username=localStorage.getItem('username');
      console.log(this.state.value,username)
      const body = {payment: this.state.value,username:username}
      fetch('http://127.0.0.1:9876/payment', {
      method: 'put',
      body: JSON.stringify(body),
      headers: {"Content-Type": "application/json"}
    }).then((response) => {
      return response.text();
    })
    }

    onclick(){
      var data =this.state
      var token = localStorage.getItem('token') 

      console.log(localStorage.getItem('token'))
      fetch('http://127.0.0.1:9876/driver', {
          method: 'put',
          body: JSON.stringify({data}),
          headers: {"Content-Type": "application/json",
      token: token }

        })
    }

    deleteR(){
      
      var username=localStorage.getItem('username');
      console.log('attempt to delete',username)
      const body = {username:username}
      fetch('http://127.0.0.1:9876/deleteRole', {
      method: 'put',
      body: JSON.stringify(body),
      headers: {"Content-Type": "application/json"}
    }).then((response) => {
      return response.text();
    })
    }

    handleChange(e) {
      this.setState({ value: e.target.value });
    }
    
    render(){
        return( 
            <div>
              <Header/>
              <div className="row">
					<div className="col-md-6">
              <div id="allDbox">
                <h2 id="Dh2">Your driver info here: </h2>
                <input type="number" name="phoneNumber" value={this.state.phoneNumbers} placeholder="Phone Number" className="form__input" onChange={this.onchange.bind(this)} />
                <input type="text" name="carPlateNumber" value={this.state.carPlateNumbers} placeholder="Car Plate Number" className="form__input" onChange={this.onchange.bind(this)} />
                <input type="text" name="carType" value={this.state.carTypes} placeholder="Car Type" className="form__input" onChange={this.onchange.bind(this)} />
                <input type="text" name="carColor" value={this.state.carColors} placeholder="Car Color" className="form__input" onChange={this.onchange.bind(this)} />
                <input type="text" name="destination" value={this.state.destination} placeholder="destination" className="form__input" onChange={this.onchange.bind(this)} />
                <div id="lbBox">
                <label id="lb">
                <label>
                Do you want passengers to pay:
                {/* <input type="text" name='payment' placeholder ="Yes/No" maxLength="3" value = {this.state.payment} onChange={this.onchange.bind(this)}/> */}
                <select onChange={this.handleChange.bind(this)}>
                  <option value='No'> No </option>
                  <option value='Yes' > Yes </option>
                  
                </select>
                </label>
                </label>
                <button type='button' onClick={this.updatePay.bind(this)} id='lbBtn'>confirm</button><br/>
                <label>
                  Do u wanna finish your the trip:
                <button type='button' onClick={this.deleteR.bind(this)}>cancel</button>
                </label>
                </div>
                <button onClick={this.onclick.bind(this)} className="btn" type="button">Open Registration</button>
                <p id='Pd'>When ever you're done ^^</p>
                <button onClick={this.deleteR.bind(this)} className="btn" type='button'>End Registration</button>
                </div>
               
                <div className = 'drivers' >
                <h1 className='listname'>Passengers: </h1>
                {
                  this.state.passengers.map((pass, i) => {
                    return (
                      <div className="driver" key={i}>
                      <h3>{pass.username}</h3>
                      </div>
                    );
                  })
                }
              </div>
           
					</div>
					<div className="col-md-6">
            {/* Map goes here */}
	  			</div>
			  	</div>
            </div>
        )
    }
}
export default Driver;