import React, { Component } from 'react';
import Header from './Header';

class HomePage extends Component {
	render() {
		return (
			<div className="gallary">
				<Header/>
				<img id="mainImg" src="https://i.ibb.co/N6WGHVb/header-2.png" alt="mainbackground" />
				<div className="row">
					<div className="col-md-6">
						<img
							id="firstImg"
							src="https://cdn-images-1.medium.com/max/1600/1*pBXdKxuvv5h-zBTioDE1PQ.jpeg"
							alt="traffic"
						/>
					</div>
					<div className="col-md-6">
						<p id="firstP">
							With عالطريق we will have less traffic; why? you might ask<br />
							its because we encourage people to come together and <br /> join eachother in the same ride.<br />
							a cherry on top is the result of less pollution.
						</p>
					</div>
				</div>

				<div className="row">
					<div className="col-md-6">
						<p id="secP">
							Meet new people make new friends (^‿^) <br />
							have fun going to work with عالطريق! <br />
							we encourage connection and cooperation, <br />
							which makes the whole experience worth a shot :D<br />
						</p>
					</div>
					<div className="col-md-6">
						<img
							id="secImg"
							src="https://hohoride.net/blog/wp-content/uploads/2017/09/download.jpg"
							alt="traffic"
						/>
					</div>
				</div>

				<div className="row">
					<div className="col-md-6">
						<img
							id="triImg"
							src="https://www.imoney.my/articles/wp-content/uploads/2018/11/SaveMoneyForCollegeOrForRetirement_1.jpg"
							alt="traffic"
						/>
					</div>
					<div className="col-md-6">
						<p id="triP">
							In addition to all that we are saving you money! <br />
							the cost of being a user with عالطريق is close to nothing <br />
							what are you waiting for? <br />
							sign up now! :D
						</p>
					</div>
				</div>
				<div id='footer'>
				<p id='rights'> &copy; 2019 Project GreenField</p>
				<p id='contact'>Contact us @ <br /> 07-9578-3727 <br/ > 404_team@gmail.com </p>
				<img id="footerLogo" src="https://i.ibb.co/QKXPhKw/footer-logos.png" alt="logos" />
				</div>
			</div>
		);
 }
}

export default HomePage;
