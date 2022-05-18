import React, { useState } from 'react';

const Task = ({task , index}) => {
	const {taskName, taskDetails, complete} = task;
	const  [show, setShow] = useState(false);
	return (
		
					<tr>
						<th>{index+1}</th>
						<td>{taskName}</td>
						<td><button onClick={() => setShow(true)} className='btn btn-sm text-white'>show</button></td>
						<td><button className='btn btn-sm btn-success text-white'>Completed</button></td>
						<td><button className='btn btn-sm btn-accent text-white'>Delete</button></td>




						<input checked={show} type="checkbox" id="my-modal-3" class="modal-toggle" />
						<div class="modal">
						<div class="modal-box relative">
							<button onClick={() => setShow(false)} for="my-modal-3" class="btn btn-sm btn-circle text-white absolute right-2 top-2">✕</button>
							<h3 class="text-lg font-bold">{taskName}</h3>
							<div className='overflow-y-auto h-60 my-2'>
								<p class="py-4">{taskDetails}</p>
							</div>
						</div>
						</div>





					</tr>
		
	);
};

export default Task;