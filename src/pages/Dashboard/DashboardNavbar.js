import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const DashboardNavbar = () => {
	const [user, loading, error] = useAuthState(auth);
	const menuItem = <>
				<li className='lg:shadow-md rounded-lg mr-2'><Link to='/profile' className='text-xl font-semibold'>{user.displayName}</Link></li>
				<li className='lg:shadow-md rounded-lg mr-2'><button  onClick={() => signOut(auth)} className='text-xl font-semibold'>Logout</button></li>
	</>
	return (
		<div class="navbar bg-base-100">
		<div class="navbar-start">
			<div class="dropdown">
			<label tabindex="0" class="btn btn-ghost lg:hidden">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
			</label>
			<ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
				{
					menuItem
				}
			</ul>
			</div>
			<Link to='/dashboard' class="btn btn-ghost normal-case text-xl hidden lg:flex shadow-md rounded-lg mr-2">To Do App</Link>
		</div>
		<div class="navbar-end hidden lg:flex">
			<ul class="menu menu-horizontal p-0">
				{
					menuItem
				}
			</ul>
		</div>
		<div className='navbar-end lg:hidden'>
		<Link to='/dashboard' class="btn btn-ghost normal-case text-xl lg:hidden shadow-md rounded-lg mr-2">To Do App</Link>
		</div>
		</div>
	);
};

export default DashboardNavbar;