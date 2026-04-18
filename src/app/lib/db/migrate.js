import db from './connection.js';

// VERY IMPORTANT for SQLite
db.exec('PRAGMA foreign_keys = ON');

const migration = `
BEGIN;

CREATE TABLE IF NOT EXISTS product (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  description TEXT,
  category TEXT,
  image TEXT,
  price REAL,
  rating REAL,
  active TEXT
);

COMMIT;
`;

db.exec(migration);

console.log('✅ Migrations executed');

export default db;
