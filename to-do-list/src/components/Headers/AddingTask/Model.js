import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

function Model(props) {

    function handelSubmit() {

    }

    return (
        <div>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">{props.title}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={handelSubmit}>
                            <div className="modal-body">
                                <label className='form-label' htmlFor="task">{props.message}:</label><br />
                                <input type="text" className='form-control' name="task" id="task" /><br />
                                <div className='d-flex justify-content-end gap-2'>
                                    <div className='me-auto'>
                                        <select name="status" id="status" className='form-select' defaultValue={'incomplete'} >
                                            <option value="incomplete" >Incomplete</option>
                                            <option value="complete">Complete</option>
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