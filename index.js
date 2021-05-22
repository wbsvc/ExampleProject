
const express = require('express');
const redis = require('redis');
const app = express();
const redisClient = redis.createClient({
    host: 'redis-server',
    port: 6379
});
redisClient.set('visits', 0);

app.get('/', (req, res) => {
    redisClient.get('visits', (err, visits) => {
        res.send('number of time visited the website is ' + visits);
        redisClient.set('visits', parseInt(visits) + 1);
    });

});

app.listen(8080, () => {
    console.log('app is successfully listening to 8080');
});