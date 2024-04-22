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

// const text = "mM    aaamm    aila eda naiel anmancuso";
// const result = text.replace(/ /g, '').toLowerCase().split('').reduce((acc, item) => {
//   if (acc[item]) {
//     return {
//       ...acc,
//       [item]: acc[item] + 1,
//     }
//   } else {
//     return {
//       ...acc,
//       [item]: 1,
//     };
//   }
// }, {});
// console.log('Result is ', result);

// const arr = [{ id: 4, value: 'bb' }, { id: 2, value: 'as' }, { id: 1, value: 'baa' }, { id: 2, value: 'aa' }, { id: 5, value: 'abc' }, { id: 6, value: 'bbb' }]
// const ordered = arr.sort((a, b) => a.value < b.value ? -1 : 1);
// console.log('***** order ASC is ', ordered);