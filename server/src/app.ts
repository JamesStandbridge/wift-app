import express from 'express';
import authRoutes from './routes/authRoutes';

const cors = require('cors');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get('/', (req, res) => {
    res.send('Bienvenue sur le serveur Express de Wift !');
});
app.use('/api/auth', authRoutes);

export default app;
