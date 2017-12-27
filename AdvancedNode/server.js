const EventEmitter = require('events');

class Server extends EventEmitter {
    constructor(client) {
        super();
        client.on('command', (command) => {
            console.log(`Command: ${command}`);
            // help, add, ls, delete
        });
    }

}

module.exports = (client) => new Server(client);
