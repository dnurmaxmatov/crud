import express from 'express';

const PORT = 5000
const host = 'localhost'


import middlewares from './middlewares/index.js'

const app = express()

app.use(middlewares);

import routes from './routes/index.js'

app.use(routes);

app.listen(PORT, () => console.log('Server is running http://' + host + ':' + PORT))