import { useState } from "react";

import Context from "./Context";

function ContextState(props) {

    const [tasksList, setTasksList] = useState([
        { task: 'reading', status: 'completed', time: '4/23/2023, 10:56:47 PM' },
        { task: 'swiming', status: 'incomplete', time: '4/23/2023, 10:56:47 PM' },
        { task: 'class', status: 'completed', time: '4/23/2023, 10:56:47 PM' },
        { task: 'sports', status: 'incomplete', time: '4/23/2023, 10:56:47 PM' },
    ]);

    let [editTask, setEditTask] = useState()


    return (
        <Context.Provider value={{ tasksList, setTasksList, editTask, setEditTask }}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextState