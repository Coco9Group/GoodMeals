import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/meals', (req, res) => {
    res.send(data.meals);
});

app.get('/api/meals/:id', (req, res) => {
    const meal = data.meals.find(x => x._id === req.params.id);
    if (meal) {
        res.send(meal);
    }
    else {
        res.status(404).send({ message: 'Meal not found' });
    }
});

app.get('/', (req, res) => {
    res.send('server ready');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});


