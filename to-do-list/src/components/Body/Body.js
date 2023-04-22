import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

import Context from '../../Context/Context';
import Model from '../Headers/AddingTask/Model';

function Body() {

    let { tasksList } = useContext(Context);


    return (
        <>
            <table className='table table-hover table-striped'>
                <thead>
                    <th>Check</th>
                    <th>Task</th>
                    <th>Status</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    {
                        tasksList.map(task => {
                            return (
                                <tr key={task.id}>
                                    <td>
                                        <input className='form-check-input' type="checkbox" name="status" id="" />
                                    </td>
                                    <td>{task.title}</td>
                                    <td>{task.status}</td>
                                    <td>
                                        <button type='button' data-bs-toggle="modal" data-bs-target="#staticBackdrop" className='btn'>
                                            <FaEdit />
                                        </button>
                                    </td>
                                    <td><button className='btn'><MdDelete /></button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Model title='Edit' message='Edit details' />
        </>
    )
}

export default Body