// back/server.js
import express from 'express';
import { pool, asyncQuery } from './config/dbConfig.js';
;

const app = express();
const PORT = process.env.PORT || 3000;

// Vérification de la connexion à la base de données
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Erreur de connexion à la base de données:', err);
  } else {
    console.log('Connexion à la base de données réussie!');
    connection.release();  // Libérer la connexion après la vérification
  }
});

app.get('/', async (req, res) => {
  try {
    const result = await asyncQuery('SELECT * FROM votre_table');  // Remplacez 'votre_table' par le nom de votre table
    res.json(result);
  } catch (error) {
    console.error('Erreur lors de l\'exécution de la requête:', error);
    res.status(500).send('Erreur interne du serveur');
  }
});

app.listen(PORT, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${PORT}`);
});
