const EventEmitter = require('events');

class Server extends EventEmitter {
    constructor(client) {
        super();
        client.on('command', (command) => {
            switch (command) {
                case 'help':
                    this[command]();
                    break;

                case 'add':
                    this[command]();
                    break;

                case 'ls':
                    this[command]();
                    break;

                case 'delete':
                    this[command]();
                    break;

                default:
                    this.emit('response', 'Unknown Command....');
                    break;
            }
        });
    }

    help() {
        this.emit('response', 'help ...');
    }

    add() {
        this.emit('response', 'add ...');
    }

    ls() {
        this.emit('response', 'ls ...');
    }

    delete() {
        this.emit('response', 'delete ...');
    }

}

module.exports = (client) => new Server(client);
