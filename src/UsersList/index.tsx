import React, { useEffect, useState } from "react";

/** Utils */
import { UserDetails } from "../common/interfaces";
import { getUsersDetails } from "../api/usersDetails";

/** Components */
import Loader from "../components/Loader";
import UserCard from "../UserCard";
import SearchBar from "../components/SearchBar";
import SortingOption from "../components/SortigOption";

/** Styles */
import "./landingPageStyles.css";

enum options {
  ASC = "asc",
  DESC = "desc",
}

const UsersList = () => {
  const [isLoading, setLoading] = useState(false);
  const [usersDetails, setUsersDetails] = useState<UserDetails[]>([]);
  const [filteredUsersDetails, setFilteredUsersDetails] = useState<
    UserDetails[]
  >([]);
  const [partialSearchedUser, setPartialSearchedUser] = useState<string>("");
  const [isEditingUser, setEditingUser] = useState("");
  const [sortingOrder, setSortingOrder] = useState("");

  /** This method is in charge of retrieving the list of users from the correspoding url */
  const getUsersDetailsData = async () => {
    setLoading(true);
    try {
      const { results } = await getUsersDetails();
      setUsersDetails(results);
      setFilteredUsersDetails(results);
    } catch (error) {
      console.error(
        "Something went wrong while fetching users details. Error: ",
        error
      );
    }
    setLoading(false);
  };

  /** After intial mounting of the component, call the API to retrieve users details */
  useEffect(() => {
    getUsersDetailsData();
  }, []);

  /** After updating the state for searching users, the list of filtered users should be updated */
  useEffect(() => {
    const setPartialFilteredUsers = () => {
      let filteredUsers = partialSearchedUser
        ? usersDetails.filter((user) =>
            user.name.first
              .concat(user.name.last)
              .toLowerCase()
              .includes(partialSearchedUser)
          )
        : usersDetails;

      setFilteredUsersDetails(filteredUsers);
    };

    setPartialFilteredUsers();
  }, [partialSearchedUser, usersDetails]);

  /** Handler for changing seacrh input */
  const onSearchingChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPartialSearchedUser(event.target.value.toLowerCase());
  };

  /** This method is in charge of ordering the list of users by ASC or DESC order*/
  const onClickHandler = (order: options) => {
    let orderedUsersList = [];
    if (order === options.ASC) {
      orderedUsersList = filteredUsersDetails.sort((a, b) =>
        a.name.first < b.name.first ? -1 : 1
      );
    } else {
      orderedUsersList = filteredUsersDetails.sort((a, b) =>
        a.name.first > b.name.first ? -1 : 1
      );
    }
    setFilteredUsersDetails([...orderedUsersList]);
    setSortingOrder(order);
  };

  /** Handler for selecting one car for editing user details */
  const onUserCardClick = (userId: string) => {
    setEditingUser(userId);
  };

  /** This method is in charge of updating the list of users on the local state */
  const onSaveUserDetails = (userDetailsUpdated: any) => {
    const updateUserDetails = (
      elem: { id: { value: string } },
      userDetailsUpdated: any
    ) => {
      return elem.id.value === userDetailsUpdated.id.value
        ? { ...elem, ...userDetailsUpdated }
        : elem;
    };

    setUsersDetails((prevState) =>
      prevState.map((el) => updateUserDetails(el, userDetailsUpdated))
    );
    setFilteredUsersDetails((prevState) =>
      prevState.map((el) => updateUserDetails(el, userDetailsUpdated))
    );
    setEditingUser("");
  };

  const onCancelEditing = () => {
    setEditingUser("");
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SearchBar
            value={partialSearchedUser}
            onChangeHandler={onSearchingChangeHandler}
          />
          <div className="buttons-wrapper">
            <div>Sort users by name in:</div>
            <div>
              <SortingOption
                label="Ascending Order"
                disableOption={sortingOrder === options.ASC}
                onClickHandler={() => onClickHandler(options.ASC)}
              />
              <SortingOption
                label="Descending Order"
                disableOption={sortingOrder === options.DESC}
                onClickHandler={() => onClickHandler(options.DESC)}
              />
            </div>
          </div>
          <div className="users-container">
            {filteredUsersDetails.map((user: UserDetails) => (
              <UserCard
                key={user.login.uuid}
                user={user}
                isEditingUser={isEditingUser === user.login.uuid}
                onClick={onUserCardClick}
                onSave={onSaveUserDetails}
                onCancelEditing={onCancelEditing}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default UsersList;
