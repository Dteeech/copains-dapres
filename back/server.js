
// back/server.js
import express from 'express';
import { createClient } from '@supabase/supabase-js'; // Import correct
import router from './routes/routes.js'

import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();

// using morgan for logs
app.use(morgan('combined'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

// ...

app.use("/", router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Le serveur est en cours d'exécution sur le port http://localhost:${PORT}`);
});
