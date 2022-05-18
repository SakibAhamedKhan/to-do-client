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
			<div className="card w-96 bg-slate-100 shadow-xl">
				<div className="card-body items-center text-center">
					<h2 className='text-2xl text-secondary font-semibold'>Profile</h2>
					<div className="avatar my-5">
						<div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
							<img src={user?.photoURL} />
						</div>
					</div>
					<p>Name: {user.displayName}</p>
					<p>Email: {user.email}</p>
					<div className="card-actions mt-2">
						<button onClick={ () => signOut(auth)} className="btn text-white">Logout</button>
					</div>
				</div>
			</div>
			</div>
		</div>
	);
};

export default Profile;