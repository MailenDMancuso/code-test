import React from "react";

/** Utils */
import { UserDetails } from "../common/interfaces";

/** Components */
import UserEditingSection from "../components/UserEditingSection";

/** Styles */
import "./userInfo.css";

interface UserCardProps {
  user: UserDetails;
  isEditingUser: boolean;
  onClick: (uuid: string) => void;
  onSave: (userDetailsUpdated: {
    id: {
      value: string;
    };
    email: string;
    phone: string;
  }) => void;
  onCancelEditing: () => void;
}

/** User card component for displaying the user's details on UI card */
const UserCard = ({
  user,
  isEditingUser,
  onClick,
  onSave,
  onCancelEditing,
}: UserCardProps) => {
  return (
    <div className="user-details">
      {user && (
        <div data-testid="user-details-card">
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
              <UserEditingSection
                user={user}
                onSave={onSave}
                onCancelEditing={onCancelEditing}
              />
            ) : (
              <>
                <div className="subtitle-detail">{user.email}</div>
                <div className="subtitle-detail">{user.phone}</div>
              </>
            )}
            <div className="subtitle-detail">
              {user.location.city}, {user.location.country}
            </div>
          </div>
          <div className="action-container">
            {!isEditingUser && (
              <button type="button" onClick={() => onClick(user.login.uuid)}>
                Edit details
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCard;
