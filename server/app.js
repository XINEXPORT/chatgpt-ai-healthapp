import express from 'express';
import morgan from 'morgan';
import ViteExpress from 'vite-express';
import{
    getFavorites,
    addFavorites
} from './controller.js'

const app = express()
const port = '8000'

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

ViteExpress.config({ printViteDevServerHost: true });

// Routes go here
app.get('/api/favorite', getFavorites)
app.post('./api/favorite', addFavorites)


ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));
