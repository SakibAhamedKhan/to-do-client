import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import DashboardNavbar from './DashboardNavbar';

const Profile = () => {
	const [user, loading, error] = useAuthState(auth);
	return (
		<div>
			<DashboardNavbar></DashboardNavbar>
			<div className='flex justify-center items-center mt-20'>
			<div class="card w-96 bg-slate-100 shadow-xl">
				<div class="card-body items-center text-center">
					<h2 className='text-2xl text-secondary font-semibold'>Profile</h2>
					<p>Name: {user.displayName}</p>
					<p>Email: {user.email}</p>
					<div class="card-actions mt-2">
						<button onClick={ () => signOut(auth)} class="btn">Logout</button>
					</div>
				</div>
			</div>
			</div>
		</div>
	);
};

export default Profile;