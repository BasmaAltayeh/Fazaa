import React, {Component} from 'react';
import {Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import CurrentLocation from './currentLocation';
import {NavLink} from "react-router-dom"
import Header from './signoutHeader';


// the class tha'll hold our map
class MapContainer extends React.Component {
constructor(props){
super(props)
  this.state = {
      // if it's already showing one
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      role2:'passenger',
      token: this.props.getTokenFromParent()
  }

  // console.log();

}

//Callback for the currentLocation to access the token
getTokenFromMap() {
  return this.state.token;
}


//update the passenger role on click
updateP(){
  var username = localStorage.getItem('username')
  console.log(username,'hey',localStorage,this.state.role2)
  const body = {role2: this.state.role2,username:username};
  fetch('http://127.0.0.1:9876/passenger', {
          method: 'put',
          body: JSON.stringify(body),
          headers: {"Content-Type": "application/json"}
      }).then((response) => {
          return response.text();
  })
}
  // the function that'll run when you click on the marker
  onMarkerClick(props, marker, e){
      this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
      });

    }       // when you close the marker's infoWindow
            onClose (props){
                if(this.state.showingInfoWindow) {
                    this.setState({
                        showingInfoWindow: false,
                        activeMarker:null
                    })
                }
            }
   
    render() {
        return (
            <div>
                <Header/>
                <div id='btnBox'>
                  
                    <NavLink to="/driver">
                    <button className='mapB' type="button" >DRIVER</button>
                    </NavLink>
                    <NavLink to="/passenger">
                    <button className='mapB' type ="button" onClick={this.updateP.bind(this)}>PASSENGER</button>
                    </NavLink>
                    {/* <NavLink to='/homepage'>
                    <button id='signout' onClick={this.SignOut.bind(this)} type ="button" >Sign Out</button>
                    </NavLink> */}
                </div>

          {/* //  the current location is the geolocatoin functionality */}
          <CurrentLocation
              getTokenFromParentMap={this.getTokenFromMap.bind(this)}
              centerAroundCurrentLocation
              google={this.props.google}
          >

      {/* a custom placed marker that shows the device's current location  */}
      <Marker onClick={this.onMarkerClick.bind(this)} name={'current location'} />
      {/* a custom marker that'll show Amman */}
      <Marker
              onClick={this.onMarkerClick.bind(this)} name={'you dare ?...YOU DARE !!!'}
              position={{
                  lat: 31.9454,
                  lng: 35.9284
              }}
          />
          {/* a custom marker that'll show Irbid */}
      <Marker
              onClick={this.onMarkerClick.bind(this)} 
              name={"Irbid"}
              position ={{
                    lat: 32.5570 ,
                    lng : 35.8479
              }}
          />
      {/* Calling the build in InfoWindow component */}
      <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
        onClose={this.onClose}
      >
        <div>
        {/* this's what appears in the InfoWindo dialoge box */}
          <h1>{this.state.selectedPlace.name}</h1>
        </div>
      </InfoWindow>
    </CurrentLocation>
          </div>
  );
}
}
      

export default GoogleApiWrapper({
  apiKey : "AIzaSyCSd2zDkggemBpMYEeEvEo_E4RlQDxd6Po"
})(MapContainer)