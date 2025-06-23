// we want the user to be able to submit their data --> feedback, name

// we want to then save that data continously to the feedback.txt

// then whenever the user wants to retrieve the data, they can



// working on allowing the user to post their feedback
// we need to use the HTTP module to create a server that will allow this

PORT  = 3000; 

const http = require('http');

// 
const server = http.createServer((req, res) => { // callback function 

    res.writeHead(200, {'Content-Type' : 'text'});
    // gives a status code, 200 generally means ok, and the type of the content 

    res.end('Hello');

})


// this tells node to start listening for requests
// runs the callback, console log once server is ready
server.listen(PORT, 'localhost', () => {
    console.log("Server running on" + PORT)
})