import React, { useState } from 'react';

/** Utils */
import { UserDetails } from '../utils/interfaces';

/** Styles */
import './userInfo.scss';

/** User cad component for displaying the user's details on UI card */
const UserCard = ({ user, isEditingUser, onClick, onSave, onCancelEditing }: {
  user: UserDetails,
  isEditingUser: boolean,
  onClick: (id: string) => void,
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
    <div className="user-details">
      <div className="background-container">
        <span className="user-name">
          {user.name.first} {user.name.last}
        </span>
        <div className="image-description">
          <img
            className="user-avatar"
            src={user.picture.medium}
            alt="user-medium"
          />
        </div>
      </div>
      <div className="info-container">
        {isEditingUser ?
          <input type="text" defaultValue={user.email} onChange={e => editUserDetails(e.target.value, 'email')} /> :
          <div className="subtitle-detail">{user.email}</div>
        }
        {isEditingUser ?
          <input type="text" defaultValue={user.phone} onChange={e => editUserDetails(e.target.value, 'phone')} /> :
          <div className="subtitle-detail">{user.phone}</div>
        }
        <div className="subtitle-detail">{user.location.city}, {user.location.country}</div>
      </div>
      <div className="action-container">
        {isEditingUser ? (
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
        ) : (
          <button
            type="button"
            onClick={() => onClick(user.id.value)}
          >
            Edit details
          </button>
        )}
      </div>
    </div>
  );
};

export default UserCard;
