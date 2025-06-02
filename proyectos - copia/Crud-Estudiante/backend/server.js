const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let estudiantes = [
  { id: 1, nombre: 'Juan Pérez', edad: 20, carrera: 'Ingeniería' },
  { id: 2, nombre: 'Ana Gómez', edad: 22, carrera: 'Medicina' },
];

app.get('/api/estudiantes', (req, res) => {
  res.json(estudiantes);
});

app.get('/api/estudiantes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const estudiante = estudiantes.find(e => e.id === id);
  if (!estudiante) {
    return res.status(404).json({ message: 'Estudiante no encontrado' });
  }
  res.json(estudiante);
});

app.post('/api/estudiantes', (req, res) => {
  const { nombre, edad, carrera } = req.body;
  const nuevoEstudiante = {
    id: estudiantes.length ? estudiantes[estudiantes.length - 1].id + 1 : 1,
    nombre,
    edad,
    carrera,
  };
  estudiantes.push(nuevoEstudiante);
  res.status(201).json(nuevoEstudiante);
});

app.put('/api/estudiantes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, edad, carrera } = req.body;
  const index = estudiantes.findIndex(e => e.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Estudiante no encontrado' });
  }
  estudiantes[index] = { id, nombre, edad, carrera };
  res.json(estudiantes[index]);
});

app.delete('/api/estudiantes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = estudiantes.findIndex(e => e.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Estudiante no encontrado' });
  }
  estudiantes.splice(index, 1);
  res.json({ message: 'Estudiante eliminado' });
});

app.listen(port, () => {
  console.log(`Servidor backend simulado escuchando en http://localhost:${port}`);
});
