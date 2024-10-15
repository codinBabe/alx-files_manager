#!usr/bin/node

const sha1 = require('sha1');

const getHash = (string) => sha1(string);

export default getHash;
