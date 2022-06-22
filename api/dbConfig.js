const { Pool } = require("pg");

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    port: '5432',
    password: 'password',
    database: 'posts_db'
});

pool.connect();

// Test DB connection

pool.query('SELECT * FROM posts', (err, res) =>{
if (!err){
    console.log(res.rows);
} else {
    console.log(err.message);
}
pool.end;
})

module.exports = pool;
