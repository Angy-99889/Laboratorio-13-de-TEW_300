const express = require('express');
const router = express.Router();
const db = require('../database/db');

router.get('/', (req, res) => {
  db.all('SELECT * FROM estudiantes', [], (err, rows) => {
    if (err) return res.status(500).send(err);
    res.json(rows);
  });
});

router.post('/', (req, res) => {
  const { nombre, correo, carrera } = req.body;
  db.run(
    'INSERT INTO estudiantes (nombre, correo, carrera) VALUES (?, ?, ?)',
    [nombre, correo, carrera],
    function (err) {
      if (err) return res.status(500).send(err);
      res.json({ id: this.lastID });
    }
  );
});

router.put('/:id', (req, res) => {
  const { nombre, correo, carrera } = req.body;
  const { id } = req.params;
  db.run(
    'UPDATE estudiantes SET nombre = ?, correo = ?, carrera = ? WHERE id = ?',
    [nombre, correo, carrera, id],
    function (err) {
      if (err) return res.status(500).send(err);
      res.sendStatus(200);
    }
  );
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM estudiantes WHERE id = ?', id, function (err) {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
});

module.exports = router;
