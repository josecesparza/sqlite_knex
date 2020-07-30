const server = require('./server.js');
const port = process.env.PORT | 5000;

server.listen(port, () => {
    console.log(`\n***Server Reporting For Duty on port: ${port}_***\n`)
});