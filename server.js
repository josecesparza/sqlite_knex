var express = require('express');

const server = express();
const carsDB = require('./data/db-config');
const { Router } = require('express');
const dbConfig = require('./data/db-config');

server.use(express.json());

server.get('/', (req, res) => {
    res.send('<h1>Welcome to the Cars Server</h1>');
});

server.get('/cars', async (req, res) => {
    try {
        const cars = await carsDB.find();
        return res.status(200).json({ cars });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            err: "Error"
        });
    }
});

server.get('/cars/:id', async (req, res) => {
    try {
        const cars = await carsDB.findById(req.params.id)
        cars ? res.status(200).json({ cars }) : res.status(404).json({
            error: 'The car with the specified ID does not exits'
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            err: "Error"
        });
    }
});

server.post('/cars', async (req, res) => {
    try {
        const cars = await dbConfig.insert(req.body);
        post ? res.status(201).json({ cars }) : res.status(400).json({
            error: 'Please fill out all required fields before posting a new one'
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            err: "Error"
        });
    }
});

server.put('/cars/:id', async (req, res) => {
    try {
        console.log('inside put');
        const cars = await dbConfig.update(req.params.id, req.body)
        post ? res.status(200).json(cars) : res.status(404).json({
            error: 'The car with the specified ID does not exits'
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            err: "Error"
        });
    }
});

server.delete('/cars/:id', async (req, res) => {
    try {
        console.log('inside delete');
        const cars = await dbConfig.remove(req.params.id)
        post > 0 ? res.status(201).json(cars) : res.status(404).json({
            error: 'The car with the specified ID does not exits'
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            err: "Error"
        });
    }
});

module.exports = server;