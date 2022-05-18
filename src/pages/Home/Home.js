import React from 'react';
import { useNavigate } from 'react-router-dom';
import banner1 from '../../assets/images/banner1.jpg';

const Home = () => {
	const navigate = useNavigate();
	return (
		<div>
			<div className="hero min-h-screen" style={{backgroundImage: `url(${banner1})`}}>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-md">
						<h1 className="mb-5 text-4xl font-bold text-white">Welcome To Do App</h1>
						<p className="mb-5 text-white font-semibold">To Do App help you to make a list of your work need to be done or in process.</p>
						<button onClick={ () => {
							navigate('/login');
						}} className="btn btn-primary font-semibold text-white ">Get Started</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;