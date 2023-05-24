import fs from 'node:fs'
import path from 'node:path'
import electron from 'electron'

const defaults = {
  headmates: []
};

let _data;
let _dataPath;

export function get (key) {
  return _data[key];
}

export function set (key, value) {
  _data[key] = value;
  fs.writeFileSync(_dataPath, JSON.stringify(_data));
}

export function init () {
  _dataPath = path.join(
    global.userData,
    'data.json'
  );
  _data = parseData();
}

function parseData () {
  try {
    return JSON.parse(fs.readFileSync(_dataPath));
  } catch (e) {
    return defaults;
  }
}
