import React, { SyntheticEvent } from 'react'

interface Props {
    onChargingSessionCreate: (e: SyntheticEvent) =>void;
    name: string;
}


const AddChargingSession = ({onChargingSessionCreate, name}: Props) => {

    return <form onSubmit = {onChargingSessionCreate}>
        <input readOnly = {true}  hidden={true} value = {name}/>
        <button type ="submit">Add</button>

    </form>
  
};

export default AddChargingSession