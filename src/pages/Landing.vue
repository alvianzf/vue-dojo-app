<template>
  <div>
  <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
    <div class="page-wrapper">
      <h1>Portal Sistem Manajemen Dojo Inkanas Tanjungpinang</h1>
      <h3>Powered by Speed Dev</h3>
      <v-btn class="btn" outlined>Daftar Siswa Baru</v-btn>
      <v-btn class="btn" outlined color="white">Pembayaran Iuran</v-btn>
    </div>
  </v-parallax>  </div>
</template>

<script>
import logo from '../assets/inkanas.png'

export default {
  data: () => ({
    logo
  })
}
</script>

<style scoped>
  .page-wrapper {
      padding: 0 20px;
      margin: 0px;
    }
</style>