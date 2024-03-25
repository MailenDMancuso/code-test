import React, { useState } from 'react';

/** Utils */
import { UserDetails } from '../../utils/interfaces';

/** Component for editing user's info and update the UI on the local state */
const UserEditingSection = ({ user, onSave, onCancelEditing }: {
  user: UserDetails,
  onSave: (userDetailsUpdated: {
    id: {
      value: string,
    },
    email: string,
    phone: string
  }) => void,
  onCancelEditing: () => void,
}) => {
  const [userEditedDetails, setUserDetails] = useState({
    id: {
      value: user.id.value,
    },
    email: user.email,
    phone: user.phone,
  });

  const editUserDetails = (value: string, key: string) => {
    setUserDetails({
      ...userEditedDetails,
      [key]: value,
    });
  }

  const saveUserDetails = () => {
    onSave(userEditedDetails);
  }

  return (
    <>
      <input type="text" defaultValue={user.email} onChange={e => editUserDetails(e.target.value, 'email')} />
      <input type="text" defaultValue={user.phone} onChange={e => editUserDetails(e.target.value, 'phone')} />
      <div className="action-container">
        <>
          <button
            type="button"
            style={{ backgroundColor: 'red', marginRight: '10px' }}
            onClick={onCancelEditing}
          >
            Cancel
          </button>
          <button
            type="button"
            style={{ backgroundColor: 'green' }}
            onClick={saveUserDetails}
            disabled={!userEditedDetails.email || !userEditedDetails.phone}
          >
            Save details
          </button>
        </>
      </div>
    </>
  );
};

export default UserEditingSection;
