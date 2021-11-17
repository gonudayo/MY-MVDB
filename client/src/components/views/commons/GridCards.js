import React from 'react';
import { Col } from 'antd';

function GridCards(props) {
	if(props.landingPage) {
		return (
			<Col xxl={2} xl={4} lg={6} md={8} sm={10} xs={12}>
				<div style={{ width: '189.0px', height: '283.5px', position: 'relative'}}>
					<a href={`/movie/${props.movieId}`}>
						<img style={{ width: '100%', height: 'auto', padding: '10px' }}src={props.image} alt={props.movieName} />
					</a>
				</div>
			</Col>
		);
	} else {
		return (
			<Col xxl={2} xl={4} lg={6} md={8} sm={10} xs={12}>
				<div style={{ position: 'relative' }}>
					<img style={{ width: '190px', height: 'auto', padding: '10px' }}src={props.image} alt={props.charactermame} />
				</div>
			</Col>
		);
	}
}

export default GridCards;
