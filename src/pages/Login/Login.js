import React from 'react';

const Login = () => {
	return (
		<div className='flex justify-center items-center h-screen bg-slate-200'>
			<div class="card w-96 bg-base-100 shadow-xl">
				<div class="card-body items-center text-center">
					<h2 className='text-2xl text-secondary font-semibold'>To-Do App</h2>
					<h2 class="card-title text-2xl mb-5">Sign In</h2>
					<div class="card-actions">
						<button class="btn btn-outline">Continue With Google</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;