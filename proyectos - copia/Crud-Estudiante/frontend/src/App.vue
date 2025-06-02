<!-- frontend/src/App.vue -->
<template>
  <h1>CRUD de Estudiantes</h1>
  <Estudiantes />
</template>

<script>
import Estudiantes from './components/Estudiantes.vue'
export default {
  components: { Estudiantes }
}
</script>