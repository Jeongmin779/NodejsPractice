const EventEmitter = require('events');
const emitter = new EventEmitter();

const callback1 = (args) => {
    console.log('first callback - ', args);
};
emitter.on('jeongman', callback1);

emitter.on('jeongman', (args) => {
    console.log('second callback - ', args);
});

emitter.emit('jeongman', {message : 1});
emitter.emit('jeongman', {message : 2});
emitter.removeListener('jeongman', callback1);
emitter.emit('jeongman', {message : 3});
emitter.removeAllListeners();
emitter.emit('jeongman', {message : 4});