<template>
  <v-app>
    <v-app-bar
      app
      color="danger"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Inkanas Logo"
          class="shrink mr-2"
          contain
          :src="logo"
          transition="scale-transition"
          width="40"

          @click.stop="drawer = !drawer"
        />

        <span class="mr-2">INKANAS Tanjungpinang</span>
      </div>

      <v-spacer></v-spacer>

      <span class="mr-1" @click="logout">Logout</span>

    </v-app-bar>

    <v-content>
      <v-row>
        <div>
          <v-navigation-drawer
            v-model="drawer"
            absolute
            left
            temporary
          >
            <v-list
              nav
              dense
            >
              <v-list-item-group
                v-model="group"
                active-class="deep-red--text text--accent-4"
              >
                <v-list-item>
                  <v-list-item-title><i class="fa fa-home"></i> Dashboard</v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-title><i class="fa fa-group"></i> Peserta Latihan</v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-title><i class="fa fa-gg-circle"></i> Iuran</v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-title><i class="fa fa-address-card"></i> Pendaftaran Ujian</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
              <sub class="bottom">Copyright 2019 - Alvian Zachry Faturrahman</sub>
            </v-list>
          </v-navigation-drawer>
        </div>
        </v-row>
          
        <div>
          <router-view>

            <!-- Content will be rendered here -->

          </router-view>
        </div>
    </v-content>
  </v-app>
</template>

<script>

import logo from './assets/inkanas.png'

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
    logo,
    drawer: false,
    group: null,
  }),

  methods: {
    logout() {
      window.alert("logout")
    },

  },

  watch: {
      group () {
        this.drawer = false
      },
    },
};
</script>

<style>
  .bottom {
    bottom: 3%;
    position: fixed;
  }

  .btn {
    margin-right: 10px;
  }
</style>
