const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(callback) {
        this.emit('log', 'test Emit...');
        callback();
        this.emit('log', 'ended!');
    }
}

module.exports.Logger = Logger;