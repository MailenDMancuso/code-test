import React from 'react';

/** Utils */
import { UserDetails } from '../utils/interfaces';

/** Styles */
import './userInfo.scss';

/** User cad component for displaying the user's details on UI card */
const UserCard = ({ user, onClick }: { user: UserDetails, onClick: (user: UserDetails) => void }) => (
  <div className="user-details">
    <button type="button" onClick={() => onClick(user)}>
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
        <div className="subtitle-detail">{user.email}</div>
        <div className="subtitle-detail">{user.phone}</div>
        <div className="subtitle-detail">{user.location.city}, {user.location.country}</div>
      </div>
    </button>
  </div>
);

export default UserCard;
