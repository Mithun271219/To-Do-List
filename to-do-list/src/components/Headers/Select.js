import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

function Select() {
    return (
        <div>
            <select defaultValue={'all'} className='form-select' name="status" id="">
                <option value="all" >All</option>
                <option value="incomplete" >Incomplete</option>
                <option value="complete">Complete</option>
            </select>
        </div>
    )
}

export default Select