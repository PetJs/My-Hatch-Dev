const fs = require("fs");

// create folder
/* fs.mkdir('./test', 1, (err)=> {
    if(err){
        console.log(err);
    }
}) */
/* 
fs.rmdir('./test', ()=>{}) */

// Practice session

// Create a folder
/* fs.mkdir('./practice session', {mode:0o777, recursive:true}, (err) => {}) */

// create 3 folders inside the parent folder.
/* fs.mkdir('./practice session/3rd folder', {mode:0o777, recursive:true}, (err) => {}) */

// Create a file in the first folder
const file = 'file.txt';
fs.writeFile(`./practice session/1st folder/${file}`, 'the file created', (err)=>{
    if(err){
        console.log(err)
    }
})

// copy it into the second and third
//fs.copyFile(`./practice session/1st folder/${file}`, './practice session/2nd folder/second.txt', ()=>{})
    fs.copyFile(`./practice session/1st folder/${file}`, './practice session/3rd folder/thirf\d.txt', ()=>{})

// write your name and account number in the file
fs.writeFile(`./practice session/1st folder/${file}`, 'Name: Fagoroye Peter \n Account Number: 12345678', ()=>{})
// print tthe contents
fs.readFile(`./practice session/1st folder/${file}`, 'utf8', (err, data)=>{
    if(err){
        console.log(err)
    }else {
        console.log('File content:', data);
    }
})