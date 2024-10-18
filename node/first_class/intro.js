const http = require('node:http')

const users = [
    "Jessica",
    "Damola",
    "Alhaja",
    "Alfred",
    "Kehinde"
]

/**
 * 
 * @param {http.IncomingMessage} req 
 * @param {http.OutgoingMessage} res 
 */

function handler(req, res){
 const requestMethod = req.method

 if(requestMethod === "GET"){
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify(users))
    /* res.write(users, (err) => {
        if(err){
            console.log(err);
        }
    }) */
 }else if(requestMethod === "POST"){
    let body = ''
    req.on('data', (chunk) => {
        body += chunk.toString('utf8');
    })

    req.on('end', ()=>{
        console.log("finished reading body")
        const user = JSON.parse(body)
        users.push(user.name);
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify(users))
    }) 
 }else if(requestMethod === "DELETE"){
    users.pop()
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(users))
 } else if(requestMethod === "PATCH"){
    const url = req.url;
    console.log({url})
    // reading fron request
    let body = ''
    req.on('data', (chunk) => {
        body += chunk.toString('utf8');
    })

    // when we are done reading from the req
    req.on('end', ()=>{
        console.log("finished reading body")

        // get the user position
        const splits = url.split('/')
        const stringPosition = splits[1];
        const numerPosition = parseInt(stringPosition)
        const correctBody = JSON.parse(body);
        console.log({correctBody})
        
        // using array index, update the user in this position
        users[numerPositionosition] = correctBody.name;

        const user = JSON.parse(body)
        users.push(user.name);
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify(users))
    }) 
 }
}

const port = 3000

const server = http.createServer(handler)
server.listen(port, () =>{
    console.log(`server is running on ${port}`)
})

// Modules
// - http
// - fs (file stream)
// - path
// - streams
// - crypto
// - os