# Bukit-Vista-Assessment-test

PROGRAMMER TEST- NODEJS BACKEND 
  
1: To run the app first download express from npmjs.com 

2: Run ``` npm init --yes ``` in the terminal to start the nodejs project

3: run ``` npm install express --save ``` to install express

4: Install all the dependencies:

``` npm install axios ```

``` npm install body-parser ```

``` npm install coockie-parser ```

``` npm install cors ```

``` npm install mysql ```

``` npm install sequelize ```

``` npm install nodemon ```


5: Before running the application create a database in mysql with the name ```nodejs_api_db_new```

6: To run the application type:
``` nodemon server.js ```

After running the application "movies" and "users" tables will be created automatically

7: Before inserting movies from the API to the database, create 1 user in "users" table in the mysql database


To test the APIs use Postman or browser:

http://localhost:3000/api/movies/imdb/:title
=> searches movies by title from API and inserts into user's fav movies database. (in place of ":title" write the title of the movie you want to get from the API to add to your favorite movies database)

http://localhost:3000/api/movies/:title
=> returns a specific movie from user's fav movies by typing the title of the movie.(in place of ":title" write the title of the movie you want to return from favorite movies database)

http://localhost:3000/api/movies/favorite
=> inserts movies to the database

http://localhost:3000/api/moviesfromdb
=> returns all movies in the user's favorite movies database


