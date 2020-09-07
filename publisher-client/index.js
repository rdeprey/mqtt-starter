const mqtt = require('mqtt');
const client  = mqtt.connect('mqtt://localhost:1883');

client.on('connect', function () {
    client.publish('sensor', 'I am connected!');
 });

setInterval(function() {
    client.publish('sensor', Math.random().toString());
}, 15000); // every 15 seconds