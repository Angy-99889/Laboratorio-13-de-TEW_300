<!-- frontend/src/components/Estudiantes.vue -->
<template>
  <div>
    <form @submit.prevent="agregarEstudiante">
      <input v-model="nuevo.nombre" placeholder="Nombre" required />
      <input v-model.number="nuevo.edad" type="number" placeholder="Edad" required />
      <input v-model="nuevo.carrera" placeholder="Carrera" required />
      <button type="submit">Agregar</button>
    </form>

    <ul>
      <li v-for="est in estudiantes" :key="est.id">
        {{ est.nombre }} - {{ est.edad }} años - {{ est.carrera }}
        <button @click="eliminarEstudiante(est.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      estudiantes: [],
      nuevo: { nombre: '', edad: '', carrera: '' }
    }
  },
  methods: {
    async obtenerEstudiantes() {
      const res = await axios.get('http://localhost:3000/api/estudiantes')
      this.estudiantes = res.data
    },
    async agregarEstudiante() {
      await axios.post('http://localhost:3000/api/estudiantes', this.nuevo)
      this.nuevo = { nombre: '', edad: '', carrera: '' }
      this.obtenerEstudiantes()
    },
    async eliminarEstudiante(id) {
      await axios.delete(`http://localhost:3000/api/estudiantes/${id}`)
      this.obtenerEstudiantes()
    }
  },
  mounted() {
    this.obtenerEstudiantes()
  }
}
</script>
