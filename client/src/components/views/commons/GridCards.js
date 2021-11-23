import React from 'react';
import { Col } from 'antd';

function GridCards(props) {
	if(props.landingPage) {
		return (
			<Col xxl={6} xl={8} lg={10} md={12} sm={16} xs={24}>
				<div style={{ width: '341px', height: '512px', position: 'relative' }}>
					<a href={`/movie/${props.movieId}`}>
						<img style={{ width: '100%', height: 'auto'}}src={props.image} title={props.movieName} />
						<div className="name" style={{ 'text-align': 'center', 'font-weight': '700'}}>{props.movieName}</div>
					</a>
				</div>
			</Col>
		);
	} else {
		return (
			<Col xxl={6} xl={8} lg={10} md={12} sm={16} xs={24}>
				<div style={{ width: '341px', height: '512px', position: 'relative' }}>
					<img style={{ width: '100%', height: 'auto' }} src={props.image != null ? props.image : 'https://thisistest.run.goorm.io/noImage.png' } title={props.characterName} />
					<div className="name" style={{ 'text-align': 'center', 'font-weight': '700'}}>{props.characterName}</div>
				</div>
			</Col>
		);
	}
}

export default GridCards;
