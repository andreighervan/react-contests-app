import config, {nodeEnv} from './config';
import express from 'express';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import serverRender from './serverRender';

const server = express();

server.use('/api', apiRouter);

server.set('view engine', 'ejs');

server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
}));

server.use(express.static('public'));

server.listen(config.port, () => {
    console.info('Express listening on port ', config.port);
});

server.get('/', (req, res) => {
    serverRender()
        .then(({initialMarkup, initialData}) => {
            res.render('index', {initialMarkup, initialData})
        })
        .catch(error => {
            console.error(error);
            res.status(404).send('Bad Request');
        });
});


