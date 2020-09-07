const mqtt = require('mqtt');
const client  = mqtt.connect('mqtt://localhost:1883');

client.on('connect', function () {
    client.subscribe('sensor', function (err) {
        if (!err) {
            console.log('I am subscribed to the sensor topic!');
        }
    });
});

client.on('message', function (topic, message) {
    console.log(message.toString());
});