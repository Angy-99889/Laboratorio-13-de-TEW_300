<template>
  <div class="container">
    <h1>Generador de Códigos QR</h1>
    <input v-model="text" placeholder="Escribe algo..." />
    <qrcode-vue :value="text" :size="200" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import QrcodeVue from 'qrcode.vue'

const text = ref('')
</script>

<style>
.container {
  text-align: center;
  margin-top: 50px;
}
input {
  padding: 10px;
  width: 300px;
  font-size: 18px;
  margin-bottom: 20px;
}
</style>