import config from './config.js';
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import mealRouter from './routers/mealRouter.js';

dotenv.config();

const app = express();
//using json data for body of request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(config.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(() => {
    console.log('connected to mongodb');
}).catch((error) => {
    console.log(error.reason);
});

// app.get('/api/meals', (req, res) => {
//     res.send(data.meals);
// });

app.use('/api/users', userRouter);
app.use('/api/meals', mealRouter);

// app.get('/api/meals/:id', (req, res) => {
//     const meal = data.meals.find(x => x._id === req.params.id);
//     if (meal) {
//         res.send(meal);
//     }
//     else {
//         res.status(404).send({ message: 'Meal not found' });
//     }
// });

// app.get('/', (req, res) => {
//     res.send('server ready');
// });

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});


