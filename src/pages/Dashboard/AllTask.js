import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import Task from './Task';

const AllTask = ({refresh2}) => {
	const [user, loading, error] = useAuthState(auth);
	const [task, setTask] = useState([]);
	const [refresh, setRefresh] = useState('');

	let tasks;
	let reverseTask;

	useEffect( () => {
		fetch(`http://localhost:5000/task/${user?.email}`)
		.then(res => res.json())
		.then(data => setTask(data));
	},[refresh, refresh2]);

	tasks = [...task];
	reverseTask = tasks.reverse();
	if(loading) {
		return <Loading></Loading>;
	}

	console.log(reverseTask);
	return (
		<div className='mt-20'>
			<h2 className='text-2xl text-center font-semibold text-primary mb-5'>All my Tasks</h2>
			<div className='overflow-x-auto mb-10'>
			<table className="table w-full ">
					<thead>
					<tr>
						<th></th>
						<th>Task Name</th>
						<th>Show Details</th>
						<th>Complete Task</th>
						<th>Delete Task</th>
					</tr>
					</thead>
					<tbody>
						{
							reverseTask.map((task, index) => <Task 
							key={task._id}
							task={task}
							index={index}
							setRefresh={setRefresh}
							></Task>)
						}
					</tbody>
				</table>
				
			</div>
		</div>
	);
};

export default AllTask;