const http = require('http');

const server = http.createServer((req,res) =>{
    if(req.url === '/'){
        res.end("Welcome to the home page");
    }
    else if(req.url === '/about'){
        res.end("This is my short story");
    }
    else{
        res.end(
            `
            <h1>OOps Kuch toh glti hogi </h1>
            `
         )
    }
    
    
})


server.listen(3000);


// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end("Welcome to the home page");
//     } else if (req.url === '/about') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end("This is my short story");
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.end(
//             `
//             <h1>OOps Kuch toh glti hogi </h1>
//             `
//         );
//     }
// });

// server.listen(3000, () => {
//     console.log('Server is listening on port 3000');
// });
