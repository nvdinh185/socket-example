const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', socket => {
    console.log(`Socket ${socket.id} has connected!!!`);
    socket.on("disconnect", () => {
        console.log(`Socket ${socket.id} disconnected!!!`);
    });
});

http.listen(4444, () => {
    console.log('Listening on port 4444');
});
