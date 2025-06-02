
// backend/database/db.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Ruta absoluta a la base de datos (creará el archivo si no existe)
const dbPath = path.join(__dirname, 'estudiantes.db');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('❌ Error al conectar con SQLite:', err.message);
  } else {
    console.log('✅ Conectado a SQLite correctamente');
  }
});

// Crear la tabla 'estudiantes' si no existe
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS estudiantes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT NOT NULL,
      edad INTEGER NOT NULL,
      carrera TEXT NOT NULL
    )
  `, (err) => {
    if (err) {
      console.error('❌ Error al crear la tabla:', err.message);
    } else {
      console.log('✅ Tabla "estudiantes" lista');
    }
  });
});

module.exports = db;