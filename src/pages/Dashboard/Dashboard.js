import { async } from '@firebase/util';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import AllTask from './AllTask';
import DashboardNavbar from './DashboardNavbar';

const Dashboard = () => {
	const [open, setOpen] = useState(false);
	const [user, loading, error] = useAuthState(auth);
	const [refresh2, setRefresh2] = useState('');

	console.log(user);

	const handleSubmit = async(event) => {
		event.preventDefault();
		const taskName= event.target.taskName.value;
		const taskDetails= event.target.taskDetails.value;
		console.log(taskName, taskDetails);

		const doc = {
			email: user?.email,
			taskName,
			taskDetails,
			complete: false
		}
		fetch('http://localhost:5000/addTask', {
			method: 'POST',
			headers:{
				'content-type':'application/json'
			},
			body: JSON.stringify(doc)
		})
		.then(res => res.json())
		.then(data => {
			console.log(data);
			if(data){
				event.target.reset();
				setOpen(false);
				toast.success('Successfully Task Added');
				setRefresh2(new Date().getTime());
			}
		})
		
		
	}
	return (
		<div>
			<DashboardNavbar></DashboardNavbar>
			<h2 className='text-center text-2xl font-semibold  my-2 text-secondary'>Dashboard</h2>

			<div className='flex justify-center my-10'>
				<button onClick={() => setOpen(true)} className='btn text-white btn-wide'>Add Task</button>
			</div>

			<input type="checkbox" checked={open} id="my-modal-6" className="modal-toggle" />
			<div className="modal modal-bottom sm:modal-middle">
			<div className="modal-box">
				<h3 className="font-bold text-lg text-center">Add your Task</h3>
				
				<div className='flex justify-center'>
					<form onSubmit={handleSubmit}>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Task Name</span>
							</label>
							<input name='taskName' type="text" placeholder="task name" className="input input-bordered w-80"  required/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Details</span>
							</label>
							<textarea name='taskDetails' className="textarea textarea-bordered w-80" placeholder="detalis" required></textarea>
						</div>
						<div className="flex justify-center mt-5">
							<p onClick={ () => setOpen(false)}  className="btn mr-2 bg-red-500 hover:bg-red-600 text-white border-none">Cancel</p>
							<button type='submit' for="my-modal-6" className="btn bg-green-500 hover:bg-green-600 text-white border-none">Submit</button>
						</div>
					</form>
				</div>

				
				
			</div>
			</div>

			<AllTask refresh2={refresh2}></AllTask>
		</div>
	);
};

export default Dashboard;