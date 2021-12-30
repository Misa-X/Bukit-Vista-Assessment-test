const { default: axios } = require("axios")

const getData = () => {
  axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=f3203d48')
  .then(response => {
    console.log(response);
  })
};

getData();
