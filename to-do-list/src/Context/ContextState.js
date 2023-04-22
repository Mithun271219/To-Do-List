import { useState } from "react";

import Context from "./Context";

function ContextState(props) {

    const [tasksList, setTasksList] = useState([{ id: 1, title: 'reading', stamp: '21/12/1232 03:23:54 pm' }, { id: 2, title: 'reading', stamp: '21/12/1232 03:23:54 pm' }]);

    return (
        <Context.Provider value={{ tasksList, setTasksList }}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextState