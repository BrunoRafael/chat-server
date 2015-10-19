/**
 * Created by Bruno Rafael on 12/09/2015.
 */
var httpServer= require('http').createServer();
var socket_io = require("socket.io")(httpServer);
var io = socket_io();

var userTokens = [],
    sockets = [];

io.on('connection', function(socket){
        socket.on('init', function(userLogin){
            userTokens[userLogin] = socket.id;
            sockets[socket.id] = {userLogin : userLogin, socket : socket};

            socket.on('disconnect', function(){
                delete sockets[userTokens[userLogin]];
                delete userTokens[userLogin];
            });
        });

        socket.on('private message', function(json){
            var socket = sockets[userTokens[json.to]].socket;
            socket.emit('message', {
                from : sockets[userTokens[json.from]].userLogin,
                message : json.message
            });
        });
    }
);

module.exports = io;