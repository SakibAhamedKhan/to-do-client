import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const AllTask = () => {
	const [user, loading, error] = useAuthState(auth);
	const [task, setTask] = useState([]);

	let tasks;
	let reverseTask;

	useEffect( () => {
		fetch(`http://localhost:5000/task/${user?.email}`)
		.then(res => res.json())
		.then(data => setTask(data));
	},[]);

	tasks = [...task];
	reverseTask = tasks.reverse();
	if(loading) {
		return <Loading></Loading>;
	}

	console.log(reverseTask);
	return (
		<div className='mt-20'>
			<h2 className='text-2xl text-center font-semibold text-primary'>All my Tasks</h2>
			<div>
				{
					reverseTask.map(task => <p key={task._id}>{task.taskName}</p>)
				}
			</div>
		</div>
	);
};

export default AllTask;