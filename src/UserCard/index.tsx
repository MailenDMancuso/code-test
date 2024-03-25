import React from 'react';

/** Utils */
import { UserDetails } from '../utils/interfaces';

/** Components */
import UserEditingSection from '../components/UserEditingSection';

/** Styles */
import './userInfo.scss';

/** User card component for displaying the user's details on UI card */
const UserCard = ({ user, isEditingUser, onClick, onSave, onCancelEditing }: {
  user: UserDetails,
  isEditingUser: boolean,
  onClick: (name: string, value: string) => void,
  onSave: (userDetailsUpdated: {
    id: {
      value: string,
    },
    email: string,
    phone: string
  }) => void,
  onCancelEditing: () => void,
}) => {
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
        {isEditingUser ? (
          <UserEditingSection user={user} onSave={onSave} onCancelEditing={onCancelEditing} />
        ) : (
          <>
            <div className="subtitle-detail">{user.email}</div>
            <div className="subtitle-detail">{user.phone}</div>
          </>
        )}
        <div className="subtitle-detail">{user.location.city}, {user.location.country}</div>
      </div>
      <div className="action-container">
        {!isEditingUser &&
          <button
            type="button"
            onClick={() => onClick(user.id.name, user.id.value)}
          >
            Edit details
          </button>
        }
      </div>
    </div>
  );
};

export default UserCard;
