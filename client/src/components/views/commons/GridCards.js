import React from 'react';
import { Col } from 'antd';

function GridCards(props) {
	if(props.landingPage) {
		return (
			<Col xxl={6} xl={8} lg={10} md={12} sm={16} xs={24}>
				<div style={{ width: '346px', height: '519px', position: 'relative', padding: '10px'}}>
					<a href={`/movie/${props.movieId}`}>
						<img style={{ width: '100%', height: 'auto'}}src={props.image} alt={props.movieName} />
					</a>
				</div>
			</Col>
		);
	} else {
		return (
			<Col xxl={6} xl={8} lg={10} md={12} sm={16} xs={24}>
				<div style={{ width: '346px', position: 'relative', padding: '10px' }}>
					<img style={{ width: '100%', height: 'auto' }}src={props.image} alt={props.charactermame} />
				</div>
			</Col>
		);
	}
}

export default GridCards;
