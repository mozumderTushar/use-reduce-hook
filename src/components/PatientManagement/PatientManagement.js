import React, { useReducer, useRef } from 'react';
import { patientReducer, patientState } from '../../reducer/patientReducer';


const PatientManagement = () => {
    const nameRef = useRef();
    const [state, dispatch] = useReducer(patientReducer, patientState)
   const handleSubmit = e => {
       e.preventDefault();
       dispatch({
           type: 'ADD_PATIENT',
           name: nameRef.current.value,
           id: state.patients.length + 1
       })
       nameRef.current.value = '';
       console.log(nameRef.current.value);
   }
    return (
        <div>
            <h3>This is patient management: {state.patients.length}</h3>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text"/>
            </form>
            {
                state.patients.map(pt => <li
                    onClick={() => dispatch({type:'DELETE_PATIENT', id: pt.id})}
                 key={pt.id}>
                    {pt.name}
                    </li>)
            }
        </div>
    );
};

export default PatientManagement;