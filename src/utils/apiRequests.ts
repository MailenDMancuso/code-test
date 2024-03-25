/** This method calls the API in rder to get the ilst of users from the corresponding URL */
export const getUsersDetails = async () => {
  const url = 'https://randomuser.me/api/?results=50&';

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });

  return response;
};
