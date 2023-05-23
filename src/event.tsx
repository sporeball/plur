// import * as event from './event.tsx'
// event.emit('new-headmate')

const _events = {};

export function on (event, fn) {
  _events[event] = fn;
}

export function emit (event, ...args) {
  if (!(event in _events)) {
    throw new Error('[event.tsx] Unknown event');
  }
  _events[event](...args);
}
