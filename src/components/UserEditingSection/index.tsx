import React, { useState } from "react";

/** Utils */
import { UserDetails } from "../../common/interfaces";

interface UserEditingSectionProps {
  user: UserDetails;
  onSave: (userDetailsUpdated: {
    id: {
      value: string;
    };
    email: string;
    phone: string;
  }) => void;
  onCancelEditing: () => void;
}

/** Component for editing user's info and update the UI on the local state */
const UserEditingSection = ({
  user,
  onSave,
  onCancelEditing,
}: UserEditingSectionProps) => {
  const [userEditedDetails, setUserDetails] = useState({
    id: {
      value: user.id.value,
    },
    email: user.email,
    phone: user.phone,
  });

  const editUserDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserDetails({
      ...userEditedDetails,
      [e.target.name]: e.target.value,
    });
  };

  const saveUserDetails = () => {
    onSave(userEditedDetails);
  };

  return (
    <form onSubmit={saveUserDetails}>
      {(!userEditedDetails.email || !userEditedDetails.phone) &&
        "All fields are mandatory"}
      <input
        name="email"
        type="text"
        data-testid="email-input"
        defaultValue={user.email}
        onChange={(e) => editUserDetails(e)}
      />
      <input
        name="phone"
        type="text"
        data-testid="phone-input"
        defaultValue={user.phone}
        onChange={(e) => editUserDetails(e)}
      />
      <div className="action-container">
        <>
          <button
            type="button"
            style={{ backgroundColor: "red", marginRight: "10px" }}
            onClick={onCancelEditing}
          >
            Cancel
          </button>
          <button
            data-testid="submit-button"
            type="submit"
            style={{ backgroundColor: "green" }}
            disabled={!userEditedDetails.email || !userEditedDetails.phone}
          >
            Save details
          </button>
        </>
      </div>
    </form>
  );
};

export default UserEditingSection;
