import React, { Component } from 'react';
import {Link } from 'react-router-dom';


function About () {

	return(
		<div className="aboutContainer">
			<div className='form'>
				<h1>Our Story</h1>

				<h4 id='ourStory'>
					Wedding Exchange is a platform that began in order to connect individuals that may be looking to purchase or sell pre-owned wedding goods. 
					We know that wedding expenses can add up very quickly, which is why Wedding Exchange provides a platform where newly married couples can recoup 
					some of their expenses by reselling items to other couples. <br />

					Many items are discarded or packed up in boxes and thrown in the attic after the reception, so why not post them on Wedding-Exchange? With the extra
					cash you can take the honeymoon you always wanted or put it towards a new house! 
				</h4>
				<br />
				<br />
				<br />


				<h2>Meet the team </h2>
				<div className="about">
					<div className="team">
						<img className="teamPhoto" src="https://media.licdn.com/dms/image/C5603AQGM69Q7e4DyLA/profile-displayphoto-shrink_800_800/0?e=1565222400&v=beta&t=n0ZGlJSBTPSnzmDqzT12x2a61dzQPLP1u30MQq72HDk"/><br />
						<h5><strong>Chief Executive Officer - </strong> Messinia Makropoulos </h5>
						<p>Messinia is an accomplished professional that began her career in the finance industry. After acheiving becoming AVP for the Midwest, she decided to pivot into the wedding industry and truly pursue her passion.</p>
					</div>

					<div className="team">
						<img className="teamPhoto" src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/53548536_10216533509983164_765724507745812480_n.jpg?_nc_cat=104&_nc_oc=AQlltZjEu514Gsm2JgmspD4D0kKHVx26memYv6_UU60aPDxuyTSGzUSJtpRbEHo2K6o&_nc_ht=scontent-ort2-2.xx&oh=22a29050006e4efcd711f2c0f61d4d58&oe=5D8B49FC" />
						<h5><strong>Chief Fruit Officer - </strong>Bill Bakopoulos </h5>
						<p>Bill completed his education at General Assembly in Chicago, where he studied to become a full-stack developer. Bill has extensive experince creating fruits arrays and instantiating cake classes. He also once made a full stack dogs application using python.</p>
					</div>
				</div>
			</div>
		</div>
		)
}





export default About;