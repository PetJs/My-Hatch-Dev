const http = require('http')
const fs = require('fs')
const url = require('url')
const path = require('path')
const crypto = require('crypto')

const PORT = 8080;

const files = './uploads';

fs.mkdirSync(files, {recursive: true})

function parseMultipartFormData(req) {
    return new Promise((resolve, reject) => {
        // Gets the boundary from content type
        // Content type is a header used in HTTP request which defines the kind of data being sent
        // In our case we are using a multipart/form-data
        const contentType = req.headers['content-type']
        const boundary = contentType.split('; ')[1].replace('boundary=', '');
        const chunks = []

        // Collect data chunks
        req.on('data', chunk =>{
            chunks.push(chunk);
        })

        // After receiving the data
        req.on('end', ()=>{
            const body = Buffer.concat(chunks).toString();
            const parts = body.split(`--${boundary}`).slice(1, -1);
            const fileInfo = {};

            // Process the parts
            parts.forEach(part => {
                console.log('Processing part:', part);
                // separate it into headers and content
                const [headers, content] = part.split('\r\n\r\n');

                // chceck if content is undefined
                if(!content){
                    return 
                }

                const data = content.trim();

                // Find the filename
                const filename = headers.match(/filename="([^"]+)"/)
                if (filename){
                    const name = filename[1];

                    // Using crypto to create a unique name
                    const uniqueName = crypto.randomBytes(16).toString('latin1')+path.extname(name);

                    // save file to directory
                    fs.writeFileSync(path.join(files, uniqueName), data, 'binary');

                    // collect file info
                    fileInfo.name = name
                    fileInfo.uniqueName = uniqueName
                    fileInfo.size = data.length
                    fileInfo.mimetType = headers.match(/Content-Type: ([^;]+)/)[1]
                    fileInfo.uploadTime = new Date().toISOString();
                }
            })

            // Resolve the promise
            resolve(fileInfo)
        })
        req.on('error', reject)
    })
}


function handler(req, res){
    if(req.url === '/'){
        res.write('Welcome to this api, where you can upload file');
        res.end()
    }
    if(req.method === 'POST' && req.url === '/upload'){
        parseMultipartFormData(req)
            .then(fileInfo => {
                res.wrteHead(200, {'Content-Type': 'application/json'})
                res.end(JSON.stringify({
                    message: 'File uploaded succesfully',
                    file: fileInfo
                }))
            })
            .catch(err => {
                res.writeHead(500);
                res.end('Error Processing the file')
            })
    }else if(req.method === 'GET' && req.url.startsWith('/files/')){
        const filename = req.url.split('/files/')[1];
        const filePath = path.join('uploads', filename)

        // To check if the files exist
        fs.stat(filePath, (error)=>{
            if(error){
                res.wrteHead(404);
                return res.end('File not found')
            }

            // Send the file
            fs.readFile(filePath, (err, data) => {
                if(err){
                    res.wrteHead(500);
                    return res.end('Error reading the file')
                }

                res.wrteHead(200, {'Content-Type': 'application/octet-stream'});
                res.end(data)
            })
        })
    }else if(req.method === 'DELETE' && req.url.startsWith('/files/')){
        const filename = req.url.split('/files/')[1].split('/delete')[0];
        const filePath = path.join('uploads', filename)

        // check if file exist
        fs.stat(filePath, (err)=>{
            if(err){
                res.writeHead(404);
                return res.end('File not found')
            }

            // delete file
            fs.unlink(filePath, (err)=>{
                if(err){
                    res.writeHead(500);
                    return res.end('Error deleting file')
                }

                res.writeHead(200, {'Content-Type': 'application/json'})
                res.end(JSON.stringify({message: 'Deleted file successfully'}))
            })
        })
    }else if(req.method === 'GET' && req.url === ('/files')){
        fs.readdir('uploads', (err, files) => {
            if (err){
                res.writeHead(500);
                return res.end('Error Reading directory')
            }

            const metaDataArray = files.map(file =>{
                const filePath = path.join('uploads', file);
                const stats = fs.statSync(filePath)
                return{
                    filename: file,
                    size: stats.size,
                    uploadTime: stats.mtime.toISOString()
                }
            })

            res.writeHead(200, {'Content-Type': 'application/json'})
            res.end(JSON.stringify(metaDataArray))
        })
    }else{
        res.writeHead(404);
        res.end('Not Found')
    }
    
    const q = url.parse(req.url, true).query;
    const text = q.year + '' + q.month;
    
}



const server = http.createServer(handler);

server.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`)
})