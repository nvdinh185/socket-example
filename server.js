const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', socket => {
    console.log(`Socket ${socket.id} has connected!!!`);
    socket.on("disconnect", () => {
        console.log(`Socket ${socket.id} disconnected!!!`);
    });

    socket.on("Client-send-data", data => {
        console.log(socket.id + " Vua gui " + data);
        // socket.emit("Server-send-data", data + "888");// chỉ gửi về cho client vừa emit lên
        io.sockets.emit("Server-send-data", data);// gửi về cho tất cả client
        // socket.broadcast.emit("Server-send-data", data + "888");// gửi về cho tất cả (trừ client vừa emit lên)
    });

    socket.on("ai do dang go chu", () => {
        io.sockets.emit("ai do dang go chu");
    });

    socket.on("ai do ngung go chu", () => {
        io.sockets.emit("ai do ngung go chu");
    });

});

http.listen(4444, () => {
    console.log('Listening on port 4444');
});
