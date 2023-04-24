import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

import Context from '../../Context/Context';
import Model from '../Headers/AddingTask/Model';

function Body(props) {

    let { tasksList, setTasksList, setEditTask, editTask } = useContext(Context);

    function handeChange(e) {
        let id = e.target.id
        let taskWithIndex = tasksList[id];
        taskWithIndex.status === 'completed' ? taskWithIndex.status = 'incomplete' : taskWithIndex.status = 'completed'
        setTasksList([...tasksList])
    }

    function handelEdit(id) {
        setEditTask(tasksList[id])
    }

    function handelDelete(id) {
        tasksList.splice(id, 1)
        setTasksList([...tasksList])
    }

    return (
        <>
            <table className='table table-hover table-striped'>
                <thead >
                    <tr>
                        <th>Check</th>
                        <th>Task</th>
                        <th>Status</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasksList.map((task, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <input className='form-check-input' defaultChecked={task.status === 'completed'} type="checkbox" onChange={handeChange} name="status" id={index} />
                                    </td>
                                    <td>{task.task}</td>
                                    <td>{task.status}</td>
                                    <td>
                                        <button type='button' onClick={() => handelEdit(index)} data-bs-toggle="modal" data-bs-target="#edit" className='btn' id={index}>
                                            <FaEdit />
                                        </button>
                                    </td>
                                    <td><button className='btn' onClick={() => handelDelete(index)} id={index}><span><MdDelete /></span></button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Model id='edit' title='Edit' message='Edit details' />
        </>
    )
}

export default Body