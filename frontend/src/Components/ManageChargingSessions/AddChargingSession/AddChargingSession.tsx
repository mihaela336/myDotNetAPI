import React, { SyntheticEvent } from 'react'

interface Props {
    onChargingSessionCreate: (e: SyntheticEvent) =>void;
    name: string;
}


const AddChargingSession = ({onChargingSessionCreate, name}: Props) => {

    return (
        <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
        <form onSubmit={onChargingSessionCreate}>
          <input readOnly={true} hidden={true} value={name} />
          <button
            type="submit"
            className="p-2 px-8 text-white bg-darkBlue rounded-lg hover:opacity-70 focus:outline-none"
          >
            Add
          </button>
        </form>
      </div>
    );
};

export default AddChargingSession