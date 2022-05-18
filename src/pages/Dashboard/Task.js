import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Task = ({task , index, setRefresh}) => {
	const [user, loading, error] = useAuthState(auth);
	const {_id,taskName, taskDetails, complete} = task;
	const  [show, setShow] = useState(false);


	const handleComplete = () => {
		fetch(`http://localhost:5000/task/${user?.email}`,{
			method:'PUT',
			headers:{
				'content-type':'application/json'
			},
			body: JSON.stringify({id:_id})
		})
		.then(res => res.json())
		.then(data => {
			console.log(data);
			if(data) {
				setRefresh(new Date().getTime());
				toast.success(`Task: (${taskName}) is successfully Completed`);
			}
		})
	}
	const handleDelete = () => {
		fetch(`http://localhost:5000/task/${user?.email}`,{
			method:'DELETE',
			headers:{
				'content-type':'application/json'
			},
			body: JSON.stringify({id:_id})
		})
		.then(res => res.json())
		.then(data => {
			console.log(data);
			if(data){
				setRefresh(new Date().getTime());
				toast.warning(`Task: (${taskName}) is successfully Deleted`);
			}
		})
	}
	return (
		
					<tr>
						<th>{index+1}</th>
						<td className={`${complete? 'line-through' :''}`}>{taskName}</td>
						<td><button onClick={() => setShow(true)} className='btn btn-sm text-white'>show</button></td>
						<td>{
							complete?
							<button disabled onClick={handleComplete} className='btn btn-sm btn-success text-white'>Done</button>
							:
							<button onClick={handleComplete} className='btn btn-sm btn-success text-white'>Completed</button>
							}</td>
						<td><button onClick={handleDelete} className='btn btn-sm btn-accent text-white'>Delete</button></td>




						<input checked={show} type="checkbox" id="my-modal-3" className="modal-toggle" />
						<div className="modal">
						<div className="modal-box relative">
							<button onClick={() => setShow(false)} for="my-modal-3" className="btn btn-sm btn-circle text-white absolute right-2 top-2">✕</button>
							<h3 className="text-lg font-bold">{taskName}</h3>
							<div className='overflow-y-auto h-60 my-2'>
								<p className="py-4">{taskDetails}</p>
							</div>
						</div>
						</div>





					</tr>
		
	);
};

export default Task;