import React from 'react';
import { Col } from 'antd';

function GridCards(props) {
	if(props.landingPage) {
		return (
			<Col xxl={3} xl={4} lg={6} md={8} sm={10} xs={12}>
				<div style={{ width: '189.0px', height: '283.5px', position: 'relative', padding: '10px'}}>
					<a href={`/movie/${props.movieId}`}>
						<img style={{ width: '100%', height: 'auto'}}src={props.image} alt={props.movieName} />
					</a>
				</div>
			</Col>
		);
	} else {
		return (
			<Col xxl={3} xl={4} lg={6} md={8} sm={10} xs={12}>
				<div style={{ width: '190px', position: 'relative', padding: '10px' }}>
					<img style={{ width: '100%', height: 'auto' }}src={props.image} alt={props.charactermame} />
				</div>
			</Col>
		);
	}
}

export default GridCards;
