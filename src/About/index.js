import React, { Component } from 'react';
import {Link } from 'react-router-dom';


function About () {

	return(
		<div className='form'>
			<h1>Meet the team </h1>
	
			<div className="about">
				

				<div className="team">
					<img className="teamPhoto" src="https://media.licdn.com/dms/image/C5603AQGM69Q7e4DyLA/profile-displayphoto-shrink_800_800/0?e=1565222400&v=beta&t=n0ZGlJSBTPSnzmDqzT12x2a61dzQPLP1u30MQq72HDk"/><br />
					<h5><strong>Chief Executive Officer - </strong> Messinia Makropoulos </h5>
					<p>Messinia is an accomplished professional that began her career in the finance industry. After acheiving becoming AVP for the Midwest, she decided to pivot into the wedding industry and truly pursue her passion.</p>
				</div>

				<div className="team">
					<img className="teamPhoto" src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/33464614_10214415494234094_6348304693935996928_n.jpg?_nc_cat=103&_nc_oc=AQlKIIfjrYkmcjurbSp4-1Ngo7UxuWA5ntE7kPs-tFV44eJu6H7NCzySs9aIaTdwfC0&_nc_ht=scontent-lga3-1.xx&oh=db905344e49c075b3069fafaf3158fdc&oe=5D5334D8" />
					<h5><strong>Chief Fruit Officer - </strong>Bill Bakopoulos </h5>
					<p>Bill completed his education at General Assembly in Chicago, where he studied to become a full-stack developer. 
					At GA, he began building websites as part of the cirriculum and built what is now Wedding Exchange for his Capstone 
					project in 2019. Since Wedding Exchange hit the interweb, it has become the premier platform for prospective newlyweds 
					to buy and sell their wedding goods. </p>
				</div>
			</div>
		</div>
		)
}





export default About;