
import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import cookieParser from 'cookie-parser';

import homeRoute from './routes/homeRoute.js';
import userRoute from './routes/userRoute.js';
import dashRoute from './routes/dashRoute.js';
import AuthMiddleware from './middleware/authMiddleware.js';

const app = express();
app.set('view engine', 'ejs');

app.use(expressLayouts);
app.set('layout', 'layout');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

app.use('/', homeRoute);
app.use('/user', userRoute);

let auth = new AuthMiddleware();
app.use(auth.verificarUsuarioLogado);

app.use('/dashboard', dashRoute);

const port = 5000;
app.listen(port, ()=> { console.log(`Servidor em execução na porta: ${port}`); });