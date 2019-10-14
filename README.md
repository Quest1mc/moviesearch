Welcome to my movie search App
it is run only in the backend but it is simple and straight forward.
You will get best results with 'Yarn run dev'
since this will start up the nodejs server and the database in the right sequence.
it will also reload the program as needed. 

Technologies uses for this are purely node js , javascript, express js &
axios 
I used port 5000 and port 5001 but with a little tinkling it can be used anywhere 

The logic of this as flows 
you enter your query into /movie 
like so 
http://localhost:5000/movie?query=avengers

this will return an array of ids, images and titles.

for the purpose of this I have left a console.log for the backend user (but it should load on your browser as an array).

grab any of the movie ids and original titles and head over to 
/movieDetail

http://localhost:5000/movieDetail?id=841&title=Dune

The link above is an example of how to get movie detail
your input id number and title go to 2 separate sources to pull information
once the information has arrived it is aggregated and cached in a json-server
so the next time you search for the same movie it will first check the database to see if it has the info before making any calls axios calls.


BELOW ARE SOME OF MY THOUGHTS WHILE PUTTING THIS PROJECT TOGETHER

Using read me as a rough guide to get though the requirements 

Over view 

 
Step 1 collect user input 

step 2 check database to ensure data does not already exist

step 3 use it to make 2 axios calls 

step 4 aggregate data call ...”set” to make sure all data is unique.

Step 5 send information to client

step 6  store in database


step 7 ensure client can call video trailer using url





#further breakdown 
set up express server :tick

get request from front end :tick
console log query :tick


use query to make 3 axios requests(external)
requesting to tmdb and getting an array of movies and id to use to retrieve video:tick 
getting correct information from youtube api :tick


write function to check to see if in data base :tick
combine both results :tick
if (movieId) {return results from database }
else {
    make async calls aka 
}
send relevant info to client
store in db 



store in database

next request should then check database first before making axios requests 

make front end  
initials request 
trailer request
clear 

oct 10 approach adjustment

initial route >>> movie search 
movie list display >>>>
movie detail display >>>>>
movie trailer display 