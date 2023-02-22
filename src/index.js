const express = require('express');
const server = express();

server.use(express.json());

const list = ['id01', 'id02', 'id03', 'id04'];

server.get('/push', (req, res) => {
    return res.json(list);
});

server.get('/push/:index', (req, res) => {
    const { index } = req.params;
    
    return res.json(list[index]);
});

server.put('/put/:index', (req, res) => {
    const { index } = req.params;
    const { id } = req.body;

    list[index] = id;

    return res.json(list);
});

server.post('/post', (req, res) => {
    const { id } = req.body;

    list.push(id);

    return res.json(list);
});

server.delete('/delete/:index', (req, res) => {
    const { index } = req.params;

    list.splice(index, 1);

    return res.json(list);
});

server.delete('/alldelete', (req, res) => {
    while(list.length) {
        list.pop();
    }

    return res.json(list);
});

server.listen(2000);