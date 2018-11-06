const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();

const url = 'mongodb://mongo/docker-test';
const dbName = 'docker-test';

const getRand = () => Math.floor(Math.random() * 100) + 1;

app.get('/', async (req, res) => {
  let client;

  try {
    client = await MongoClient.connect(url, { useNewUrlParser: true });
    const db = client.db(dbName);
    const data = [];
    await db.collection('numbers')
      .insertOne({
        value: getRand(),
      });

    await db.collection('numbers').find({}).forEach((item) => {
      data.push(item.value);
    });
    res.status(200).json(data);
  } catch (err) {
    console.log('Error', err.stack);
    res.status(500).json({ err: err.stack });
  }

  if (client) {
    client.close();
  }
});

module.exports = app;
