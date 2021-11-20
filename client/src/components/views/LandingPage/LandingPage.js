import React, { useEffect, useState } from 'react';
import { useInView } from "react-intersection-observer"
import { FaCode } from 'react-icons/fa';
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../Config';
import MainImage from './Sections/MainImage';
import GridCards from '../commons/GridCards';
import { Row } from 'antd';
function LandingPage() {
	const [Movies, setMovies] = useState([]);
	const [MainMovieImage, setMainMovieImage] = useState(null);
	const [CurrentPage, setCurrentPage] = useState(0);
	const [loading, setLoading] = useState(false);
	const [ref, inView] = useInView();
	
	const fetchMovies = (endpoint) => {
		fetch(endpoint)
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				setMovies([...Movies, ...response.results]);
				setMainMovieImage(MainMovieImage || response.results[0]);
				setCurrentPage(response.page+1)
			});
	}
	
	useEffect(() => {
		const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
		fetchMovies(endpoint);
	}, []);
	
	 useEffect(() => {
    	// 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
		if (inView && !loading) {
		  loadMoreItems();
		}
  	}, [inView, loading])
	
	const loadMoreItems = () => {
		const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${CurrentPage + 1}`;
		fetchMovies(endpoint);
	}
	return (
		<div style={{ width: '100%', margin: '0' }}>
			{/* Main Image */}
			{MainMovieImage && (
				<MainImage
					image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
					title={MainMovieImage.original_title}
					text={MainMovieImage.overview}
				/>
			)}
			<div style={{ width: '85%', margin: '1rem auto' }}>
				<h2>Movies by latest</h2>
				<hr />
				{/* Rovie Grid Cards */}
				<Row gutter={[40, 64]} justify="center" align="middle">
					{Movies &&
						Movies.map((movie, index) => (
							<React.Fragment key={index}>
								<GridCards
									landingPage
									image={ movie.poster_path ? `${IMAGE_BASE_URL}w500${movie.poster_path}` : null }
									movieId={movie.id}
									movieName={movie.original_title}
								/>
							</React.Fragment>
						))}
				</Row>
			</div>
			<div ref={ref} style={{ display: 'flex', justifyContent: 'center' }}>
			</div>
		</div>
	);
}

export default LandingPage;