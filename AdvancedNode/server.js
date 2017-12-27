const EventEmitter = require('events');

class Server extends EventEmitter {
    constructor(client) {
        super();

        process.nextTick(() => {
            this.emit('response', 'Type a command');
        });

        client.on('command', (command, args) => {
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
        this.emit('response', 'Available Commands: add task\nls\ndelete: id');
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
