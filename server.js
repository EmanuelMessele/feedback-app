// we want the user to be able to submit their data --> feedback, name

// we want to then save that data continously to the feedback.txt

// then whenever the user wants to retrieve the data, they can



// working on allowing the user to post their feedback
// we need to use the HTTP module to create a server that will allow this

PORT  = 3000; 

const http = require('http'); // for talking with the server
const fs = require('fs'); // for file manipulation
const url = require('url'); // working with links


const server = http.createServer((req, res) => { // callback function 
   const parsedUrl = url.parse(req.url, true); // true just means yes, we will parse the info into an object

   // working with GET  --> obtaining from the server
    if (req.method == 'GET' && parsedUrl.pathname == 'submit'){ // req.method is asking what kind of request are we dealing with


        // working with POST --> sending to the server
    } else if(req.method == 'POST' && parsedUrl.pathname == 'submit'){ // parsedUrl.pathname checks the pathname in our parsedUrl object

    } else {
            // then the route is invalid, send an error
    }
})


// this tells node to start listening for requests
// runs the callback, console log once server is ready
server.listen(PORT, 'localhost', () => {
    console.log("Server running on" + PORT)
})