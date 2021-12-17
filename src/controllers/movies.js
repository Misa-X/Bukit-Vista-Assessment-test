

const { default: axios } = require("axios")

// movie = function() {
//     axios.get('http://www.omdbapi.com/?apikey=f3203d48&?t=The+Shawshank+Redemption&y=1994')
//   .then((response) => {
//     console.log(response.data);
//     console.log(response.status);
//     console.log(response.statusText);
//     console.log(response.headers);
//     console.log(response.config);
//   });
// }

const getData = () => {
  axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=f3203d48')
  .then(response => {
    console.log(response);
  })
};

getData();
