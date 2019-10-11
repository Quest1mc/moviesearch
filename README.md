Using read me as a rough guide to get though the requirements 

Over view 

 
Step 1 collect user input 

step   2 check database to ensure data does not already exist

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

to do 
write function to check to see if in data base 
combine both results 
send relevant info to client
store in db 


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