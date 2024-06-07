/** This method calls the API in order to get the list of users */
const getUsersDetails = async () => {
  const url = "https://randomuser.me/api?results=50";
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`status: ${response.status}`);
  }
  return response.json();
};

export { getUsersDetails };
