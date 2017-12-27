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
                case 'add':
                case 'ls':
                case 'delete':
                    this[command](args);
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

    add(args) {
        this.emit('response', args.join(' '));
    }

    ls() {
        this.emit('response', 'ls ...');
    }

    delete() {
        this.emit('response', 'delete ...');
    }

}

module.exports = (client) => new Server(client);
