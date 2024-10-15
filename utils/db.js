#!/usr/bin/node

const { MongoClient } = require('mongodb');
const mongodb = require('mongodb');

class DBClient {
  constructor() {
    const host = process.env.DB_HOST ? process.env.DB_HOST : 'localhost';
    const port = process.env.DB_PORT ? process.env.DB_PORT : 27017;
    this.database = process.env.DB_DATABASE
      ? process.env.DB_DATABASE
      : 'files_manager';
    const dbUrl = `mongodb://${host}:${port}`;
    this.connected = false;
    this.client = new MongoClient(dbUrl, { useUnifiedTopology: true });
    this.client
      .connect()
      .then(() => {
        this.connected = true;
      })
      .catch((err) => console.log(err.message));
  }

  isAlive() {
    return this.client.isConnected();
  }

  async nbUsers() {
    await this.client.connect();
    const users = await this.client
      .db(this.database)
      .collection('users')
      .countDocuments();
    return users;
  }

  async nbFiles() {
    await this.client.connect();
    const users = await this.client
      .db(this.database)
      .collection('files')
      .countDocuments();
    return users;
  }
}

const dbClient = new DBClient();

module.exports = dbClient;
