// In java we use apache topcat as a server


// here in node we use express as a server
// Express is http server

// nodemon module: automactily updates changes in node memory 
// -------- to install------: npm intall -g nodemon
// if we do not use  nodemon module then we have to run server each time after any changesnode

const express = require('express');
const AuthService = require('../services/authService/AuthService');

const server = express();
// console.log(server);
server.get("/", (req, res) => {
    // //  console.log(req);
    //  console.log(res);
    res.send("hello from my API")
})

server.get("/home", (req, res) => {
    res.send("home Page")
})

server.get("non", (req, res) => {
    res.sendStatus(404); // not found
})

server.get("/auth",(req, res) => {
    // browser send headers with request with some information
    console.log(req.headers['auth-token']);
    res.sendStatus(403) // forbidden
})

server.get("/auth-valid", (req, res) => {
    const authTocken = req.headers['auth-tocken'];
    // console.log(typeof isAuthTockenValid);
    // debugger
    if(AuthService.isAuthTockenValid(authTocken)) {
        // res.sendStatus(200);
        res.status(200).json({authentication : true});
    } else {
        // res.status(403).json({ authentication: false });
        // res.sendStatus(403);
        res.status(403);
    }
})

server.listen(3100, () => console.log("server is running on port 3100"))