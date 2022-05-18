import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
	const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
	const navigate = useNavigate();

	let errorElement;
	if(error){
		errorElement = <div><p className='text-red-500'>{error?.message}</p></div>
	}
	if(loading) {
		return <Loading></Loading>;
	}
	if(user){
		errorElement = '';
		navigate('/dashboard');
	}
	return (
		<div className='flex justify-center items-center h-screen'>
			<div className="card w-96 bg-slate-100 shadow-xl">
				<div className="card-body items-center text-center">
					<h2 className='text-2xl text-secondary font-semibold'>To-Do App</h2>
					<h2 className="card-title text-2xl mb-5">Sign In</h2>
					{
						errorElement
					}
					<div className="card-actions">
						<button onClick={ () => signInWithGoogle()} className="btn btn-outline">Continue With Google</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;