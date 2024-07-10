const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'pg_password',
  port: 5432,
});

async function connectToPostgres() {
  try {
    const client = await pool.connect();
    console.log("Connected to PostgreSQL");
    // You can now make queries to the PostgreSQL server using client.query(...)
    client.release(); // Release client back to the pool
  } catch (err) {
    console.error('Error connecting to PostgreSQL', err.stack);
  }
}

module.exports = { pool, connectToPostgres };