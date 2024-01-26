// Importation du module mysql
import mysql from "mysql";

// Création d'un groupe de connexions pour la base de données MySQL
export let pool  = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root', // Utilisez le nom d'utilisateur de votre base de données MAMP
    password: process.env.DB_PASSWORD || 'root', // Utilisez le mot de passe de votre base de données MAMP
    database: process.env.DB_DATABASE || 'copains_dapres', // Utilisez le nom de votre base de données MAMP
    port: process.env.DB_PORT || 8889

  });
  

// permet d'obtenir le resultat des requete sql async
export const asyncQuery = async (sql, params = []) => {
    return new Promise((resolve, reject)=>{
        pool.query(sql,params, (error, result)=>{
            if(error){
                return reject(error);
            }
            return resolve(result);
        });
    });
}