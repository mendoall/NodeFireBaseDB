import express from "express";
import animalesRoutes from './routes/animales.mjs';
import bodyParser from "body-parser";
import citaRoutes from './routes/citas.mjs';

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello, Express.js Server!</h1>');
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(bodyParser.json({limit:'50mb'}));
app.use('/animal', animalesRoutes);
app.use('/cita', citaRoutes);

const port = process.env.PORT || 3000;
// Start the server
app.listen(port, () => {
    console.log(`Node.js HTTP server is running on port ${port}`);
});