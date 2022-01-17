
const express = require('express'); // load express
const cors = require('cors');
const cookieParser = require('cookie-parser')
var session = require('express-session')

const app = express();
app.use(cookieParser())
app.use(express.static(__dirname + "/public"));

//http://www.omdbapi.com/?i=tt3896198&apikey=f3203d48
var corsOptions = {
  origin: 'http://localhost:4200'
}


// middleware
app.use(cors(corsOptions))
app.use(express.json())  //recognize incoming req as json obj
app.use(express.urlencoded({extended: true}))
app.get('/', function(req, res) {
  res.send('hello world');
});

app.get('/movies/imdb/:title', movieController.getMovieByTitleFromApi)
const router = require('./src/routes/movieRouter.js')
app.use('/api', router)
app.use(express.json());
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
app.post('*', (req, res) => {
  req.header
  req.body; // JavaScript object containing the parse JSON
  res.json(req.body);
});


// setup port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

