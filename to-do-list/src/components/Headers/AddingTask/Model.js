import React, { useState, useContext } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import { useFormik } from 'formik'

import Context from '../../../Context/Context';

function Model(props) {

    let { tasksList, setTasksList, editTask, setEditTask } = useContext(Context);

    let initialValues = {
        task: '',
        status: "incomplete",
        time: ''
    }

    let { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,

        onSubmit: async (values, clear) => {
            values.time = new Date().toLocaleString();
            setTasksList([...tasksList, values])
            clear.resetForm();
        }
    })


    // function Edit() {
    //     let { tasksList, setTasksList } = useContext(Context);
    //     let { initialValues, setInitialValues } = useContext({
    //         task: '',
    //         status: "incomplete",
    //         time: ''
    //     });

    //     let { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    //         initialValues,

    //         onSubmit: (values, clear) => {
    //             clear.resetForm();
    //         }
    //     })
    // }

    // props.id === 'add' ? Add() : Edit();

    return (
        <div >
            <div className="modal fade" id={props.id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">{props.title}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <label className='form-label' htmlFor="task">{props.message}:</label><br />
                                <input type="text" value={values.task} onChange={handleChange} className='form-control' name="task" id="task" /><br />
                                <div className='d-flex justify-content-end gap-2'>
                                    <div className='me-auto'>
                                        <select onChange={handleChange} value={values.status} name="status" id="status" className='form-select' >
                                            <option value="incomplete" name="status">Incomplete</option>
                                            <option value="completed" name="status">Complete</option>
                                        </select>
                                    </div>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Model