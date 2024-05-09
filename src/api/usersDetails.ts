/** This method calls the API in order to get the list of users */
const getUsersDetails = async () => {
  const url = 'https://randomuser.me/api?results=4';
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Fetching Error, status: ${response.status}`);
  }
  return response.json();
};

export { getUsersDetails };

// const response = await fetch(url, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(data),
// });
