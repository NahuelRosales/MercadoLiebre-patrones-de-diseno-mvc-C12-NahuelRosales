const express = require ("express")
const path = require ("path")
const app = express()
const PORT = 3030

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

/* Enrutadores */
let indexRouter = require('./routes/indexRouter')
let usersRouter = require('./routes/usersRouter')

/* RUTAS */
app.use('/', indexRouter)
app.use('/users', usersRouter)





//SERVER

app.listen (PORT, () => {
    console.log(`Servidor levantado en el puerto ${PORT}
    http://localhost:${PORT}
    `);
});