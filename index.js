
const express = require('express'); // load express
const cors = require('cors');

const app = express();




var corsOptions = {
  origin: 'http://www.omdbapi.com/?i=tt3896198&apikey=f3203d48'
}

// middleware
app.use(cors(corsOptions))
app.use(express.json())  //recognize incoming req as json obj
app.use(express.urlencoded({extended: true}))


// root route
app.get('/', (req, res) => {
     res.send('Hello World');
});


// setup port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

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


// console.log(movie);
