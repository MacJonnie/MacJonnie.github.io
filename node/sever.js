const http = require('http')

const sever = http.createServer((req, res) => {

    console.log('Welcome to my server');
    
    if (req.url === '/') {
        res.write('My Name Is JOHN');
        res.end();
    } else if (req.url === '/Hello') {
        res.write('Its nice meeting you')
        res.end();
    }
    else res.write('Wrong Request')
});



sever.listen(8900, null, null, () => {
    console.log(`listening on port 8900...`)
});
// console.log(`listening on port 8900...`)
