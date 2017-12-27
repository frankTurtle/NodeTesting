const EventEmitter = require('events');

class Server extends EventEmitter {
    constructor(client) {
        super();
        this.tasks = {}; // holds task info
        this.taskID = 1; // holds current Task ID

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

    tasksString() {
        return Object.keys(this.tasks).map(key => {
            return `${key}: ${this.tasks[key]}`;
        }).join('\n');
    }

    help() {
        this.emit('response', 'Available Commands: add task\nls\ndelete: id');
    }

    add(args) {
        this.tasks[this.taskID] = args.join(' ');
        this.emit('response', `Added Task ${this.taskID}`);
        this.taskID++;
    }

    ls() {
        this.emit('response', `Tasks:\n${this.tasksString()}`);
    }

    delete(args) {
        delete (this.tasks[args[0]]);
        this.emit('response', `Deleted task ${args[0]}`);
    }

}

module.exports = (client) => new Server(client);
