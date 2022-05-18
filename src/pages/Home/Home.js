import React from 'react';
import { useNavigate } from 'react-router-dom';
import banner1 from '../../assets/images/banner1.jpg';

const Home = () => {
	const navigate = useNavigate();
	return (
		<div>
			<div class="hero min-h-screen" style={{backgroundImage: `url(${banner1})`}}>
				<div class="hero-overlay bg-opacity-60"></div>
				<div class="hero-content text-center text-neutral-content">
					<div class="max-w-md">
						<h1 class="mb-5 text-4xl font-bold text-white">Welcome To Do App</h1>
						<p class="mb-5 text-white font-semibold">To Do App help you to make a list of your work need to be done or in process.</p>
						<button onClick={ () => {
							navigate('/login');
						}} class="btn btn-primary font-semibold text-white ">Get Started</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;