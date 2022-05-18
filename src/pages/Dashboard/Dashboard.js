import { async } from '@firebase/util';
import React, { useState } from 'react';
import DashboardNavbar from './DashboardNavbar';

const Dashboard = () => {
	const [open, setOpen] = useState(false);

	const handleSubmit = async(event) => {
		event.preventDefault();
		const taskName= event.target.taskName.value;
		const taskDetails= event.target.taskDetails.value;
		console.log(taskName, taskDetails);
		event.target.reset();
		setOpen(false)
		
	}
	return (
		<div>
			<DashboardNavbar></DashboardNavbar>
			<h2 className='text-center text-2xl font-semibold  my-2 text-secondary'>Dashboard</h2>

			<div className='flex justify-center my-10'>
				<button onClick={() => setOpen(true)} className='btn text-white btn-wide'>Add Task</button>
			</div>

			<input type="checkbox" checked={open} id="my-modal-6" class="modal-toggle" />
			<div class="modal modal-bottom sm:modal-middle">
			<div class="modal-box">
				<h3 class="font-bold text-lg text-center">Add your Task</h3>
				
				<div className='flex justify-center'>
					<form onSubmit={handleSubmit}>
						<div class="form-control">
							<label class="label">
								<span class="label-text">Task Name</span>
							</label>
							<input name='taskName' type="text" placeholder="task name" class="input input-bordered w-80"  required/>
						</div>
						<div class="form-control">
							<label class="label">
								<span class="label-text">Details</span>
							</label>
							<textarea name='taskDetails' class="textarea textarea-bordered w-80" placeholder="detalis" required></textarea>
						</div>
						<div class="flex justify-center mt-5">
							<button onClick={ () => setOpen(false)}  class="btn mr-2 bg-red-500 hover:bg-red-600 text-white border-none">Cancel</button>
							<button type='submit' for="my-modal-6" class="btn bg-green-500 hover:bg-green-600 text-white border-none">Submit</button>
						</div>
					</form>
				</div>


				
			</div>
			</div>


		</div>
	);
};

export default Dashboard;