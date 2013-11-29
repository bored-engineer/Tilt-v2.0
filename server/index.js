// Load ws to be a WebSocket server
var ws = require('ws');

// Create a server
var wss = new ws.Server({
	port: 8080
});

// On a new connection
wss.on('connection', function(ws) {

	// On first message
    ws.once('message', function(message) {
        console.log(message);
    });
    
});