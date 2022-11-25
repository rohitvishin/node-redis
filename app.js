const Redis = require('ioredis');
const fs = require('fs');

const redis = new Redis({
    host: 'redis-15410.c240.us-east-1-3.ec2.cloud.redislabs.com',
    port: 15410,
    password: 'MGnl7TtlGtiGsELqRbK0GQuyHm6ZgR9i'
});

const express = require('express')
const app = express()
const port = 3000
redis.on('connect', function() {
    console.log('Connected!');
  });
app.get('/', (req, res) => {
    client.on('connect', function() {
        console.log('Connected!');
      });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})