Using read me as a rough guide to get though the requirements 

Over view 

 
Step 1 collect user input 

step   2 check database to ensure data does not already exist

step 3 use it to make 2 axios calls 

step 4 aggregate data call ...”set” to make sure all data is unique.

Step 5 send information to client

step 6  store in database


step 7 ensure client can call video trailer using url



http://img.omdbapi.com/?apikey=[yourkey]&
http://www.omdbapi.com/?i=tt38
http://www.omdbapi.com/?i=tt38

http://www.omdbapi.com/?t=guardians&apikey=78f6f9a3

#further breakdown 
set up express server :tick

get request from front end :tick
console log query :tick


use query to make 2 axios requests
requesting to tmdb and getting an array of movies and id to use to retrieve video:tick 
a bit of a challenge identifying the proper code on youtube docs to retrieve videos by id
tempted to use a url hack however this will not provide any information from a youtube api call and this information is crucial to the app being abole to cache an aggregated object to memory for future use.

use promise.all after async to combine both responses call set to make unique 
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