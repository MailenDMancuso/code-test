import React, { useEffect, useState } from 'react';

/** Utils */
import { UserDetails } from '../utils/interfaces';
import { getUsersDetails } from '../utils/apiRequests';

/** Components */
import Loader from '../components/Loader';
import UserCard from '../UserCard';
import SearchBar from '../components/SearchBar';
import SortigOption from '../components/SortigOption';

/** Styles */
import './landingPageStyles.scss';

const ASC = 'asc';
const DESC = 'desc';

const LandingPage = () => {
  const [isLoading, setLoading] = useState(false);
  const [usersDetails, setUsersDetails] = useState<UserDetails[]>([]);
  const [filteredUsersDetails, setFilteredUsersDetails] = useState<UserDetails[]>([]);
  const [partialSearchedUser, setPartialSearchedUser] = useState('');
  const [isEditingUser, setEditingUser] = useState('');
  const [sortingOrder, setSortingOrder] = useState('');

  /** This method is in charge of retrieving the list of users from the correspodig url */
  const getUsersDetailsData = async () => {
    setLoading(true);
    try {
      const response = await getUsersDetails();
      const data = await response.json();
      setUsersDetails(data.results);
      setFilteredUsersDetails(data.results);
    } catch (error) {
      alert('Something went wrong while recovering users details');
    } finally {
      setLoading(false);
    }
  };

  /** After intial mounting of the component, call the API to retrieve users details */
  useEffect(() => {
    getUsersDetailsData();
  }, []);

  /** After updating the state for searching users, the list of filtered users should be updated */
  useEffect(() => {
    const setPartialFilteredUsers = () => {
      let filteredUsers = partialSearchedUser
        ? usersDetails.filter(user => user.name.first.concat(user.name.last).toLowerCase().includes(partialSearchedUser) || user.email.toLowerCase().includes(partialSearchedUser))
        : usersDetails;

      setFilteredUsersDetails(filteredUsers);
    };

    setPartialFilteredUsers();
  }, [partialSearchedUser, usersDetails]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPartialSearchedUser(event.target.value.toLowerCase());
  };

  /** This method is in charge of ordering the list of users by ASC or DESC order*/
  const onClickHandler = (order: string) => {
    setFilteredUsersDetails(
      [...filteredUsersDetails.sort((a, b) =>
        order === ASC ? a.name.first.localeCompare(b.name.first) : b.name.first.localeCompare(a.name.first)
      )]
    );
    setSortingOrder(order);
  };

  const onUserCardClick = (id: string) => {
    setEditingUser(id);
  }

  /** This method is in charge of updating the list of users on the local state */
  const onSaveUserDetails = (userDetailsUpdated: any) => {
    setUsersDetails(prevState => prevState.map(el => (el.id.value === userDetailsUpdated.id.value ? { ...el, ...userDetailsUpdated } : el)))
    setFilteredUsersDetails(prevState => prevState.map(el => (el.id.value === userDetailsUpdated.id.value ? { ...el, ...userDetailsUpdated } : el)));
    setEditingUser('');
  };

  const onCancelEditing = () => {
    setEditingUser('');
  }

  return (
    <div className='main-container'>
      <h1>Welcome to the Southteams' Code Test</h1>
      {isLoading ? <Loader /> : (
        <>
          <SearchBar value={partialSearchedUser} onChangeHandler={onChangeHandler} />
          Sort users by name in:
          <SortigOption label="Ascending Order" disableOption={sortingOrder === ASC} onClickHandler={() => onClickHandler(ASC)} />
          <SortigOption label="Descending Order" disableOption={sortingOrder === DESC} onClickHandler={() => onClickHandler(DESC)} />
          <div className='users-container'>
            {filteredUsersDetails.map(user => (
              <UserCard
                key={user.login.uuid}
                user={user}
                isEditingUser={isEditingUser === user.id.value}
                onClick={onUserCardClick}
                onSave={onSaveUserDetails}
                onCancelEditing={onCancelEditing}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LandingPage;
